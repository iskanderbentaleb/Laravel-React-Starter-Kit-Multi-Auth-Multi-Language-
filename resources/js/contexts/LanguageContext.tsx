import React from "react";
import '../i18n';
import { useTranslation } from 'react-i18next';

export type Language = 'ar' | 'en' | 'fr';

// Context for Language
// We keep the context but update it to be powered by i18next
export const LanguageContext = React.createContext<{
    lang: Language;
    setLang: (lang: Language) => void;
    t: any; // Now a function from i18next
    isRTL: boolean;
}>({
    lang: 'ar',
    setLang: () => { },
    t: (key: string) => key,
    isRTL: true
});

export const useLanguage = () => {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = React.useState<Language>(i18n.language as Language || 'ar');

    const lang = i18n.language as Language || currentLang;
    const isRTL = i18n.dir(lang) === 'rtl';

    const setLang = async (newLang: Language) => {
        await i18n.changeLanguage(newLang);
        setCurrentLang(newLang);

        // Save to cookie for backend synchronization (expires in 1 year)
        document.cookie = `app_locale=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    };

    return { lang, setLang, t, isRTL };
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const langState = useLanguage();
    const { lang, isRTL } = langState;

    React.useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang, isRTL]);

    return (
        <LanguageContext.Provider value={langState}>
            {children}
        </LanguageContext.Provider>
    );
};
