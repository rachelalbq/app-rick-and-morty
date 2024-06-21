export interface CharacterResponse {
    info: PageInfo;
    results: Character[];
  }
  
  export interface PageInfo {
    count: number;
    pages: number;
    next: string;
    prev: any;
  }
  
  export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  export interface CharacterLocation {
    name: string;
    url: string;
  }
  