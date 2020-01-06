// These pages may become irrelevant if the other server methods I found work better as they do they attempt
// to do the same thing

// Interface for the app to fill in when creating a data entry to send to the server
export interface Entry {
    id: number;
    latitude: string;
    longitude: string;
    temperature: string;
    humidity: string;
    particulate: string;
}
