






export interface user {
    location: point,
    firstName: string,
    lastName: string,
    password: string,
    mail: string,
    admin: boolean
}

export interface point {
    long: number
    lat: number
}

export const USERS: user[] = [
    { location: { long: 22, lat: 51 }, firstName: "avsaczx", lastName: "jozxczxn", password: "12345678", mail: "bon@ds.c", admin: true },
    { location: { long: 1, lat: 1 }, firstName: "evxzczu", lastName: "fhfgjon", password: "12345678", mail: "bon@ds.c", admin: true },
    { location: { long: 31, lat: 121 }, firstName: "eccccccvu", lastName: "josadasdan", password: "12345678", mail: "bon@ds.c", admin: true },
    { location: { long: 44, lat: 78 }, firstName: "evxcbcvfgu", lastName: "jcvbcvbcon", password: "12345678", mail: "bon@ds.c", admin: true }
]
