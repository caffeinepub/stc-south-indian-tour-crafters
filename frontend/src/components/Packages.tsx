import PackageCard from './PackageCard';
import { packages } from '../data/packages';

export default function Packages() {
    return (
        <section id='packages' className='py-16 md:py-24 bg-stc-cream'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-10 md:mb-14'>
                    <span className='inline-block text-stc-orange font-semibold text-sm uppercase tracking-widest mb-3'>
                        Kerala Tour Packages
                    </span>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-stc-green mb-4'>
                        Choose Your Perfect Package
                    </h2>
                    <p className='text-gray-500 text-base sm:text-lg max-w-2xl mx-auto'>
                        From weekend getaways to complete Kerala circuits — every package is crafted for an unforgettable experience.
                    </p>
                </div>

                {/* Package Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
                    {packages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
}
