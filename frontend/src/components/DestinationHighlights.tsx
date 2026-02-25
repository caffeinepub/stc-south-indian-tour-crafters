import { useState } from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';
import { destinations, type Destination } from '../data/destinations';

export default function DestinationHighlights() {
    const [selected, setSelected] = useState<Destination | null>(null);

    return (
        <section id='destinations' className='py-16 md:py-24 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-10 md:mb-14'>
                    <span className='inline-block text-stc-orange font-semibold text-sm uppercase tracking-widest mb-3'>
                        Explore Kerala
                    </span>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-stc-green mb-4'>
                        Destination Highlights
                    </h2>
                    <p className='text-gray-500 text-base sm:text-lg max-w-xl mx-auto'>
                        Tap on a destination to discover its magic
                    </p>
                </div>

                {/* Horizontal Scrollable Circles */}
                <div className='flex gap-5 sm:gap-7 overflow-x-auto scrollbar-hide pb-4 px-1 justify-start md:justify-center flex-nowrap'>
                    {destinations.map((dest) => (
                        <button
                            key={dest.id}
                            onClick={() => setSelected(dest)}
                            className='flex flex-col items-center gap-3 flex-shrink-0 group focus:outline-none'
                        >
                            <div className='relative'>
                                <div
                                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                                        selected?.id === dest.id
                                            ? 'border-stc-orange shadow-lg scale-110'
                                            : 'border-stc-green/30 group-hover:border-stc-orange'
                                    }`}
                                >
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                {selected?.id === dest.id && (
                                    <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-stc-orange rounded-full flex items-center justify-center'>
                                        <CheckCircle2 size={14} className='text-white' />
                                    </div>
                                )}
                            </div>
                            <span
                                className={`text-xs sm:text-sm font-semibold text-center leading-tight max-w-[80px] transition-colors ${
                                    selected?.id === dest.id ? 'text-stc-orange' : 'text-stc-green group-hover:text-stc-orange'
                                }`}
                            >
                                {dest.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Destination Modal */}
            {selected && (
                <div
                    className='fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4'
                    onClick={() => setSelected(null)}
                >
                    {/* Backdrop */}
                    <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />

                    {/* Modal Content */}
                    <div
                        className='relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className='relative h-52 sm:h-64 flex-shrink-0'>
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                            <div className='absolute bottom-4 left-5'>
                                <h3 className='text-2xl sm:text-3xl font-bold text-white'>
                                    {selected.emoji} {selected.name}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelected(null)}
                                className='absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all'
                                aria-label='Close'
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className='p-5 sm:p-6 overflow-y-auto'>
                            {selected.note && (
                                <div className='flex items-start gap-2 bg-stc-cream-dark rounded-xl p-3 mb-4'>
                                    <MapPin size={16} className='text-stc-orange mt-0.5 flex-shrink-0' />
                                    <p className='text-sm text-gray-600'>{selected.note}</p>
                                </div>
                            )}
                            <p className='text-gray-700 text-base mb-5 leading-relaxed font-medium'>
                                {selected.description}
                            </p>
                            <h4 className='font-bold text-stc-green text-sm uppercase tracking-wider mb-3'>
                                Highlights
                            </h4>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                {selected.highlights.map((h) => (
                                    <li key={h} className='flex items-center gap-2 text-sm text-gray-700'>
                                        <span className='w-5 h-5 rounded-full bg-stc-green/10 flex items-center justify-center flex-shrink-0'>
                                            <CheckCircle2 size={12} className='text-stc-green' />
                                        </span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
