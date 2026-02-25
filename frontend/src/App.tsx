import Header from './components/Header';
import Hero from './components/Hero';
import DestinationHighlights from './components/DestinationHighlights';
import Packages from './components/Packages';
import WhyChooseSTC from './components/WhyChooseSTC';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
    return (
        <div className='min-h-screen font-poppins'>
            {/* Sticky Header */}
            <Header />

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <Hero />

                {/* Destination Highlights */}
                <DestinationHighlights />

                {/* Packages Section */}
                <Packages />

                {/* Why Choose STC */}
                <WhyChooseSTC />

                {/* Testimonials */}
                <Testimonials />

                {/* CTA Banner */}
                <CTABanner />
            </main>

            {/* Footer */}
            <Footer />

            {/* Mobile Bottom Navigation */}
            <MobileBottomNav />

            {/* Floating WhatsApp Button */}
            <FloatingWhatsAppButton />
        </div>
    );
}
