import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';

const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

const packageLinks = [
    { label: 'The Weekend Escape (3N)', href: '#packages' },
    { label: 'Backwater Bliss (4N)', href: '#packages' },
    { label: 'Mist & Mountains (5N)', href: '#packages' },
    { label: 'The Grand Kerala (6N)', href: '#packages' },
    { label: 'The Complete Experience (7N)', href: '#packages' },
];

export default function Footer() {
    const handleNavClick = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const appId = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'stc-south-indian-tour-crafters';

    return (
        <footer className='bg-stc-green-dark text-white'>
            {/* Main Footer */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10'>
                    {/* Brand Column */}
                    <div className='sm:col-span-2 lg:col-span-1'>
                        <img
                            src='/assets/generated/stc-logo.dim_300x80.png'
                            alt='STC – South Indian Tour Crafters'
                            className='h-12 w-auto object-contain mb-4'
                        />
                        <p className='text-white/70 text-sm leading-relaxed mb-5'>
                            Crafting unforgettable Kerala travel experiences with care, expertise, and a passion for South India's beauty.
                        </p>
                        <div className='flex items-start gap-2 text-white/70 text-sm mb-2'>
                            <MapPin size={15} className='text-stc-orange mt-0.5 flex-shrink-0' />
                            <span>Fort Kochi, Kerala, India</span>
                        </div>
                        <div className='flex items-center gap-2 text-white/70 text-sm mb-2'>
                            <Phone size={15} className='text-stc-orange flex-shrink-0' />
                            <a href={`tel:${PHONE_NUMBER}`} className='hover:text-white transition-colors'>
                                {PHONE_NUMBER}
                            </a>
                        </div>
                        <div className='flex items-center gap-2 text-white/70 text-sm'>
                            <Mail size={15} className='text-stc-orange flex-shrink-0' />
                            <a href='mailto:info@stctours.in' className='hover:text-white transition-colors'>
                                info@stctours.in
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='font-bold text-white text-base mb-4 uppercase tracking-wider'>Quick Links</h3>
                        <ul className='flex flex-col gap-2'>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className='text-white/70 hover:text-stc-orange text-sm transition-colors flex items-center gap-1.5'
                                    >
                                        <span className='w-1 h-1 rounded-full bg-stc-orange' />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Packages */}
                    <div>
                        <h3 className='font-bold text-white text-base mb-4 uppercase tracking-wider'>Packages</h3>
                        <ul className='flex flex-col gap-2'>
                            {packageLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className='text-white/70 hover:text-stc-orange text-sm transition-colors flex items-center gap-1.5'
                                    >
                                        <span className='w-1 h-1 rounded-full bg-stc-orange' />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className='font-bold text-white text-base mb-4 uppercase tracking-wider'>Connect With Us</h3>
                        <div className='flex flex-col gap-3 mb-6'>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20STC%2C%20I%27m%20interested%20in%20a%20Kerala%20tour.`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2.5 bg-stc-orange text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-stc-orange-dark transition-all'
                            >
                                <MessageCircle size={16} />
                                WhatsApp Us
                            </a>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className='flex items-center gap-2.5 bg-white/10 text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-white/20 transition-all border border-white/20'
                            >
                                <Phone size={16} />
                                {PHONE_NUMBER}
                            </a>
                        </div>
                        <div className='flex items-center gap-3'>
                            <a
                                href='https://instagram.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 rounded-xl bg-white/10 hover:bg-stc-orange flex items-center justify-center transition-all'
                                aria-label='Instagram'
                            >
                                <SiInstagram size={18} />
                            </a>
                            <a
                                href='https://facebook.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 rounded-xl bg-white/10 hover:bg-stc-orange flex items-center justify-center transition-all'
                                aria-label='Facebook'
                            >
                                <SiFacebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-white/10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center'>
                    <p className='text-white/50 text-xs'>
                        © {new Date().getFullYear()} STC – South Indian Tour Crafters. All rights reserved.
                    </p>
                    <p className='text-white/40 text-xs'>
                        Built with{' '}
                        <span className='text-stc-orange'>♥</span>{' '}
                        using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white/60 hover:text-white transition-colors underline underline-offset-2'
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
