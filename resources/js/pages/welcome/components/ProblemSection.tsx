import React from "react";
import {
    Users,
    Clock,
    BarChart3,
    Star
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
    const { t } = useLanguage();
    const icons = [Users, Clock, BarChart3, Star];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        {t('problems.title_prefix')} <span className="text-red-500 underline decoration-wavy decoration-red-200 dark:decoration-red-900/50 underline-offset-8">{t('problems.title_highlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t('problems.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(t('problems.items', { returnObjects: true }) as any[] || []).map((problem: any, idx: number) => {
                        const Icon = icons[idx] || Users;
                        const colors = [
                            "from-red-500/10 to-red-500/5 text-red-600 border-red-100 dark:border-red-900/30",
                            "from-orange-500/10 to-orange-500/5 text-orange-600 border-orange-100 dark:border-orange-900/30",
                            "from-amber-500/10 to-amber-500/5 text-amber-600 border-amber-100 dark:border-amber-900/30",
                            "from-gray-500/10 to-gray-500/5 text-gray-600 border-gray-100 dark:border-gray-800"
                        ];

                        return (
                            <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-[2rem] p-1 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors[idx].split(' ')[0]} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className={`relative h-full bg-white dark:bg-gray-800 rounded-[1.8rem] p-7 border ${colors[idx].split(' ').pop()} overflow-hidden`}>
                                    {/* Background Icon Watermark */}
                                    <Icon className="absolute -bottom-4 -right-4 w-24 h-24 text-gray-900/5 group-hover:text-current group-hover:opacity-10 transition-all duration-500" />

                                    <div className={`mb-6 p-4 rounded-2xl w-fit bg-gray-50 dark:bg-gray-900/50 group-hover:scale-110 transition-transform duration-300 ${colors[idx].split(' ')[2]}`}>
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {problem.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm relative z-10">
                                        {problem.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
