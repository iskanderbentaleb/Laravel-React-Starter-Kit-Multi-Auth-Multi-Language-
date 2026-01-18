import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';
import { useTranslation } from 'react-i18next';

export function AppSidebar() {
    const { isRTL } = useLanguage();
    const { t } = useTranslation();
    const { url } = usePage();
    const isAdmin = url.startsWith('/admin');
    const dashboardHref = isAdmin ? '/admin/dashboard' : dashboard();

    const mainNavItems: NavItem[] = [
        {
            title: t('components.app_sidebar.dashboard'),
            href: dashboardHref,
            icon: LayoutGrid,
        },
        {
            title: t('components.app_sidebar.landing_page'),
            href: '/',
            icon: LayoutGrid,
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            title: t('components.app_sidebar.repository'),
            href: 'https://github.com/laravel/react-starter-kit',
            icon: Folder,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset" side={isRTL ? 'right' : 'left'}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboardHref} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
