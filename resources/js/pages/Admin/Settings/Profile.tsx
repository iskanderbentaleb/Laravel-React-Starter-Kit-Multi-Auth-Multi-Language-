import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Form, Head, Link, usePage } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import AdminSettingsLayout from '@/layouts/Admin/settings/layout';
import { useTranslation } from 'react-i18next';

export default function Profile({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: t('settings.profile.breadcrumb'),
            href: '/admin/settings/profile',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('settings.profile.page_title')} />

            <h1 className="sr-only">{t('settings.profile.sr_title')}</h1>

            <AdminSettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title={t('settings.profile.section_title')}
                        description={t('settings.profile.section_description')}
                    />

                    <Form
                        action="/admin/settings/profile"
                        method="patch"
                        options={{
                            preserveScroll: true,
                        }}
                        className="space-y-6"
                    >
                        {({ processing, recentlySuccessful, errors }) => (
                            <>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">{t('settings.profile.name')}</Label>

                                    <Input
                                        id="name"
                                        className="mt-1 block w-full"
                                        defaultValue={auth.user.name}
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder={t('settings.profile.name_placeholder')}
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.name}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">{t('settings.profile.email')}</Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full"
                                        defaultValue={auth.user.email}
                                        name="email"
                                        required
                                        autoComplete="username"
                                        placeholder={t('settings.profile.email_placeholder')}
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.email}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button
                                        disabled={processing}
                                        data-test="update-profile-button"
                                    >
                                        {t('settings.profile.save')}
                                    </Button>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-neutral-600">
                                            {t('settings.profile.saved')}
                                        </p>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                <div className="mt-12 pt-8 border-t">
                    <HeadingSmall
                        title={t('settings.profile.delete_account')}
                        description={t('settings.profile.delete_account_description')}
                    />

                    <Form
                        action="/admin/settings/profile"
                        method="delete"
                        className="mt-6"
                    >
                        {({ processing, errors }) => (
                            <div className="space-y-4">
                                <div className="grid gap-2 max-w-md">
                                    <Label htmlFor="password">{t('settings.profile.confirm_delete')}</Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder={t('settings.profile.delete_account_password')}
                                    />
                                    <InputError message={errors.password} />
                                </div>
                                <Button variant="destructive" disabled={processing}>
                                    {t('settings.profile.confirm_delete')}
                                </Button>
                            </div>
                        )}
                    </Form>
                </div>
            </AdminSettingsLayout>
        </AppLayout>
    );
}
