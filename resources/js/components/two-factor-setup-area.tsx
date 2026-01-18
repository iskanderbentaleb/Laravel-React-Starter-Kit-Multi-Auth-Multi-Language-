import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { useAppearance } from '@/hooks/use-appearance';
import { useClipboard } from '@/hooks/use-clipboard';
import { OTP_MAX_LENGTH } from '@/hooks/use-two-factor-auth';
import { Form } from '@inertiajs/react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { Check, Copy, ScanLine, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AlertError from './alert-error';
import { Spinner } from './ui/spinner';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export function TwoFactorSetupArea({
    action,
    qrCodeSvg,
    manualSetupKey,
    onSuccess,
    onCancel,
    errors,
    initialStep = 'qr',
}: {
    action: string;
    qrCodeSvg: string | null;
    manualSetupKey: string | null;
    onSuccess: () => void;
    onCancel: () => void;
    errors: string[];
    initialStep?: 'qr' | 'verify';
}) {
    const { t } = useTranslation();
    const [copiedText, copy] = useClipboard();
    const { resolvedAppearance } = useAppearance();
    const [step, setStep] = useState<'qr' | 'verify'>(initialStep);
    const [code, setCode] = useState<string>('');
    const otpRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If we have manualSetupKey but no qrCodeSvg (rare) or if we just want to be smart,
        // we can still let the user scan. But if they click "Continue Setup",
        // we might want to start them at 'verify'. 
        // For now, let's just make sure the component is robust.
        if (step === 'verify') {
            setTimeout(() => {
                otpRef.current?.querySelector('input')?.focus();
            }, 0);
        }
    }, [step]);

    if (step === 'qr') {
        return (
            <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <ScanLine className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{t('components.two_factor_modal.enable_title')}</h3>
                        <p className="text-sm text-muted-foreground">{t('components.two_factor_modal.enable_description')}</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
                    <div className="relative overflow-hidden rounded-xl border-4 border-white bg-white p-2 shadow-xl dark:border-white/5">
                        {qrCodeSvg ? (
                            <div
                                className="aspect-square w-48 [&_svg]:size-full"
                                dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
                                style={{ filter: resolvedAppearance === 'dark' ? 'invert(1) brightness(1.5)' : undefined }}
                            />
                        ) : (
                            <div className="flex h-48 w-48 items-center justify-center">
                                <Spinner />
                            </div>
                        )}
                    </div>

                    {manualSetupKey && (
                        <div className="flex w-full flex-col items-center space-y-3">
                            <div className="w-full space-y-1.5 text-center">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('components.two_factor_modal.setup_key')}</p>
                                <div className="flex items-center justify-center gap-2 rounded-xl bg-muted/50 px-4 py-2 border border-border/50">
                                    <code className="text-sm font-mono font-bold tracking-widest text-foreground">{manualSetupKey}</code>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                                        onClick={() => copy(manualSetupKey)}
                                    >
                                        {copiedText === manualSetupKey ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex w-full flex-col gap-3 sm:flex-row">
                        <Button variant="outline" className="flex-1 rounded-xl" onClick={onCancel}>
                            {t('components.two_factor_modal.back', 'Cancel')}
                        </Button>
                        <Button className="flex-1 rounded-xl" onClick={() => setStep('verify')}>
                            {t('components.two_factor_modal.continue')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{t('components.two_factor_modal.verify_title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('components.two_factor_modal.verify_description')}</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
                <Form
                    action={action}
                    method="post"
                    onSuccess={onSuccess}
                    className="w-full space-y-6"
                >
                    {({ processing, errors: formErrors }) => (
                        <div className="flex flex-col items-center space-y-6">
                            <div ref={otpRef} className="flex flex-col items-center space-y-4">
                                <InputOTP
                                    name="code"
                                    maxLength={OTP_MAX_LENGTH}
                                    onChange={setCode}
                                    disabled={processing}
                                    pattern={REGEXP_ONLY_DIGITS}
                                >
                                    <InputOTPGroup>
                                        {Array.from({ length: OTP_MAX_LENGTH }, (_, i) => (
                                            <InputOTPSlot
                                                key={i}
                                                index={i}
                                                className="h-12 w-10 border-border sm:h-14 sm:w-12 text-lg font-bold"
                                            />
                                        ))}
                                    </InputOTPGroup>
                                </InputOTP>
                                <InputError
                                    message={
                                        formErrors.code ||
                                        (formErrors as any).confirmTwoFactorAuthentication?.code ||
                                        (formErrors as any).default?.code
                                    }
                                />
                            </div>

                            <div className="flex w-full flex-col gap-3 sm:flex-row">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="flex-1 rounded-xl"
                                    onClick={() => setStep('qr')}
                                    disabled={processing}
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    {t('components.two_factor_modal.back')}
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1 rounded-xl shadow-lg shadow-primary/20"
                                    disabled={processing || code.length < OTP_MAX_LENGTH}
                                >
                                    {processing ? <Spinner className="mr-2 h-4 w-4" /> : <ShieldCheck className="mr-2 h-4 w-4" />}
                                    {t('components.two_factor_modal.confirm')}
                                </Button>
                            </div>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
}
