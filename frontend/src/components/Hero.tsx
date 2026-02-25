import { ArrowDown, MessageCircle, Package } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';

export default function Hero() {
    const scrollToPackages = () => {
        document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToDestinations = () => {
        document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id='home'
            className='relative min-h-screen flex items-center justify-center overflow-hidden'
            style={{
                backgroundImage: `url('/assets/generated/hero-houseboat.dim_1920x1080.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dark overlay with gradient */}
            <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70' />

            {/* Decorative bottom wave */}
            <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent' />

            {/* Content */}
            <div className='relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20'>
                {/* Badge */}
                <div className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6'>
                    <span className='w-2 h-2 rounded-full bg-stc-orange animate-pulse' />
                    Premium Kerala Travel Experiences
                </div>

                {/* H1 */}
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 drop-shadow-lg'>
                    Your Kerala Story
                    <span className='block text-stc-orange mt-1'>Starts Here</span>
                </h1>

                {/* Subheading */}
                <p className='text-lg sm:text-xl md:text-2xl text-white/85 font-light mb-10 max-w-2xl mx-auto leading-relaxed'>
                    Curated Kerala travel experiences crafted with care.
                </p>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <button
                        onClick={scrollToPackages}
                        className='flex items-center gap-2.5 bg-stc-orange text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full btn-shadow-orange hover:bg-stc-orange-dark transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center'
                    >
                        <Package size={20} />
                        View Packages
                    </button>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20STC%2C%20I%27m%20interested%20in%20a%20Kerala%20tour%20package.`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2.5 bg-white text-stc-green font-semibold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center'
                    >
                        <MessageCircle size={20} />
                        WhatsApp Now
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToDestinations}
                className='absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce'
                aria-label='Scroll down'
            >
                <ArrowDown size={28} />
            </button>
        </section>
    );
}
