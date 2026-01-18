import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import refactored components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SocialProofSection from './components/SocialProofSection';
import ComparisonSection from './components/ComparisonSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import UseCasesSection from './components/UseCasesSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

/**
 * NoWait Landing Page
 * Full-featured landing page with multi-language support (AR, EN, FR)
 */
export default function NoWaitLandingPage({ auth, login, register, dashboard, canRegister }: any) {
    const { lang, t, isRTL } = useLanguage();

    return (
        <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-900 dark:selection:text-emerald-100 transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}
        >
            <Head title={`NoWait - ${t('hero.title_prefix')} ${t('hero.title_suffix')}`}>
                <meta name="description" content={t('hero.description')} />
            </Head>

            <style>{`
                    @keyframes blob {
                        0% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                    .animate-blob { animation: blob 7s infinite; }
                    .animation-delay-2000 { animation-delay: 2s; }
                    .animation-delay-4000 { animation-delay: 4s; }

                    @keyframes gradient-x {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    .animate-gradient-x {
                        background-size: 200% 200%;
                        animation: gradient-x 15s ease infinite;
                    }

                    .perspective-1000 { perspective: 1000px; }
                    
                    @keyframes float {
                        0% { transform: translateY(0px) translateX(-50%); }
                        50% { transform: translateY(-10px) translateX(-50%); }
                        100% { transform: translateY(0px) translateX(-50%); }
                    }
                    .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>

            {/* Navigation Header */}
            <Navigation
                auth={auth}
                login={login}
                register={register}
                dashboard={dashboard}
                canRegister={canRegister}
            />

            <main>
                {/* Hero Section */}
                <HeroSection />

                {/* Social Proof Section */}
                <SocialProofSection />

                {/* Problem Comparison Section */}
                <ComparisonSection />

                {/* Problem Points Section */}
                <ProblemSection />

                {/* How it Works / Solution Section */}
                <SolutionSection />

                {/* Use Cases Section */}
                <UseCasesSection />

                {/* Bento Features Grid */}
                <FeaturesSection />

                {/* Pricing Section */}
                <PricingSection />

                {/* Final CTA Section */}
                <FinalCTASection />
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}