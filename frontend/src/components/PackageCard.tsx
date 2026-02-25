import { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp, MapPin, Moon, CheckCircle2, Star } from 'lucide-react';
import { type Package, inclusions } from '../data/packages';

const WHATSAPP_NUMBER = '919876543210';

interface PackageCardProps {
    pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
    const [expanded, setExpanded] = useState(false);

    const whatsappMsg = encodeURIComponent(
        `Hi STC, I'm interested in the "${pkg.name}" (${pkg.nights}N/${pkg.days}D) package. Please share more details.`
    );

    return (
        <article className='bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col'>
            {/* Image */}
            <div className='relative h-52 sm:h-56 overflow-hidden'>
                <img
                    src={pkg.image}
                    alt={pkg.name}
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                {pkg.badge && (
                    <div className='absolute top-3 left-3 bg-stc-orange text-white text-xs font-bold px-3 py-1 rounded-full'>
                        {pkg.badge}
                    </div>
                )}
                <div className='absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1'>
                    <Moon size={13} className='text-stc-green' />
                    <span className='text-stc-green font-bold text-sm'>{pkg.nights}N / {pkg.days}D</span>
                </div>
            </div>

            {/* Content */}
            <div className='p-5 flex flex-col flex-1'>
                {/* Title & Rating */}
                <div className='flex items-start justify-between gap-2 mb-2'>
                    <h3 className='text-lg font-bold text-stc-green leading-tight'>{pkg.name}</h3>
                    <div className='flex items-center gap-0.5 flex-shrink-0'>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className='text-stc-orange fill-stc-orange' />
                        ))}
                    </div>
                </div>

                {/* Route */}
                <div className='flex items-start gap-1.5 mb-4'>
                    <MapPin size={14} className='text-stc-orange mt-0.5 flex-shrink-0' />
                    <p className='text-xs text-gray-500 leading-relaxed'>{pkg.route}</p>
                </div>

                {/* Highlights */}
                <div className='flex flex-wrap gap-1.5 mb-4'>
                    {pkg.highlights.map((h) => (
                        <span key={h} className='text-xs bg-stc-green/8 text-stc-green font-medium px-2.5 py-1 rounded-full border border-stc-green/15'>
                            {h}
                        </span>
                    ))}
                </div>

                {/* Inclusions */}
                <div className='bg-stc-cream-dark rounded-xl p-3 mb-4'>
                    <p className='text-xs font-bold text-stc-green uppercase tracking-wider mb-2'>Inclusions</p>
                    <div className='grid grid-cols-1 gap-1'>
                        {inclusions.map((inc) => (
                            <div key={inc} className='flex items-center gap-1.5 text-xs text-gray-600'>
                                <CheckCircle2 size={11} className='text-stc-green flex-shrink-0' />
                                {inc}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <p className='text-xs text-gray-400'>Starting from</p>
                        <p className='text-2xl font-bold text-stc-green'>{pkg.price}</p>
                        <p className='text-xs text-gray-400'>per person</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-xs text-gray-400'>Duration</p>
                        <p className='text-sm font-semibold text-gray-700'>{pkg.nights} Nights</p>
                        <p className='text-xs text-gray-400'>{pkg.days} Days</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex gap-2 mt-auto'>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 flex items-center justify-center gap-1.5 bg-stc-orange text-white font-semibold text-sm py-3 rounded-xl btn-shadow-orange hover:bg-stc-orange-dark transition-all'
                    >
                        <MessageCircle size={16} />
                        WhatsApp
                    </a>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className='flex-1 flex items-center justify-center gap-1.5 bg-stc-green text-white font-semibold text-sm py-3 rounded-xl btn-shadow hover:bg-stc-green-dark transition-all'
                    >
                        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        {expanded ? 'Hide' : 'View Details'}
                    </button>
                </div>

                {/* Collapsible Itinerary */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className='border-t border-gray-100 pt-4'>
                        <h4 className='font-bold text-stc-green text-sm uppercase tracking-wider mb-3'>
                            Day-by-Day Itinerary
                        </h4>
                        <div className='flex flex-col gap-3'>
                            {pkg.itinerary.map((day) => (
                                <div key={day.day} className='flex gap-3'>
                                    <div className='flex flex-col items-center'>
                                        <div className='w-7 h-7 rounded-full bg-stc-green text-white text-xs font-bold flex items-center justify-center flex-shrink-0'>
                                            {day.day}
                                        </div>
                                        {day.day < pkg.itinerary.length && (
                                            <div className='w-0.5 flex-1 bg-stc-green/20 mt-1' />
                                        )}
                                    </div>
                                    <div className='pb-3 flex-1'>
                                        <p className='font-semibold text-sm text-gray-800 mb-1'>{day.title}</p>
                                        <ul className='flex flex-col gap-0.5'>
                                            {day.activities.map((act) => (
                                                <li key={act} className='text-xs text-gray-500 flex items-start gap-1.5'>
                                                    <span className='w-1 h-1 rounded-full bg-stc-orange mt-1.5 flex-shrink-0' />
                                                    {act}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
