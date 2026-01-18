import { Language, LanguageContext } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import { HTMLAttributes, useContext } from 'react';

export default function LanguageSelector({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { lang, setLang } = useContext(LanguageContext);

    const languages: { value: Language; label: string; flag: string }[] = [
        { value: 'ar', label: 'العربية', flag: '🇸🇦' },
        { value: 'en', label: 'English', flag: '🇺🇸' },
        { value: 'fr', label: 'Français', flag: '🇫🇷' },
    ];

    return (
        <div
            className={cn(
                'flex w-full overflow-x-auto scrollbar-none sm:inline-flex gap-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800/50',
                className,
            )}
            {...props}
        >
            {languages.map(({ value, label, flag }) => (
                <button
                    key={value}
                    onClick={() => setLang(value)}
                    className={cn(
                        'flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 sm:px-3.5 sm:py-1.5 transition-all duration-200 whitespace-nowrap min-w-fit',
                        lang === value
                            ? 'bg-white shadow-sm text-primary dark:bg-neutral-700 dark:text-white'
                            : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                    )}
                >
                    <span className="text-sm sm:text-base shrink-0">{flag}</span>
                    <span className="text-xs sm:text-sm font-medium">{label}</span>
                </button>
            ))}
        </div>
    );
}
