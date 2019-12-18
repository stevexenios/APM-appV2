// These pages may become irrelevant if the other server methods I found work better as they do they attempt
// to do the same thing

// Response of the app from to the server when the user inputs data to the app
export interface DataResponse {
    entry: {
        id: number,
        latitude: string,
        longitude: string,
        temperature: string,
        humidity: string,
        particulate: string,
        qualitative: string,
        access_token: string,
        expires_in: number
    };
}
