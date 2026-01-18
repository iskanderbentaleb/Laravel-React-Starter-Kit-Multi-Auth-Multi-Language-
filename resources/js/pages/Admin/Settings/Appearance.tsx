import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { Palette, Globe } from 'lucide-react';
import LanguageSelector from '@/components/language-selector';
import AppLayout from '@/layouts/app-layout';
import AdminSettingsLayout from '@/layouts/Admin/settings/layout';
import { useTranslation } from 'react-i18next';

export default function Appearance() {
    const { t } = useTranslation();

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: t('settings.appearance.breadcrumb'),
            href: '/admin/settings/appearance',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('settings.appearance.page_title')} />

            <AdminSettingsLayout>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-2.5">
                            <Palette className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <HeadingSmall
                                title={t('settings.appearance.section_title')}
                                description={t('settings.appearance.section_description')}
                            />
                        </div>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 p-6 backdrop-blur-sm">
                        <AppearanceTabs />
                    </div>

                    <div className="flex items-start gap-4 pt-4">
                        <div className="rounded-lg bg-primary/10 p-2.5">
                            <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <HeadingSmall
                                title={t('settings.appearance.language_title')}
                                description={t('settings.appearance.language_description')}
                            />
                        </div>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 p-6 backdrop-blur-sm">
                        <LanguageSelector />
                    </div>
                </div>
            </AdminSettingsLayout>
        </AppLayout>
    );
}
