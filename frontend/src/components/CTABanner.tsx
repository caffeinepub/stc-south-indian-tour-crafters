import { MessageCircle, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';

export default function CTABanner() {
    return (
        <section
            id='contact'
            className='relative py-16 md:py-24 bg-stc-green overflow-hidden'
        >
            {/* Decorative circles */}
            <div className='absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3' />
            <div className='absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3' />
            <div className='absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-stc-orange/10 -translate-y-1/2' />

            <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                {/* Badge */}
                <div className='inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-medium px-4 py-2 rounded-full mb-6'>
                    <span className='w-2 h-2 rounded-full bg-stc-orange animate-pulse' />
                    Limited Slots Available
                </div>

                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight'>
                    Ready to Explore Kerala?
                </h2>
                <p className='text-white/80 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed'>
                    Let us craft your perfect Kerala journey. Get in touch today for a free customized itinerary and best price guarantee.
                </p>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20STC%2C%20I%27m%20ready%20to%20plan%20my%20Kerala%20trip!`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2.5 bg-stc-orange text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full btn-shadow-orange hover:bg-stc-orange-dark transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center'
                    >
                        <MessageCircle size={22} />
                        WhatsApp Us
                    </a>
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className='flex items-center gap-2.5 bg-white text-stc-green font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center'
                    >
                        <Phone size={22} />
                        Call Now
                    </a>
                </div>

                <p className='text-white/50 text-xs mt-8'>
                    Free consultation · No booking fees · 100% customizable
                </p>
            </div>
        </section>
    );
}
