/**
 * Weather Data Model
 */
export interface WeatherData {

    /**
     * cordinates variable
     */
    coord: Coord

    /**
     * weather variable
     */
    weather: Weather[]

    /**
     * base variable
     */
    base: string

    /**
     * main variable
     */
    main: Main

    /**
     * visibility variable
     */
    visibility: number

    /**
     * wind variable
     */
    wind: Wind

    /**
     * rain variable
     */
    rain: Rain

    /**
     * clouds variable
     */
    clouds: Clouds

    /**
     * dt variable
     */
    dt: number

    /**
     * sys variable
     */
    sys: Sys

    /**
     * time zone variable
     */
    timezone: number

    /**
     * id variable
     */
    id: number

    /**
     * name variable
     */
    name: string

    /**
     * cod variable
     */
    cod: number
}

/**
 * Coord Model
 */
export interface Coord {
    /**
     * longitude variable
     */
    lon: number

    /**
     * latitude variable
     */
    lat: number
}

/**
 * Weather Model
 */
export interface Weather {
    /**
     * id variable
     */
    id: number

    /**
     * main variable
     */
    main: string

    /**
     * description variable
     */
    description: string

    /**
     * icon variable
     */
    icon: string
}

/**
 * Main Model
 */
export interface Main {
    /**
     * temp variable
     */
    temp: number

    /**
     * feelslike variable
     */
    feelslike: number

    /**
     * minimum temperature variable
     */
    temp_min: number

    /**
     * maximum temperature variable
     */
    temp_max: number

    /**
     * pressure variable
     */
    pressure: number

    /**
     * humidity variable
     */
    humidity: number
}

/**
 * Wind Model
 */
export interface Wind {
    /**
     * speed variable
     */
    speed: number

    /**
     * deg variable
     */
    deg: number
}

/**
 * Rain Model
 */
export interface Rain {
    /**
     * 1h variable
     */
    "1h": number
}

/**
 * Clouds Model
 */
export interface Clouds {
    /**
     * all variable
     */
    all: number
}

/**
 * Sys Model
 */
export interface Sys {
    /**
     * type variable
     */
    type: number

    /**
     * id variable
     */
    id: number

    /**
     * country variable
     */
    country: string

    /**
     * sunrise variable
     */
    sunrise: number

    /**
     * sunset variable
     */
    sunset: number
}
