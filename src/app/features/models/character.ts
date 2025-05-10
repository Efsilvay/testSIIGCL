export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: [];
    url: string;
    created: string;
}

export interface Info {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
}

export interface CharData {
    info: Info;
    results: [Character]
}