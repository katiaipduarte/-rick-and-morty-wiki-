export type Character = {
  created: string;
  episode: string[];
  gender: string; //possible enum
  id: number;
  image: string;
  location: WikiLocation;
  name: string;
  origin: WikiLocation;
  species: string; //possible enum
  status: string; //possible enum
  type: string;
  url: string;
};

type WikiLocation = {
  name: string;
  url: string;
};
