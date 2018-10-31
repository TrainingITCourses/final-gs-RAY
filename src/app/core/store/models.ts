export interface TypeStatus {
  id: number;
  name: string;
  description: string;
  color: string;
}

export interface Launch {
  id: number;
  name: string;
  status: number;
  date: Date;
  location: string;
  locationMap: string;
  failreason: string;
  rocket: Rocket;
  agencie: Agencie;
}

export interface Rocket {
  id: number;
  name: string;
  image: string;
  mission: string;
  missionUrl: string;
}


export interface Agencie {
  id: number;
  name: string;
  country: string;
  url: string;
}

const initialRocket = {
  id: 0,
  name: '',
  image: '',
  mission: '',
  missionUrl: ''
};

const initialAgencie = {
  id: 0,
  name: '',
  country: '',
  url: ''
};

export const initialLaunch = {
  id: 0,
  name: '',
  status: 0,
  date: new Date(),
  location: '',
  locationMap: '',
  failreason: '',
  rocket: initialRocket,
  agencie: initialAgencie
};
