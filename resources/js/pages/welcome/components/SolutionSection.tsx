import React from "react";
import {
    QrCode,
    Smartphone,
    Bell,
    Star
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionSection = () => {
    const { t, isRTL } = useLanguage();
    const icons = [QrCode, Smartphone, Bell];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        {t('solution.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t('solution.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className={`hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-${isRTL ? 'l' : 'r'} from-emerald-100 via-emerald-200 to-emerald-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 -z-10`}></div>

                    {(t('solution.steps', { returnObjects: true }) as any[] || []).map((step: any, idx: number) => {
                        return (
                            <div key={idx} className="relative group">
                                <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center text-center">
                                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-3xl font-black mb-6 border-8 border-white dark:border-gray-900 shadow-sm group-hover:scale-110 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Bar */}
                <div className="bg-emerald-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-25"></div>
                    <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
                        {(t('solution.stats', { returnObjects: true }) as any[] || []).map((stat: any, idx: number) => (
                            <div key={idx} className="p-4 hover:bg-white/5 rounded-2xl transition-colors">
                                <div className="text-4xl md:text-5xl font-black mb-2 text-emerald-400 flex items-center justify-center gap-2">
                                    {stat.value}
                                    {idx === 3 && <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />}
                                </div>
                                <div className="text-emerald-100 font-medium text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
