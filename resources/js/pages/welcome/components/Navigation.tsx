import React, { useState } from "react";
import {
    Clock,
    Menu,
    X,
    Globe,
    ChevronRight
} from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Navigation = ({ auth, login, register, dashboard, canRegister }: any) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { lang, setLang, t, isRTL } = useLanguage();

    const languages = [
        { code: 'ar', label: 'العربية' },
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' }
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-emerald-100 dark:border-emerald-900 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center flex-1">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 shadow-lg shadow-emerald-200 dark:shadow-none">
                                <Clock className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">NoWait</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-center gap-8 flex-1">
                        <a href="#features" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            {t('nav.features')}
                        </a>
                        <a href="#usecases" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            {t('nav.useCases')}
                        </a>
                        <a href="#howitworks" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            {t('nav.howItWorks')}
                        </a>
                        <a href="#pricing" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            {t('nav.pricing')}
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
                        {/* Language Switcher */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors">
                                <Globe size={16} />
                                <span className="uppercase">{lang}</span>
                                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : 'rotate-0'} md:rotate-90 md:group-hover:-rotate-90`} />
                            </button>
                            <div className="absolute top-full ltr:right-0 rtl:left-0 mt-2 w-32 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                                {languages.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => setLang(l.code as Language)}
                                        className={`block w-full text-start px-4 py-2 text-sm hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors ${lang === l.code ? 'text-emerald-600 font-bold' : 'text-gray-700 dark:text-gray-300'}`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-3">
                            {auth?.user ? (
                                <a
                                    href="/dashboard"
                                    className="inline-block rounded-lg border-2 border-emerald-600 px-4 py-1.5 text-sm font-bold text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-900/20 transition-all hover:scale-105"
                                >
                                    {t('nav.dashboard')}
                                </a>
                            ) : (
                                <>
                                    <a
                                        href="/login"
                                        className="inline-block rounded-lg px-4 py-1.5 text-sm font-bold text-gray-700 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        {t('nav.login')}
                                    </a>
                                    {canRegister && (
                                        <a
                                            href="/register"
                                            className="inline-block rounded-lg bg-emerald-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 dark:shadow-none transition-all hover:scale-105"
                                        >
                                            {t('nav.register')}
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-100 dark:border-gray-800 mt-4 pt-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#features" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 py-2">
                                {t('nav.features')}
                            </a>
                            <a href="#usecases" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 py-2">
                                {t('nav.useCases')}
                            </a>
                            <a href="#howitworks" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 py-2">
                                {t('nav.howItWorks')}
                            </a>
                            <a href="#pricing" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 py-2">
                                {t('nav.pricing')}
                            </a>

                            <div className="py-2 border-t border-gray-100 dark:border-gray-800">
                                <div className="text-xs font-semibold text-gray-400 mb-2 uppercase">Language</div>
                                <div className="flex gap-2">
                                    {languages.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => setLang(l.code as Language)}
                                            className={`px-3 py-1 rounded-md text-sm border ${lang === l.code ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600'}`}
                                        >
                                            {l.code.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Auth Buttons */}
                            <div className="flex flex-col space-y-2 pt-2">
                                {auth?.user ? (
                                    <a
                                        href={'/dashboard'}
                                        className="inline-block text-center rounded-lg border-2 border-emerald-600 px-5 py-2 text-sm font-bold text-emerald-700"
                                    >
                                        {t('nav.dashboard')}
                                    </a>
                                ) : (
                                    <>
                                        <a
                                            href={login}
                                            className="inline-block text-center rounded-lg border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-900"
                                        >
                                            {t('nav.login')}
                                        </a>
                                        {canRegister && (
                                            <a
                                                href={register}
                                                className="inline-block text-center rounded-lg bg-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-lg"
                                            >
                                                {t('nav.register')}
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
