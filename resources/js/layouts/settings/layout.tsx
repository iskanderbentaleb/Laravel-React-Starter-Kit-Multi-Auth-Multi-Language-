import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn, toUrl } from '@/lib/utils';
import { useActiveUrl } from '@/hooks/use-active-url';
import { edit as editAppearance } from '@/routes/appearance';
import { edit } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { edit as editPassword } from '@/routes/user-password';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren, useState, useEffect, useRef } from 'react';
import {
    User,
    Lock,
    Shield,
    Palette,
    Settings as SettingsIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const useSettingsTabs = () => {
    const { t } = useTranslation();

    return [
        {
            id: 'profile',
            title: t('components.settings_layout.profile'),
            href: edit(),
            icon: User,
        },
        {
            id: 'password',
            title: t('components.settings_layout.password'),
            href: editPassword(),
            icon: Lock,
        },
        {
            id: 'two-factor',
            title: t('components.settings_layout.two_factor'),
            href: show(),
            icon: Shield,
        },
        {
            id: 'appearance',
            title: t('components.settings_layout.appearance'),
            href: editAppearance(),
            icon: Palette,
        },
    ];
};

function HorizontalNavigation() {
    const { t } = useTranslation();
    const { urlIsActive, currentUrl } = useActiveUrl();
    const settingsTabs = useSettingsTabs();

    // Better way to handle refs in this context
    const activeRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Use a 0ms timeout to ensure the DOM has settled after navigation without visible delay
        const timer = setTimeout(() => {
            if (activeRef.current) {
                activeRef.current.scrollIntoView({
                    behavior: 'auto',
                    block: 'nearest',
                    inline: 'nearest'
                });
            }
        }, 0);

        return () => clearTimeout(timer);
    }, [currentUrl]); // Re-run when the URL changes to ensure it catches every navigation

    return (
        <div className="sticky top-0 z-40 border-b bg-background/95 pb-4 pt-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mb-4 px-4 md:px-6 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold tracking-tight">{t('components.settings_layout.settings')}</h1>
                    <p className="text-sm text-muted-foreground text-xs md:text-sm">{t('components.settings_layout.manage_preferences')}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <SettingsIcon className="h-5 w-5" />
                </div>
            </div>

            <div className="relative">
                <div
                    className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x snap-x"
                >
                    <div className="flex w-max items-center gap-2 pb-1 px-4 md:px-6">
                        {settingsTabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = urlIsActive(tab.href);

                            return (
                                <Link
                                    key={tab.id}
                                    href={tab.href}
                                    ref={isActive ? activeRef : null}
                                    preserveScroll
                                    preserveState
                                    className={cn(
                                        'flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 whitespace-nowrap border',
                                        isActive
                                            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 ring-1 ring-primary/50'
                                            : 'text-muted-foreground hover:bg-muted hover:text-foreground border-border bg-card/50 hover:shadow-sm'
                                    )}
                                >
                                    <Icon className={cn("h-4 w-4 transition-transform duration-300", isActive ? "scale-110" : "opacity-70")} />
                                    {tab.title}
                                </Link>
                            );
                        })}
                        {/* Spacer for end of scroll */}
                        <div className="w-10 shrink-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Desktop optimized navigation
function DesktopNavigation() {
    const { t } = useTranslation();
    const { urlIsActive } = useActiveUrl();
    const settingsTabs = useSettingsTabs();

    return (
        <div className="mb-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                        <SettingsIcon className="h-7 w-7" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('components.settings_layout.settings')}</h1>
                        <p className="text-muted-foreground">{t('components.settings_layout.manage_settings')}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-b">
                <nav className="flex gap-2">
                    {settingsTabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = urlIsActive(tab.href);

                        return (
                            <Link
                                key={tab.id}
                                href={tab.href}
                                preserveScroll
                                preserveState
                                className={cn(
                                    'group relative flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all',
                                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                <Icon className={cn("h-4 w-4 transition-transform duration-200 group-hover:scale-110", isActive && "text-primary")} />
                                {tab.title}
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}

export default function SettingsLayout({ children }: PropsWithChildren) {
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <div className="min-h-screen bg-background/50 selection:bg-primary/20">
            {/* Mobile & Tablet View (up to 1024px) */}
            <div className="block lg:hidden">
                <HorizontalNavigation />

                <main className="px-4 py-6 md:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="overflow-hidden rounded-2xl border bg-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
                            <div className="p-6 md:p-8">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Desktop View (1024px and above) */}
            <div className="hidden lg:block">
                <main className="mx-auto px-12 py-12">
                    <DesktopNavigation />

                    <div className="mt-8 overflow-hidden rounded-[2rem] border bg-card shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                        <div className="flex">
                            <div className="flex-1 p-10 lg:p-12">
                                <div className="max-w-3xl">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}