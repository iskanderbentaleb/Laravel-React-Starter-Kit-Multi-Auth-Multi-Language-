import React from "react";
import {
    Globe,
    Stethoscope,
    Building,
    Calendar,
    CreditCard
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialProofSection = () => {
    const { t } = useLanguage();

    // Placeholder logos using text for now, but styled elegantly
    const companies = [
        { name: "TechCorp", icon: Globe },
        { name: "HealthPlus", icon: Stethoscope },
        { name: "GovServices", icon: Building },
        { name: "EventPro", icon: Calendar },
        { name: "RetailKing", icon: CreditCard },
    ];

    return (
        <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">
                    {t('hero.trusted_by')}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, idx) => (
                        <div key={idx} className="flex items-center gap-2 group cursor-default">
                            <company.icon className="h-6 w-6 text-emerald-600" />
                            <span className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
