import React from "react";
import {
    ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const UseCasesSection = () => {
    const { t, isRTL } = useLanguage();
    const useCasesData = [
        { image: "/images/barbershop.svg", color: "from-blue-500/20 to-blue-600/5 text-blue-600 border-blue-100" },
        { image: "/images/Doctors.svg", color: "from-teal-500/20 to-teal-600/5 text-teal-600 border-teal-100" },
        { image: "/images/writing-bro.svg", color: "from-orange-500/20 to-orange-600/5 text-orange-600 border-orange-100" },
        { image: "/images/schedule.svg", color: "from-pink-500/20 to-pink-600/5 text-pink-600 border-pink-100" }
    ];

    return (
        <section id="usecases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {t('useCases.title')}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            {t('useCases.subtitle')}
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        {t('useCases.cta')}
                        <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(t('useCases.items', { returnObjects: true }) as any[] || []).map((item: any, idx: number) => (
                        <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-2 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className={`absolute inset-0 bg-gradient-to-br ${useCasesData[idx].color} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative h-full bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden flex flex-col items-center text-center p-6 border border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-colors">
                                <div className={`w-full aspect-square rounded-2xl bg-gray-50 dark:bg-gray-900/50 mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                    {/* Mock Image Placeholder if real image not found nicely */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${useCasesData[idx].color} opacity-20`}></div>
                                    <img
                                        src={useCasesData[idx].image}
                                        alt={item.title}
                                        className="w-4/5 h-4/5 object-contain relative z-10 drop-shadow-md"
                                        onError={(e) => {
                                            // Fallback if image missing
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        {t('useCases.cta')}
                        <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
