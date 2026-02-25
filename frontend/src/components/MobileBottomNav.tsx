import { Home, Package, MessageCircle, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';

export default function MobileBottomNav() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className='fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-2xl'>
            <div className='flex items-stretch h-16'>
                <button
                    onClick={() => scrollTo('#home')}
                    className='flex-1 flex flex-col items-center justify-center gap-1 text-stc-green hover:bg-stc-cream transition-colors'
                >
                    <Home size={20} />
                    <span className='text-xs font-medium'>Home</span>
                </button>

                <button
                    onClick={() => scrollTo('#packages')}
                    className='flex-1 flex flex-col items-center justify-center gap-1 text-stc-green hover:bg-stc-cream transition-colors'
                >
                    <Package size={20} />
                    <span className='text-xs font-medium'>Packages</span>
                </button>

                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20STC%2C%20I%27m%20interested%20in%20a%20Kerala%20tour%20package.`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 flex flex-col items-center justify-center gap-1 bg-stc-orange text-white'
                >
                    <MessageCircle size={20} />
                    <span className='text-xs font-bold'>WhatsApp</span>
                </a>

                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className='flex-1 flex flex-col items-center justify-center gap-1 text-stc-green hover:bg-stc-cream transition-colors'
                >
                    <Phone size={20} />
                    <span className='text-xs font-medium'>Call</span>
                </a>
            </div>
        </nav>
    );
}
