import React from "react";
import {
    ArrowRight,
    Users,
    Clock,
    CheckCircle,
    Menu
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonSection = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                        {t('comparison.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">{t('comparison.title_highlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {t('comparison.subtitle')}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>

                    <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
                        {/* The Old Way: Paper Notebook */}
                        <div className="relative group perspective-1000 w-[280px] sm:w-[320px]">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-100 text-red-600 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wide border border-red-200 shadow-sm z-10 whitespace-nowrap">
                                {t('comparison.old_way')}
                            </div>

                            <div className="relative w-full aspect-[3/4] bg-[#fdfbf7] rounded-sm shadow-xl transform rotate-[-2deg] group-hover:rotate-0 transition-all duration-500 border-l-4 border-l-gray-300 pattern-paper">
                                {/* Notebook Spiral/Binding */}
                                <div className={`absolute top-0 bottom-0 ${isRTL ? 'right-3' : 'left-3'} w-[1px] bg-red-400/30 z-10`}></div>

                                {/* Lines */}
                                <div className="absolute inset-0 pt-12 px-6 flex flex-col gap-6 opacity-80" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 1.75rem' }}>

                                    {/* Handwritten Content */}
                                    <div className="font-handwriting space-y-6 text-xl text-blue-900 -rotate-1 translate-y-1">
                                        {(t('comparison.paper_content', { returnObjects: true }) as string[] || []).map((line: string, i: number) => (
                                            <div key={i} className={`relative ${i === 1 ? 'line-through decoration-red-500 decoration-wavy' : ''}`}>
                                                {line}
                                                {i === 1 && <span className="absolute -right-2 -top-2 text-red-600 text-2xl transform rotate-12 opacity-80">✕</span>}
                                                {i === 3 && <div className="absolute top-full right-0 w-16 h-16 bg-brown-900/10 rounded-full blur-xl -z-10 bg-coffee-stain"></div>}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Torn Paper Effect at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-3 bg-white" style={{ maskImage: 'linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(-45deg, transparent 50%, black 50%)', maskSize: '12px 12px', maskRepeat: 'repeat-x', maskPosition: '0 100%' }}></div>
                            </div>
                        </div>

                        {/* Arrow Transition (Desktop) */}
                        <div className="hidden md:flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-emerald-500 ring-4 ring-gray-50 dark:ring-gray-900">
                                <ArrowRight className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
                            </div>
                        </div>

                        {/* The New Way: Digital App */}
                        <div className="relative group perspective-1000 w-[280px] sm:w-[320px]">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wide border border-emerald-200 shadow-sm z-10 whitespace-nowrap">
                                {t('comparison.new_way')}
                            </div>

                            <div className="relative w-full aspect-[3/4] bg-gray-900 rounded-[2rem] shadow-2xl border-[6px] border-gray-800 transform rotate-[2deg] group-hover:rotate-0 transition-all duration-500 overflow-hidden ring-1 ring-gray-900/50">
                                {/* Dynamic Island */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20"></div>

                                {/* App UI */}
                                <div className="w-full h-full bg-slate-50 dark:bg-slate-900 flex flex-col">
                                    {/* Header */}
                                    <div className="h-24 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-b-[1.5rem] p-5 pt-8 flex flex-col justify-between shadow-lg">
                                        <div className="flex justify-between text-white/90">
                                            <Menu size={16} />
                                            <div className="flex gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-white">
                                            <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                                                <Users size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] opacity-80 leading-none mb-0.5">{t('comparison.phone_ui.queue_status')}</div>
                                                <div className="font-bold text-sm leading-none">{t('comparison.phone_ui.active')}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-5 space-y-3">
                                        {/* Stat Card */}
                                        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                            <div>
                                                <div className="text-[10px] text-gray-500">{t('comparison.phone_ui.waiting')}</div>
                                                <div className="text-xl font-black text-gray-900 dark:text-white">12</div>
                                            </div>
                                            <div className="h-8 w-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
                                                <Clock size={16} />
                                            </div>
                                        </div>

                                        {/* Digital List */}
                                        <div className="space-y-2">
                                            {[1, 2, 3].map((_, i) => (
                                                <div key={i} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                                                    <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                                        {i === 0 ? <CheckCircle size={10} /> : i + 4}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full mb-1"></div>
                                                        <div className="h-1.5 w-10 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                                    </div>
                                                    <div className="text-[10px] font-bold text-gray-400">5:30 PM</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Action Button */}
                                        <div className="mt-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-center py-2.5 rounded-lg font-bold text-xs shadow-lg">
                                            {t('comparison.phone_ui.manage_queue')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
