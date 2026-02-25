export interface ItineraryDay {
    day: number;
    title: string;
    activities: string[];
}

export interface Package {
    id: string;
    name: string;
    nights: number;
    days: number;
    route: string;
    image: string;
    price: string;
    highlights: string[];
    itinerary: ItineraryDay[];
    badge?: string;
}

export const inclusions = [
    'Private AC Cab',
    'Professional Driver',
    'Premium Hotel Stay',
    'Daily Breakfast',
    'Houseboat Meals (where applicable)',
    'Sightseeing as per itinerary',
    'Airport Pickup & Drop',
];

export const packages: Package[] = [
    {
        id: 'weekend-escape',
        name: 'The Weekend Escape',
        nights: 3,
        days: 4,
        route: 'Fort Kochi → Munnar → Alleppey → Fort Kochi',
        image: '/assets/generated/package-weekend-escape.dim_800x500.png',
        price: '₹12,999',
        badge: 'Best Seller',
        highlights: ['Munnar Tea Gardens', 'Alleppey Houseboat', 'Backwater Cruise'],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Drive to Munnar',
                activities: [
                    'Arrival at Kochi Airport',
                    'Transfer to Munnar (approx. 4 hrs)',
                    'Waterfalls stop en route',
                    'Tea garden visit',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 2,
                title: 'Munnar Sightseeing',
                activities: [
                    'Eravikulam National Park',
                    'Mattupetty Dam',
                    'Echo Point',
                    'Top Station viewpoint',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 3,
                title: 'Munnar to Alleppey – Houseboat',
                activities: [
                    'Drive to Alleppey (approx. 4 hrs)',
                    'Private houseboat check-in',
                    'Backwater cruise through canals',
                    'All meals onboard',
                    'Overnight on houseboat',
                ],
            },
            {
                day: 4,
                title: 'Departure',
                activities: [
                    'Breakfast onboard',
                    'Houseboat check-out',
                    'Drop at Kochi Airport',
                ],
            },
        ],
    },
    {
        id: 'backwater-bliss',
        name: 'Backwater Bliss',
        nights: 4,
        days: 5,
        route: 'Fort Kochi → Munnar → Alleppey → Fort Kochi',
        image: '/assets/generated/package-backwater-bliss.dim_800x500.png',
        price: '₹16,499',
        highlights: ['Fort Kochi Heritage Walk', 'Kathakali Show', 'Alleppey Houseboat'],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Fort Kochi Sightseeing',
                activities: [
                    'Arrival at Kochi Airport',
                    'Half day Fort Kochi sightseeing',
                    'Chinese Fishing Nets & Mattancherry Palace',
                    'Kathakali cultural show in the evening',
                    'Overnight stay in Fort Kochi',
                ],
            },
            {
                day: 2,
                title: 'Drive to Munnar',
                activities: [
                    'Drive to Munnar (approx. 4 hrs)',
                    'Waterfalls stop en route',
                    'Tea garden visit',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 3,
                title: 'Munnar Sightseeing',
                activities: [
                    'Eravikulam National Park',
                    'Mattupetty Dam',
                    'Echo Point',
                    'Top Station viewpoint',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 4,
                title: 'Munnar to Alleppey – Houseboat',
                activities: [
                    'Drive to Alleppey',
                    'Private houseboat check-in',
                    'Backwater cruise',
                    'All meals onboard',
                    'Overnight on houseboat',
                ],
            },
            {
                day: 5,
                title: 'Departure',
                activities: [
                    'Breakfast onboard',
                    'Houseboat check-out',
                    'Drop at Kochi Airport',
                ],
            },
        ],
    },
    {
        id: 'mist-mountains',
        name: 'Mist & Mountains',
        nights: 5,
        days: 6,
        route: 'Fort Kochi → Munnar → Thekkady → Alleppey → Fort Kochi',
        image: '/assets/generated/package-mist-mountains.dim_800x500.png',
        price: '₹21,999',
        badge: 'Popular',
        highlights: ['Periyar Boating', 'Spice Plantation', 'Alleppey Houseboat'],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Fort Kochi',
                activities: [
                    'Arrival at Kochi Airport',
                    'Fort Kochi sightseeing',
                    'Kathakali show',
                    'Overnight stay in Fort Kochi',
                ],
            },
            {
                day: 2,
                title: 'Drive to Munnar',
                activities: [
                    'Drive to Munnar',
                    'Waterfalls & tea garden visit',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 3,
                title: 'Munnar Sightseeing',
                activities: [
                    'Eravikulam National Park',
                    'Mattupetty Dam & Echo Point',
                    'Top Station',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 4,
                title: 'Munnar to Thekkady',
                activities: [
                    'Drive to Thekkady',
                    'Periyar Wildlife Sanctuary boating',
                    'Spice plantation tour',
                    'Overnight stay in Thekkady',
                ],
            },
            {
                day: 5,
                title: 'Thekkady to Alleppey – Houseboat',
                activities: [
                    'Drive to Alleppey',
                    'Private houseboat check-in',
                    'Backwater cruise',
                    'All meals onboard',
                ],
            },
            {
                day: 6,
                title: 'Departure',
                activities: [
                    'Breakfast onboard',
                    'Drop at Kochi Airport',
                ],
            },
        ],
    },
    {
        id: 'grand-kerala',
        name: 'The Grand Kerala',
        nights: 6,
        days: 7,
        route: 'Fort Kochi → Munnar → Thekkady → Alleppey → Varkala → Fort Kochi',
        image: '/assets/generated/package-grand-kerala.dim_800x500.png',
        price: '₹27,499',
        highlights: ['Varkala Cliff Beach', 'Ayurveda Massage', 'Complete Kerala'],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Fort Kochi',
                activities: [
                    'Arrival at Kochi Airport',
                    'Fort Kochi sightseeing',
                    'Kathakali show',
                    'Overnight stay in Fort Kochi',
                ],
            },
            {
                day: 2,
                title: 'Drive to Munnar',
                activities: [
                    'Drive to Munnar',
                    'Waterfalls & tea garden visit',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 3,
                title: 'Munnar Sightseeing',
                activities: [
                    'Eravikulam National Park',
                    'Mattupetty Dam & Echo Point',
                    'Top Station',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 4,
                title: 'Munnar to Thekkady',
                activities: [
                    'Drive to Thekkady',
                    'Periyar boating',
                    'Spice plantation tour',
                    'Overnight stay in Thekkady',
                ],
            },
            {
                day: 5,
                title: 'Thekkady to Alleppey – Houseboat',
                activities: [
                    'Drive to Alleppey',
                    'Private houseboat check-in',
                    'Backwater cruise',
                    'All meals onboard',
                ],
            },
            {
                day: 6,
                title: 'Alleppey to Varkala',
                activities: [
                    'Drive to Varkala',
                    'Varkala cliff beach visit',
                    'Sunset viewpoint',
                    'Ayurveda massage option',
                    'Overnight stay in Varkala',
                ],
            },
            {
                day: 7,
                title: 'Departure',
                activities: [
                    'Breakfast',
                    'Drive to Kochi Airport',
                    'Drop at Kochi Airport',
                ],
            },
        ],
    },
    {
        id: 'complete-experience',
        name: 'The Complete Experience',
        nights: 7,
        days: 8,
        route: 'Fort Kochi → Munnar → Thekkady → Vagamon → Alleppey → Varkala → Fort Kochi',
        image: '/assets/generated/package-complete-experience.dim_800x500.png',
        price: '₹33,999',
        badge: 'Premium',
        highlights: ['Paragliding in Vagamon', 'Village Experience', 'Full Kerala Circuit'],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Fort Kochi',
                activities: [
                    'Arrival at Kochi Airport',
                    'Fort Kochi sightseeing',
                    'Kathakali show',
                    'Overnight stay in Fort Kochi',
                ],
            },
            {
                day: 2,
                title: 'Drive to Munnar',
                activities: [
                    'Drive to Munnar',
                    'Waterfalls & tea garden visit',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 3,
                title: 'Munnar Sightseeing',
                activities: [
                    'Eravikulam National Park',
                    'Mattupetty Dam & Echo Point',
                    'Top Station',
                    'Overnight stay in Munnar',
                ],
            },
            {
                day: 4,
                title: 'Munnar to Thekkady',
                activities: [
                    'Drive to Thekkady',
                    'Periyar boating',
                    'Spice plantation tour',
                    'Overnight stay in Thekkady',
                ],
            },
            {
                day: 5,
                title: 'Thekkady to Vagamon',
                activities: [
                    'Drive to Vagamon',
                    'Meadows & pine forest walk',
                    'Paragliding option',
                    'Village experience',
                    'Overnight stay in Vagamon',
                ],
            },
            {
                day: 6,
                title: 'Vagamon to Alleppey – Houseboat',
                activities: [
                    'Drive to Alleppey',
                    'Private houseboat check-in',
                    'Backwater cruise',
                    'All meals onboard',
                ],
            },
            {
                day: 7,
                title: 'Alleppey to Varkala',
                activities: [
                    'Drive to Varkala',
                    'Varkala cliff beach',
                    'Sunset viewpoint',
                    'Ayurveda massage option',
                    'Overnight stay in Varkala',
                ],
            },
            {
                day: 8,
                title: 'Departure',
                activities: [
                    'Breakfast',
                    'Drive to Kochi Airport',
                    'Drop at Kochi Airport',
                ],
            },
        ],
    },
];
