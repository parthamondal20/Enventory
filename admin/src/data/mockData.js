// Mock Event Data (same as before)
export const categories = [
    'All',
    'Music',
    'Technology',
    'Sports',
    'Art & Culture',
    'Business',
    'Food & Drink',
    'Health & Wellness',
    'Education',
    'Networking'
];

export const mockEvents = [
    {
        id: 1,
        title: "Summer Music Festival 2025",
        description: "Join us for the biggest music festival of the year featuring top artists from around the world. Experience three days of non-stop music, food, and entertainment.",
        category: "Music",
        date: "2025-07-15",
        time: "18:00",
        location: "Central Park, New York",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
        organizer: "Music Events Inc.",
        attendees: 2500,
        price: "$150",
        featured: true,
        status: "upcoming"
    },
    {
        id: 2,
        title: "Tech Innovation Summit",
        description: "Discover the latest in AI, blockchain, and emerging technologies. Network with industry leaders and learn from expert speakers.",
        category: "Technology",
        date: "2025-03-20",
        time: "09:00",
        location: "Silicon Valley Convention Center",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        organizer: "TechWorld Conferences",
        attendees: 1200,
        price: "$299",
        featured: true,
        status: "upcoming"
    },
    {
        id: 3,
        title: "Marathon City Run",
        description: "Annual city marathon with routes for beginners and professionals. Join thousands of runners in this exciting event!",
        category: "Sports",
        date: "2025-04-10",
        time: "07:00",
        location: "City Center, Boston",
        image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80",
        organizer: "City Sports Association",
        attendees: 5000,
        price: "Free",
        featured: false,
        status: "upcoming"
    },
    {
        id: 4,
        title: "Modern Art Exhibition",
        description: "Explore contemporary art from renowned and emerging artists. A curated collection of paintings, sculptures, and digital art.",
        category: "Art & Culture",
        date: "2025-02-28",
        time: "10:00",
        location: "Metropolitan Museum, Chicago",
        image: "https://images.unsplash.com/photo-1531243625752-e0a07e8ba6c9?w=800&q=80",
        organizer: "Art Collective",
        attendees: 800,
        price: "$25",
        featured: true,
        status: "completed"
    },
    {
        id: 5,
        title: "Startup Pitch Competition",
        description: "Watch innovative startups pitch their ideas to top investors. Network with entrepreneurs and VCs from across the country.",
        category: "Business",
        date: "2025-05-05",
        time: "14:00",
        location: "Business Hub, San Francisco",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
        organizer: "Startup Weekend",
        attendees: 600,
        price: "$50",
        featured: false,
        status: "upcoming"
    },
    {
        id: 6,
        title: "Food & Wine Festival",
        description: "Taste exquisite dishes from world-class chefs and sample premium wines. A culinary journey you won't forget!",
        category: "Food & Drink",
        date: "2025-06-12",
        time: "12:00",
        location: "Waterfront Plaza, Miami",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        organizer: "Culinary Events",
        attendees: 1500,
        price: "$75",
        featured: true,
        status: "upcoming"
    },
];

// Mock Participants Data
export const mockParticipants = [
    // Event 1 participants
    { id: 1, name: "John Smith", email: "john.smith@email.com", eventId: 1, registrationDate: "2025-01-15", phone: "+1-555-0101" },
    { id: 2, name: "Emma Johnson", email: "emma.j@email.com", eventId: 1, registrationDate: "2025-01-16", phone: "+1-555-0102" },
    { id: 3, name: "Michael Brown", email: "michael.b@email.com", eventId: 1, registrationDate: "2025-01-17", phone: "+1-555-0103" },

    // Event 2 participants
    { id: 4, name: "Sarah Davis", email: "sarah.d@email.com", eventId: 2, registrationDate: "2025-01-10", phone: "+1-555-0104" },
    { id: 5, name: "James Wilson", email: "james.w@email.com", eventId: 2, registrationDate: "2025-01-11", phone: "+1-555-0105" },

    // Event 3 participants
    { id: 6, name: "Lisa Anderson", email: "lisa.a@email.com", eventId: 3, registrationDate: "2025-01-12", phone: "+1-555-0106" },
    { id: 7, name: "David Martinez", email: "david.m@email.com", eventId: 3, registrationDate: "2025-01-13", phone: "+1-555-0107" },
    { id: 8, name: "Emily Taylor", email: "emily.t@email.com", eventId: 3, registrationDate: "2025-01-14", phone: "+1-555-0108" },

    // Event 4 participants  
    { id: 9, name: "Robert Garcia", email: "robert.g@email.com", eventId: 4, registrationDate: "2025-01-05", phone: "+1-555-0109" },
    { id: 10, name: "Jennifer Lee", email: "jennifer.l@email.com", eventId: 4, registrationDate: "2025-01-06", phone: "+1-555-0110" },

    // Event 5 participants
    { id: 11, name: "William Thomas", email: "william.t@email.com", eventId: 5, registrationDate: "2025-01-18", phone: "+1-555-0111" },
    { id: 12, name: "Maria Rodriguez", email: "maria.r@email.com", eventId: 5, registrationDate: "2025-01-19", phone: "+1-555-0112" },
    { id: 13, name: "Christopher White", email: "chris.w@email.com", eventId: 5, registrationDate: "2025-01-20", phone: "+1-555-0113" },

    // Event 6 participants
    { id: 14, name: "Jessica Martin", email: "jessica.m@email.com", eventId: 6, registrationDate: "2025-01-21", phone: "+1-555-0114" },
    { id: 15, name: "Daniel Harris", email: "daniel.h@email.com", eventId: 6, registrationDate: "2025-01-22", phone: "+1-555-0115" },
];

// Get participants for a specific event
export const getParticipantsByEventId = (eventId) => {
    return mockParticipants.filter(p => p.eventId === parseInt(eventId));
};

// Get all participants
export const getAllParticipants = () => {
    return mockParticipants.map(participant => {
        const event = mockEvents.find(e => e.id === participant.eventId);
        return {
            ...participant,
            eventName: event ? event.title : 'Unknown Event'
        };
    });
};

// Get featured events
export const getFeaturedEvents = () => {
    return mockEvents.filter(event => event.featured);
};

// Get events by category
export const getEventsByCategory = (category) => {
    if (category === 'All') return mockEvents;
    return mockEvents.filter(event => event.category === category);
};

// Get event by ID
export const getEventById = (id) => {
    return mockEvents.find(event => event.id === parseInt(id));
};

// Get similar events (same category, excluding current event)
export const getSimilarEvents = (eventId, category, limit = 3) => {
    return mockEvents
        .filter(event => event.id !== eventId && event.category === category)
        .slice(0, limit);
};

// Get dashboard stats
export const getDashboardStats = () => {
    return {
        totalEvents: mockEvents.length,
        totalParticipants: mockParticipants.length,
        upcomingEvents: mockEvents.filter(e => e.status === 'upcoming').length,
        completedEvents: mockEvents.filter(e => e.status === 'completed').length,
        categories: categories.length - 1, // Exclude 'All'
    };
};
