import React, { useState } from "react";
import {
    ArrowRight,
    Star,
    CheckCircle,
    Sparkle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
    const { t, isRTL } = useLanguage();
    const [annualBilling, setAnnualBilling] = useState(true);
    const monthlyPrice = 20;
    const annualPrice = 16; // 20% discount

    const currentPrice = annualBilling ? annualPrice : monthlyPrice;

    return (
        <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 mb-4">
                        <Sparkle size={16} className="text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                            {t('pricing.badge')}
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                {/* Pricing Card Container */}
                <div className="max-w-6xl mx-auto">
                    {/* Billing Toggle */}
                    <div className="flex justify-center items-center gap-4 mb-12">
                        <span className={`text-lg font-medium ${!annualBilling ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                            {t('pricing.monthly')}
                        </span>
                        <button
                            onClick={() => setAnnualBilling(!annualBilling)}
                            className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            aria-label="Toggle billing period"
                        >
                            <div className={`absolute top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${annualBilling ? (isRTL ? '-translate-x-8' : 'translate-x-8') : (isRTL ? '-translate-x-1' : 'translate-x-1')
                                }`} />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className={`text-lg font-medium ${annualBilling ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                                {t('pricing.annual')}
                            </span>
                            {annualBilling && (
                                <span className="px-2 py-1 text-xs font-bold bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full">
                                    {t('pricing.save_percent')}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Main Pricing Card */}
                    <div className="relative group perspective-1000">
                        {/* 3D Glow Effects */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-700 animate-pulse-slow"></div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition-all duration-500"></div>

                        {/* Popular Badge with Animation */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 animate-float">
                            <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-10 py-3 rounded-full font-bold shadow-2xl shadow-emerald-500/30 border-4 border-white dark:border-gray-950 backdrop-blur-sm">
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white dark:border-gray-950 animate-ping opacity-75"></div>
                                <span className="relative flex items-center gap-2">
                                    <Star size={16} className="fill-current" />
                                    {t('pricing.feature_popular')}
                                </span>
                            </div>
                        </div>

                        {/* Card Container */}
                        <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl shadow-gray-900/10 dark:shadow-gray-900/30 overflow-hidden border border-gray-100 dark:border-gray-800 transform transition-all duration-500 group-hover:scale-[1.01] hover:shadow-3xl">
                            <div className="grid md:grid-cols-5 h-full divide-x-0 md:divide-x divide-gray-100 dark:divide-gray-800">
                                {/* Left Panel - Plan Details */}
                                <div className="md:col-span-2 p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                                                {t('pricing.plan_name')}
                                            </h3>
                                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                                {t('pricing.plan_desc')}
                                            </p>
                                        </div>

                                        {/* Price Display */}
                                        <div className="space-y-4">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
                                                    ${currentPrice}
                                                </span>
                                                <span className="text-gray-500 dark:text-gray-400 font-medium text-lg">
                                                    / {t('pricing.period')}
                                                </span>
                                            </div>

                                            {annualBilling && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-gray-400 dark:text-gray-500 line-through">
                                                            $20
                                                        </span>
                                                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                                            {t('pricing.save_amount')}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA Button */}
                                        <button className="group relative w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 hover:from-emerald-600 hover:to-teal-500 dark:hover:from-emerald-500 dark:hover:to-teal-400 text-white dark:text-gray-900 font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-gray-900/10 dark:shadow-white/10 hover:shadow-emerald-500/40 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-emerald-500/20">
                                            <span className="relative flex items-center justify-center gap-2">
                                                {t('pricing.cta')}
                                                <ArrowRight size={20} className={`group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                            </span>
                                        </button>

                                        <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-4">
                                            {t('pricing.note')}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Panel - Features */}
                                <div className="md:col-span-3 p-12 bg-white dark:bg-gray-900">
                                    <div className="h-full flex flex-col">
                                        <div className="mb-8">
                                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                {t('pricing.everything_included')}
                                            </h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {t('pricing.all_features_desc')}
                                            </p>
                                        </div>

                                        <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800 border-y border-gray-100 dark:border-gray-800">
                                            {(t('pricing.features', { returnObjects: true }) as string[] || []).map((feature: string, idx: number) => (
                                                <div key={idx} className="flex items-center justify-between py-4 group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors px-4 -mx-4 sm:mx-0 sm:px-0">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                                        {idx < 2 && (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                                {t('pricing.feature_popular')}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-1 rounded-full">
                                                        <CheckCircle size={18} strokeWidth={2.5} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center mt-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            {t('pricing.custom_plan')}{' '}
                            <a href="#contact" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                                {t('pricing.contact_sales')} {isRTL ? '←' : '→'}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
