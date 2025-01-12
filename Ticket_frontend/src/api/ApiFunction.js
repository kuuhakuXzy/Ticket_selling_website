import axios from 'axios';
import dayjs from 'dayjs';

// Base URL for your API
const API_BASE_URL = 'http://localhost:8080';



// Axios instance with default settings
const apiClient = axios.create({ 
    withCredentials: true,
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Function to get the session ID from localStorage
const getSessionID = () => {
    return localStorage.getItem('sessionID');
};

export const getUserId = () => {
    return localStorage.getItem('userId');
}

// Interceptor to add the session ID to each request
apiClient.interceptors.request.use(
    (config) => {
        const sessionID = getSessionID();
        if (sessionID) {
            config.headers['Cookie']= `JSESSIONID=${sessionID}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// API call to create a new user
export const createUser = async (userData) => {
    try {
        const response = await apiClient.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// API call to get user by ID
export const getUserById = async (userId) => {
    try {
        const response = await apiClient.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

// API call to update user
export const updateUser = async (userId, userData) => {
    try {
        const response = await apiClient.put(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// API call to delete user
export const deleteUser = async (userId) => {
    try {
        const response = await apiClient.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

//API login user
export async function loginUser(login) {
	try {
		const response = await apiClient.post("/auth/login", login)
		if (response.status >= 200 && response.status < 300) {
			return response.data
		} else {
			return null
		}
	} catch (error) {
		console.error(error)
		return null
	}
}

//Function to convert time to 24 hour format
const convertTo24HourFormat = (time) => {
    console.log("Time being converted:", time);
    console.log("Converted time:", dayjs(time, "h:mm a").format("HH:mm"));
    return dayjs(time, "h:mm a").format("HH:mm");
    };

// API call to create a new event
export const createEvent = async (eventData) => {
    try {
        const organizerId = getUserId();
        if (!organizerId) {
            throw new Error("Organizer ID not found. Please log in.");
        }
        
        const sessionId = getSessionID();
        const headers = { 
            'Content-Type': 'application/json', // Required content type
            'accept': '*/*', // Matching curl's accept header
            'Cookie': `JSESSIONID=${sessionId}` // Add session ID as a cookie
        };

        if (eventData) {
            eventData.eventStartTime = eventData.eventStartTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false // Set to true if you prefer 12-hour format with AM/PM
            });
            eventData.eventEndTime = eventData.eventEndTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false // Set to true if you prefer 12-hour format with AM/PM
            });
        };

        const eventPayload = {
            ...eventData,
            organizerId: parseInt(organizerId, 10),
        };

        console.log("Event Payload being sent:", eventPayload, { headers });

        const eventResponse = await apiClient.post('/events', eventPayload);
        console.log("Event created successfully:", eventResponse.data);

        return eventResponse.data;
    } catch (error) {
        console.error('Error creating event:', error.response?.data || error.message);
        throw error;
    }
};

// API call to get all events
export const getEvents = async () => {
    try {
        const response = await apiClient.get('/events');
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

// API call to get event by ID
export const getEventById = async (eventId) => {
    try {
        const response = await apiClient.get(`/events/${eventId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        throw error;
    }
};

// API call to get event by search term
export const getEventBySearchTerm = async (searchTerm) => {
    try {
        const response = await apiClient.get(`/events/search?term=${searchTerm}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event by search term:', error);
        throw error;
    }
};


export const createTicket = async (ticketData) => {
    try {
        const response = await apiClient.post(`/tickets`, ticketData);
        console.log("Ticket created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating ticket:', error);
        throw error;
    }
};

//Get tickets by ID
export const getUserTickets = async (userId) => {
    try {
        const response = await apiClient.get(`/users/${userId}/tickets`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user tickets:', error);
        throw error;
    }
};  

//Get specific ticket by ID
export const getTicketById = async (ticketId) => {
    try {
        const response = await apiClient.get(`/tickets/${ticketId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching ticket by ID:', error);
        throw error;
    }
};