export interface JwtResponse {
    dataUser: {
        id: number,
        email: string,
        accessToken: string,
        expire_in: string
    }
}
