// Date formatting utilities
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
};

export const formatDateTime = (dateString, timeString) => {
    return `${formatDate(dateString)} at ${formatTime(timeString)}`;
};

export const getRelativeDate = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Past Event';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays <= 30) return `In ${Math.ceil(diffDays / 7)} weeks`;
    return formatDate(dateString);
};

// Search and filter utilities
export const searchEvents = (events, searchTerm) => {
    if (!searchTerm.trim()) return events;

    const term = searchTerm.toLowerCase();
    return events.filter(event =>
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term) ||
        event.category.toLowerCase().includes(term) ||
        event.organizer.toLowerCase().includes(term)
    );
};

export const filterByCategory = (events, category) => {
    if (!category || category === 'All') return events;
    return events.filter(event => event.category === category);
};

export const filterByDateRange = (events, startDate, endDate) => {
    if (!startDate && !endDate) return events;

    return events.filter(event => {
        const eventDate = new Date(event.date);
        const start = startDate ? new Date(startDate) : new Date('1900-01-01');
        const end = endDate ? new Date(endDate) : new Date('2100-12-31');
        return eventDate >= start && eventDate <= end;
    });
};

export const filterByLocation = (events, location) => {
    if (!location.trim()) return events;

    const term = location.toLowerCase();
    return events.filter(event =>
        event.location.toLowerCase().includes(term)
    );
};

export const filterByPrice = (events, priceRange) => {
    if (!priceRange) return events;

    return events.filter(event => {
        if (priceRange === 'free') {
            return event.price.toLowerCase() === 'free';
        }
        if (priceRange === 'paid') {
            return event.price.toLowerCase() !== 'free';
        }
        return true;
    });
};

// Sort utilities
export const sortByDate = (events, order = 'asc') => {
    return [...events].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
};

export const sortByAttendees = (events, order = 'desc') => {
    return [...events].sort((a, b) => {
        return order === 'desc' ? b.attendees - a.attendees : a.attendees - b.attendees;
    });
};

// Validation utilities
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password);
};

export const getPasswordStrength = (password) => {
    if (password.length === 0) return { strength: 0, label: '' };
    if (password.length < 6) return { strength: 20, label: 'Very Weak' };

    let strength = 0;

    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 20;
    if (/[a-z]/.test(password)) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 10;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 10;

    if (strength <= 40) return { strength, label: 'Weak' };
    if (strength <= 60) return { strength, label: 'Fair' };
    if (strength <= 80) return { strength, label: 'Good' };
    return { strength: 100, label: 'Strong' };
};

// String utilities
export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

export const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Number utilities
export const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
};
