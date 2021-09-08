export interface Characters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };

  results: CharacterData[];
}

export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
