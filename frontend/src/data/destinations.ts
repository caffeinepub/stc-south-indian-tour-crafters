export interface Destination {
    id: string;
    name: string;
    emoji: string;
    image: string;
    description: string;
    highlights: string[];
    note?: string;
}

export const destinations: Destination[] = [
    {
        id: 'fort-kochi',
        name: 'Fort Kochi',
        emoji: '🌊',
        image: '/assets/generated/destination-fort-kochi.dim_400x400.png',
        description: 'Historic coastal town blending colonial charm, art cafés and seaside sunsets.',
        note: 'Nearest Airport: Cochin International Airport — Entry point for all packages.',
        highlights: [
            'Chinese Fishing Nets',
            'Mattancherry Palace',
            'Jew Town',
            'St. Francis Church',
            'Santa Cruz Basilica',
            'Beach sunset walk',
            'Kathakali cultural show',
        ],
    },
    {
        id: 'munnar',
        name: 'Munnar',
        emoji: '🌄',
        image: '/assets/generated/destination-munnar.dim_400x400.png',
        description: 'Misty hills, endless tea gardens and cool mountain air.',
        highlights: [
            'Tea plantations',
            'Eravikulam National Park',
            'Mattupetty Dam',
            'Echo Point',
            'Top Station',
            'Kolukkumalai sunrise',
        ],
    },
    {
        id: 'alleppey',
        name: 'Alleppey',
        emoji: '🚣',
        image: '/assets/generated/destination-alleppey.dim_400x400.png',
        description: 'Serene backwaters and authentic Kerala life.',
        highlights: [
            'Private houseboat stay',
            'Backwater cruise',
            'Village canoe ride',
            'Sunset kayaking',
        ],
    },
    {
        id: 'thekkady',
        name: 'Thekkady',
        emoji: '🐘',
        image: '/assets/generated/destination-thekkady.dim_400x400.png',
        description: 'Wildlife, forests and spice-scented hills.',
        highlights: [
            'Periyar Wildlife Sanctuary',
            'Boating on Periyar Lake',
            'Spice plantation visit',
            'Elephant interaction',
        ],
    },
    {
        id: 'varkala',
        name: 'Varkala',
        emoji: '🌊',
        image: '/assets/generated/destination-varkala.dim_400x400.png',
        description: 'Dramatic red cliffs, turquoise sea and laid-back beach vibes.',
        highlights: [
            'Cliff beach',
            'Sunset viewpoints',
            'Beachside cafés',
            'Ayurveda spas',
        ],
    },
    {
        id: 'vagamon',
        name: 'Vagamon',
        emoji: '🌄',
        image: '/assets/generated/destination-vagamon.dim_400x400.png',
        description: 'Offbeat hill escape with rolling meadows and pine forests.',
        highlights: [
            'Rolling meadows',
            'Pine forest walks',
            'Paragliding',
            'Offbeat hill escape',
        ],
    },
    {
        id: 'wayanad',
        name: 'Wayanad',
        emoji: '🌿',
        image: '/assets/generated/destination-wayanad.dim_400x400.png',
        description: 'Lush rainforests, ancient caves and cascading waterfalls.',
        highlights: [
            'Waterfalls',
            'Edakkal Caves',
            'Banasura Dam',
            'Wildlife sanctuary',
        ],
    },
];
