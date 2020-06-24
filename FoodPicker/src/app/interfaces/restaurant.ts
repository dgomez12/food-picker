export interface Location {
    lat: number;
    lng: number;
}

export interface Geometry {
    location: Location;
}

export interface Photo {
    photo_reference?: string;
}

export interface Restaurant {
    geometry: Geometry;
    name: string;
    photos?: Photo[];
    price_level?: string;
    rating?: string;
    vicinity?: string;
}

export interface Results {
    next_page_token?: string;
    results: Restaurant[];
}