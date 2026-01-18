import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { Form } from '@inertiajs/react';
import { KeyRound, RefreshCw } from 'lucide-react';

interface AdminTwoFactorRecoveryCodesProps {
    recoveryCodesList: string[];
    fetchRecoveryCodes: () => Promise<void>;
    errors: string[];
}

export default function AdminTwoFactorRecoveryCodes({
    recoveryCodesList,
    fetchRecoveryCodes,
    errors,
}: AdminTwoFactorRecoveryCodesProps) {
    const { t } = useTranslation();

    return (
        <div className="space-y-4 w-full">
            <div className="flex items-center justify-between">
                <HeadingSmall
                    title={t('settings.two_factor.recovery_codes_title')}
                    description={t('settings.two_factor.recovery_codes_description')}
                />
                <Button variant="outline" size="sm" onClick={() => fetchRecoveryCodes()}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    {t('settings.two_factor.show_recovery_codes')}
                </Button>
            </div>

            {recoveryCodesList.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                    {recoveryCodesList.map((code) => (
                        <div key={code} className="p-2 border rounded text-mono text-center">
                            {code}
                        </div>
                    ))}
                </div>
            )}

            <Form action="/admin/user/two-factor-recovery-codes" method="post">
                {({ processing }) => (
                    <Button
                        variant="secondary"
                        size="sm"
                        disabled={processing}
                        type="submit"
                    >
                        <KeyRound className="mr-2 h-4 w-4" />
                        {t('settings.two_factor.regenerate_recovery_codes')}
                    </Button>
                )}
            </Form>
        </div>
    );
}
