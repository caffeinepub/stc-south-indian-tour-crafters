import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';

export default function FloatingWhatsAppButton() {
    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20STC%2C%20I%27m%20interested%20in%20a%20Kerala%20tour%20package.`}
            target='_blank'
            rel='noopener noreferrer'
            className='fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 w-14 h-14 bg-stc-orange rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-200 group'
            aria-label='Chat on WhatsApp'
        >
            <MessageCircle size={26} className='text-white' />
            {/* Pulse ring */}
            <span className='absolute inset-0 rounded-full bg-stc-orange animate-ping opacity-30' />
            {/* Tooltip */}
            <span className='absolute right-16 bg-stc-green text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg'>
                Chat with us!
            </span>
        </a>
    );
}
