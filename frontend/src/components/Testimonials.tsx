import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
    return (
        <section className='py-16 md:py-24 bg-stc-cream'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-10 md:mb-14'>
                    <span className='inline-block text-stc-orange font-semibold text-sm uppercase tracking-widest mb-3'>
                        Traveler Stories
                    </span>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-stc-green mb-4'>
                        What Our Travelers Say
                    </h2>
                    <p className='text-gray-500 text-base sm:text-lg max-w-xl mx-auto'>
                        Real experiences from real travelers who explored Kerala with STC.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
                    {testimonials.map((t) => (
                        <article
                            key={t.id}
                            className='bg-white rounded-2xl p-6 sm:p-7 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col'
                        >
                            {/* Quote Icon */}
                            <div className='w-10 h-10 rounded-xl bg-stc-green/10 flex items-center justify-center mb-4'>
                                <Quote size={20} className='text-stc-green' />
                            </div>

                            {/* Stars */}
                            <div className='flex items-center gap-1 mb-4'>
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className='text-stc-orange fill-stc-orange' />
                                ))}
                            </div>

                            {/* Review */}
                            <p className='text-gray-600 text-sm sm:text-base leading-relaxed flex-1 mb-5 italic'>
                                "{t.review}"
                            </p>

                            {/* Author */}
                            <div className='flex items-center gap-3 pt-4 border-t border-gray-100'>
                                <div className='w-11 h-11 rounded-full bg-stc-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className='font-bold text-stc-green text-sm'>{t.name}</p>
                                    <p className='text-xs text-gray-400'>{t.location} · {t.package}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
