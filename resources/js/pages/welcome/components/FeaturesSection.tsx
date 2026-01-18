import React from "react";
import {
    ArrowRight,
    Star,
    Clock,
    QrCode,
    Users,
    Calendar,
    CreditCard,
    BarChart3
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
    const { t } = useLanguage();
    const icons = [Clock, QrCode, Users, Calendar, CreditCard, BarChart3];

    // Bento grid layout configuration (3 columns)
    const bentoConfig = [
        "md:col-span-2 md:row-span-2", // 0: Real-time
        "md:col-span-1 md:row-span-1", // 1: QR
        "md:col-span-1 md:row-span-1", // 2: Multiple Queues
        "md:col-span-2 md:row-span-1", // 3: Scheduling
        "md:col-span-1 md:row-span-1", // 4: Payments
        "md:col-span-3 md:row-span-1", // 5: Analytics (Full width bottom)
    ];

    const gradients = [
        "from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20",
        "from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20",
        "from-violet-500/10 to-purple-500/10 hover:from-violet-500/20 hover:to-purple-500/20",
        "from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20",
        "from-pink-500/10 to-rose-500/10 hover:from-pink-500/20 hover:to-rose-500/20",
        "from-indigo-500/10 to-blue-500/10 hover:from-indigo-500/20 hover:to-blue-500/20",
    ];

    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                        <Star className="w-4 h-4" />
                        {t('nav.features')}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        {t('features.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[minmax(200px,auto)]">
                    {(t('features.items', { returnObjects: true }) as any[] || []).map((feature: any, idx: number) => {
                        const Icon = icons[idx];
                        const isLarge = bentoConfig[idx]?.includes("col-span-2") || bentoConfig[idx]?.includes("col-span-3");

                        return (
                            <div key={idx} className={`relative group rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/5 ${bentoConfig[idx] || "col-span-1"}`}>
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]} transition-colors duration-500`}></div>

                                <div className="relative h-full p-8 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        {isLarge && (
                                            <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2 rounded-full bg-white/20 backdrop-blur-sm`}>
                                                <ArrowRight className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className={`font-bold text-gray-900 dark:text-white mb-2 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Decorative Noise */}
                                    <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
