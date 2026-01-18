import React from "react";
import {
    ArrowRight,
    ChevronRight,
    Clock,
    QrCode,
    Menu,
    Bell,
    CheckCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-white dark:bg-gray-950">
            {/* Abstract background shapes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-emerald-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
                <div className="absolute top-40 right-[10%] w-72 h-72 bg-teal-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-[20%] w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20 brightness-100 contrast-150 z-0"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-900/80 border border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 px-4 py-1.5 mb-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md group cursor-default">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            {t('hero.tag')}
                        </span>
                        <ChevronRight className={`h-3 w-3 text-gray-400 group-hover:text-emerald-500 transition-colors ${isRTL ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1] drop-shadow-sm">
                        {t('hero.title_prefix')} <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 animate-gradient-x pb-2">
                            {t('hero.title_suffix')}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('hero.description')}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-emerald-600 px-8 font-bold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-500/40 hover:-translate-y-1">
                            <div className="absolute inset-0 flex items-center justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)] bg-white/20 z-0">
                                <div className="relative h-full w-8 bg-white/20"></div>
                            </div>
                            <span className="relative z-10 flex items-center gap-2">
                                {t('hero.cta_primary')}
                                <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                            </span>
                        </button>

                        <button className="group inline-flex h-14 items-center justify-center rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-8 font-bold text-gray-700 dark:text-gray-200 shadow-sm transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:border-emerald-200 dark:hover:border-emerald-900 hover:-translate-y-1">
                            <span className="flex items-center gap-3">
                                <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 group-hover:scale-110 transition-transform`}>
                                    <span className={`${isRTL ? 'ml-0.5' : 'mr-0.5'}`}>▶</span>
                                </span>
                                {t('hero.cta_secondary')}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Glassmorphism Preview Card */}
                <div className="relative max-w-5xl mx-auto mt-20 perspective-1000">
                    {/* Glow effect behind */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] blur opacity-20 dark:opacity-40 animate-pulse-slow"></div>

                    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 dark:border-gray-700/50 p-3 ring-1 ring-black/5 dark:ring-white/10">
                        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-700/50">
                            <div className="grid md:grid-cols-2 gap-0 relative">

                                {/* Pattern overlay for texture */}
                                <div className="absolute inset-0  opacity-5 pointer-events-none z-0"></div>

                                {/* Left: Context Scene */}
                                <div className={`p-8 md:p-14 flex flex-col items-center justify-center border-b md:border-b-0 ${isRTL ? 'md:border-l' : 'md:border-r'} border-gray-100 dark:border-gray-800 z-10`}>
                                    <div className="relative mb-8 group cursor-default">
                                        {/* Floating 'Me' Bubbles */}
                                        <div className={`absolute top-0 ${isRTL ? 'right-0 -mr-6' : 'left-0 -ml-6'} -mt-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 z-20 animate-bounce-custom`}>
                                            <div className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1">
                                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                                {t('hero.preview_me')}
                                            </div>
                                        </div>

                                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/10 border-4 border-white dark:border-gray-700">
                                            <img
                                                src="/images/happy.svg"
                                                alt="Happy Customer"
                                                className="w-64 h-64 object-cover bg-emerald-50 dark:bg-emerald-900/10 hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
                                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                                        {t('hero.preview_happy')}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-center font-medium">
                                        {t('hero.preview_happy_desc')}
                                    </p>
                                </div>

                                {/* Right: Mobile UI Interface */}
                                <div className="p-8 md:p-14 bg-gray-50/50 dark:bg-gray-800/30 flex flex-col items-center justify-center relative z-10">
                                    <div className="relative w-[260px] h-[520px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-[6px] border-gray-800 ring-1 ring-gray-900/50">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-30"></div>

                                        {/* Screen Content */}
                                        <div className="bg-white dark:bg-gray-950 h-full w-full rounded-[2.5rem] overflow-hidden relative flex flex-col">
                                            {/* App Header */}
                                            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 pt-12 pb-10 rounded-b-[2.5rem] shadow-lg relative z-10">
                                                <div className="flex justify-between items-center text-white/90 mb-6">
                                                    <Menu size={20} />
                                                    <Bell size={20} />
                                                </div>
                                                <div className="text-center text-white">
                                                    <div className="font-bold text-xl mb-1">{t('hero.ticket_title')}</div>
                                                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                                                        <QrCode size={12} />
                                                        {t('hero.ticket_number')}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Ticket Card */}
                                            <div className="px-5 -mt-8 relative z-20">
                                                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-5 border border-gray-100 dark:border-gray-700 text-center">
                                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{t('hero.ticket_turn')}</div>
                                                    <div className="text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">3</div>

                                                    {/* Progress Bar */}
                                                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
                                                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-3/4 rounded-full animate-pulse"></div>
                                                    </div>

                                                    <div className="flex justify-between items-center text-xs font-bold bg-gray-50 dark:bg-gray-900/50 rounded-xl p-3">
                                                        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                                            </span>
                                                            {t('hero.ticket_serving')}
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                                                            <Clock size={12} />
                                                            {t('hero.ticket_time')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* List */}
                                            <div className="px-5 mt-6 space-y-3 flex-1 overflow-hidden">
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">Upcoming</div>
                                                {[1, 2, 3].map((_, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-900/30 transition-colors cursor-pointer group/item">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 shadow-sm transition-all ${i === 0 ? 'border-emerald-500 bg-emerald-100 text-emerald-700' : 'border-gray-200 bg-white dark:bg-gray-800 text-gray-400'}`}>
                                                            {i === 0 ? <CheckCircle size={18} /> : i + 1}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-20 mb-1.5 group-hover/item:w-24 transition-all"></div>
                                                            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full w-12"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
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

export default HeroSection;
