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
