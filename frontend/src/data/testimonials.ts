export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    review: string;
    avatar: string;
    package: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Priya Sharma',
        location: 'Mumbai',
        rating: 5,
        review:
            'STC made our Kerala honeymoon absolutely magical! The houseboat experience in Alleppey was beyond our expectations — private, luxurious, and the food was incredible. Our driver was knowledgeable and friendly throughout the trip.',
        avatar: 'PS',
        package: '4N Backwater Bliss',
    },
    {
        id: '2',
        name: 'Rahul & Deepa Nair',
        location: 'Bangalore',
        rating: 5,
        review:
            'We booked the 5-night Mist & Mountains package and it was worth every rupee. The Thekkady spice plantation tour was a highlight we never expected. STC\'s attention to detail and 24/7 support gave us complete peace of mind.',
        avatar: 'RN',
        package: '5N Mist & Mountains',
    },
    {
        id: '3',
        name: 'Ankit Verma',
        location: 'Delhi',
        rating: 5,
        review:
            'Booked the Complete Experience package for our family trip and STC delivered flawlessly. From the Munnar tea gardens to the Varkala cliffs, every destination was perfectly planned. Highly recommend for anyone wanting a premium Kerala experience!',
        avatar: 'AV',
        package: '7N The Complete Experience',
    },
];
