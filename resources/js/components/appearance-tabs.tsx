import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { LucideIcon, Monitor, Moon, Sun } from 'lucide-react';
import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

export default function AppearanceToggleTab({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { t } = useTranslation();
    const { appearance, updateAppearance } = useAppearance();

    const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
        { value: 'light', icon: Sun, label: t('components.appearance_tabs.light') },
        { value: 'dark', icon: Moon, label: t('components.appearance_tabs.dark') },
        { value: 'system', icon: Monitor, label: t('components.appearance_tabs.system') },
    ];

    return (
        <div
            className={cn(
                'flex w-full overflow-x-auto scrollbar-none sm:inline-flex gap-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800/50',
                className,
            )}
            {...props}
        >
            {tabs.map(({ value, icon: Icon, label }) => (
                <button
                    key={value}
                    onClick={() => updateAppearance(value)}
                    className={cn(
                        'flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 sm:px-3.5 sm:py-1.5 transition-all duration-200 whitespace-nowrap min-w-fit',
                        appearance === value
                            ? 'bg-white shadow-sm text-primary dark:bg-neutral-700 dark:text-white'
                            : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                    )}
                >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">
                        {label}
                    </span>
                </button>
            ))}
        </div>
    );
}
