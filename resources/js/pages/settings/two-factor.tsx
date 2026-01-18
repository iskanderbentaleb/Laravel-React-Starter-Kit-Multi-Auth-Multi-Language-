import HeadingSmall from '@/components/heading-small';
import TwoFactorRecoveryCodes from '@/components/two-factor-recovery-codes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTwoFactorAuth } from '@/hooks/use-two-factor-auth';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { confirm, disable, enable, show } from '@/routes/two-factor';
import { type BreadcrumbItem } from '@/types';
import { Form, Head, router } from '@inertiajs/react';
import { ShieldBan, ShieldCheck, ShieldAlert } from 'lucide-react';
import { useState, useCallback } from 'react';
import { TwoFactorSetupArea } from '@/components/two-factor-setup-area';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { useTranslation } from 'react-i18next';

interface TwoFactorProps {
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
}

export default function TwoFactor({
    requiresConfirmation = false,
    twoFactorEnabled = false,
}: TwoFactorProps) {
    const { t } = useTranslation();
    const {
        qrCodeSvg,
        hasSetupData,
        manualSetupKey,
        clearSetupData,
        fetchSetupData,
        recoveryCodesList,
        fetchRecoveryCodes,
        errors,
    } = useTwoFactorAuth();
    const [isSettingUp, setIsSettingUp] = useState<boolean>(false);

    const handleSuccess = useCallback(() => {
        setIsSettingUp(false);
        fetchRecoveryCodes();
    }, [fetchRecoveryCodes]);

    const handleCancel = useCallback(() => {
        setIsSettingUp(false);
        clearSetupData();
        // Clear the secret on the server if they cancel setup
        router.delete(disable.url(), {
            preserveScroll: true,
            onSuccess: () => clearSetupData(),
        });
    }, [clearSetupData]);

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: t('settings.two_factor.breadcrumb'),
            href: show.url(),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('settings.two_factor.page_title')} />

            <h1 className="sr-only">{t('settings.two_factor.sr_title')}</h1>

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title={t('settings.two_factor.section_title')}
                        description={t('settings.two_factor.section_description')}
                    />
                    {twoFactorEnabled ? (
                        <div className="flex flex-col items-start justify-start space-y-6 animate-in fade-in duration-500">
                            <div className="flex items-center gap-2">
                                <Badge variant="default" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20 px-3 py-1">
                                    <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                                    {t('settings.two_factor.enabled_badge')}
                                </Badge>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {t('settings.two_factor.enabled_description')}
                            </p>

                            <div className="w-full">
                                <TwoFactorRecoveryCodes
                                    recoveryCodesList={recoveryCodesList}
                                    fetchRecoveryCodes={fetchRecoveryCodes}
                                    errors={errors}
                                />
                            </div>

                            <Separator />

                            <div className="relative inline">
                                <Form {...disable.form()}>
                                    {({ processing }) => (
                                        <Button
                                            variant="destructive"
                                            type="submit"
                                            disabled={processing}
                                            className="rounded-xl shadow-lg shadow-destructive/10"
                                        >
                                            <ShieldBan className="mr-2 h-4 w-4" />
                                            {t('settings.two_factor.disable')}
                                        </Button>
                                    )}
                                </Form>
                            </div>
                        </div>
                    ) : isSettingUp ? (
                        <TwoFactorSetupArea
                            action={confirm.url()}
                            qrCodeSvg={qrCodeSvg}
                            manualSetupKey={manualSetupKey}
                            onSuccess={handleSuccess}
                            onCancel={handleCancel}
                            errors={errors}
                            initialStep={hasSetupData ? 'verify' : 'qr'}
                        />
                    ) : (
                        <div className="flex flex-col items-start justify-start space-y-6 animate-in fade-in duration-500">
                            <div className="flex items-center gap-2">
                                <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20 px-3 py-1">
                                    <ShieldAlert className="mr-1.5 h-3.5 w-3.5" />
                                    {t('settings.two_factor.disabled_badge')}
                                </Badge>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {t('settings.two_factor.disabled_description')}
                            </p>

                            <div className="w-full overflow-hidden rounded-2xl bg-primary/5 p-6 border border-primary/10 transition-colors hover:bg-primary/10">
                                {hasSetupData ? (
                                    <div className="flex flex-col items-center gap-4 text-center">
                                        <div className="rounded-full bg-primary/20 p-4 text-primary">
                                            <ShieldCheck className="h-8 w-8" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-foreground">{t('settings.two_factor.continue_setup')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('settings.two_factor.finish_setup_description')}</p>
                                        </div>
                                        <Button
                                            onClick={() => setIsSettingUp(true)}
                                            className="w-full sm:w-auto rounded-xl shadow-lg shadow-primary/20"
                                        >
                                            <ShieldCheck className="mr-2 h-4 w-4" />
                                            {t('settings.two_factor.continue_setup')}
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-4 text-center">
                                        <div className="rounded-full bg-primary/20 p-4 text-primary">
                                            <ShieldCheck className="h-8 w-8" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-foreground">{t('settings.two_factor.setup_title')}</h4>
                                            <p className="text-sm text-muted-foreground">{t('settings.two_factor.setup_description')}</p>
                                        </div>
                                        <Form
                                            {...enable.form()}
                                            onSuccess={() => {
                                                fetchSetupData();
                                                setIsSettingUp(true);
                                            }}
                                            className="w-full sm:w-auto"
                                        >
                                            {({ processing }) => (
                                                <Button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="w-full sm:w-auto rounded-xl shadow-lg shadow-primary/20"
                                                >
                                                    {processing ? <Spinner className="mr-2 h-4 w-4" /> : <ShieldCheck className="mr-2 h-4 w-4" />}
                                                    {t('settings.two_factor.enable')}
                                                </Button>
                                            )}
                                        </Form>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
