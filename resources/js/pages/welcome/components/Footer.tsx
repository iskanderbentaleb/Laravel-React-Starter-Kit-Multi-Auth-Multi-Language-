import React from "react";
import {
    Clock,
    Globe
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 shadow-lg shadow-emerald-600/20">
                                <Clock className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">NoWait</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-sm">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all border border-gray-100 dark:border-gray-700 cursor-pointer">
                                    <Globe size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t('footer.product')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#features" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors">{t('footer.links.features')}</a></li>
                            <li><a href="#pricing" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors">{t('footer.links.pricing')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t('footer.company')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors">{t('footer.links.about')}</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors">{t('footer.links.contact')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6">{t('footer.resources')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors">{t('footer.links.blog')}</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors">{t('footer.links.help')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 text-sm">
                        {t('footer.rights')}
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-gray-500">
                        <a href="#" className="hover:text-emerald-600 transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-emerald-600 transition-colors">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
