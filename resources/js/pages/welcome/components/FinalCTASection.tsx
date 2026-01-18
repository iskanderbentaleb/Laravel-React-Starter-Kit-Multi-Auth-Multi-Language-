import React from "react";
import {
    ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTASection = () => {
    const { t, isRTL } = useLanguage();
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b981_0%,transparent_40%)] opacity-20"></div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                        {t('finalCta.title_prefix')}
                        <span className="block text-emerald-400 mt-2">{t('finalCta.title_suffix')}</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        {t('finalCta.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-emerald-900/50 hover:-translate-y-1 transition-all duration-300">
                            {t('finalCta.cta')}
                            <ArrowRight className={`h-6 w-6 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
