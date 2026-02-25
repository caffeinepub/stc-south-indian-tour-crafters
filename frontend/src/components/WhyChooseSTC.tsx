import { Car, Hotel, Compass, HeadphonesIcon, Sparkles } from 'lucide-react';

const features = [
    {
        icon: Car,
        title: 'Private AC Cab',
        description: 'Comfortable private air-conditioned vehicles for all transfers and sightseeing.',
    },
    {
        icon: Hotel,
        title: 'Premium Stays',
        description: 'Handpicked hotels and resorts offering the best comfort and hospitality.',
    },
    {
        icon: Compass,
        title: 'Local Expertise',
        description: 'Deep knowledge of Kerala\'s hidden gems, culture, and best experiences.',
    },
    {
        icon: HeadphonesIcon,
        title: '24/7 Support',
        description: 'Round-the-clock assistance throughout your journey for complete peace of mind.',
    },
    {
        icon: Sparkles,
        title: 'Customized Trips',
        description: 'Fully tailored itineraries designed around your preferences and budget.',
    },
];

export default function WhyChooseSTC() {
    return (
        <section id='about' className='py-16 md:py-24 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-10 md:mb-14'>
                    <span className='inline-block text-stc-orange font-semibold text-sm uppercase tracking-widest mb-3'>
                        Our Promise
                    </span>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-stc-green mb-4'>
                        Why Choose STC?
                    </h2>
                    <p className='text-gray-500 text-base sm:text-lg max-w-xl mx-auto'>
                        We go beyond booking — we craft memories that last a lifetime.
                    </p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6'>
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className='flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-stc-cream hover:bg-stc-green group transition-all duration-300 card-shadow hover:card-shadow-hover cursor-default'
                            >
                                <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-stc-green/10 group-hover:bg-white/15 flex items-center justify-center mb-4 transition-all duration-300'>
                                    <Icon
                                        size={28}
                                        className='text-stc-green group-hover:text-white transition-colors duration-300'
                                    />
                                </div>
                                <h3 className='font-bold text-sm sm:text-base text-stc-green group-hover:text-white mb-2 transition-colors duration-300'>
                                    {feature.title}
                                </h3>
                                <p className='text-xs sm:text-sm text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors duration-300 hidden sm:block'>
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
