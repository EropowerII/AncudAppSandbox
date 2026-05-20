export enum Language {
  ESP = 'ESP',
  ENG = 'ENG',
  DEU = 'DEU',
  ITA = 'ITA',
  FRA = 'FRA',
  POR = 'POR',
  JPN = 'JPN',
  CHN = 'CHN'
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

export type LocalizedString = {
  [key in Language]: string;
};

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface AppLocation {
  id: string;
  name: LocalizedString;
  type: LocationType;
  description?: LocalizedString;
  coordinates: Coordinates;
  link?: string;
}

export interface EventItem {
  id: string;
  date: string;
  time: string;
  title: LocalizedString;
  program: LocalizedString;
  description: LocalizedString;
  locationId: string; // References AppLocation
}

export interface BusinessItem {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  locationId: string; // References AppLocation
  imageUrl: string;
}

export interface BusRoute {
  destination: string; // Destination names usually don't change
  schedule: LocalizedString;
}

export interface EmergencyContact {
  institution: string;
  address: string;
  phone1: string;
  phone2?: string;
}

export interface Translation {
  [key: string]: {
    [key in Language]: string;
  };
}