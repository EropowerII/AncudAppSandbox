export enum Language {
  ESP = 'ESP',
  ENG = 'ENG'
}

export enum AppView {
  EVENTS = 'events',
  BUSINESS = 'business',
  MAP = 'map',
  BUS = 'bus',
  INFO = 'info'
}

export enum LocationType {
  ACTIVITY = 'Activity',
  HISTORY = 'Historical Location',
  MUSEUM = 'Museum',
  VIEW = 'View',
  BEACH = 'Beach',
  PARK = 'Park',
  EVENT = 'Event',
  BUSINESS = 'Business'
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface AppLocation {
  id: string;
  name: string;
  type: LocationType;
  description?: string;
  coordinates: Coordinates;
  link?: string;
}

export interface EventItem {
  id: string;
  date: string;
  time: string;
  title: string;
  program: string;
  description: string;
  locationId: string; // References AppLocation
}

export interface BusinessItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  locationId: string; // References AppLocation
}

export interface BusRoute {
  destination: string;
  schedule: string;
}

export interface EmergencyContact {
  institution: string;
  address: string;
  phone1: string;
  phone2?: string;
}

export interface Translation {
  [key: string]: {
    [Language.ESP]: string;
    [Language.ENG]: string;
  };
}
