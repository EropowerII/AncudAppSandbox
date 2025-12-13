import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { LOCATIONS, TRANSLATIONS } from '../constants';
import { Language, LocationType } from '../types';
import { 
  Filter, X, Check, 
  Calendar, Store, Waves, Landmark, 
  TreeDeciduous, Mountain, Footprints, Building2 
} from 'lucide-react';

// Custom Marker Icons
const createCustomIcon = (type: LocationType, isSelected: boolean) => {
  let color = 'bg-blue-500';
  let iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
  
  switch(type) {
    case LocationType.EVENT: color = 'bg-red-500'; break;
    case LocationType.BUSINESS: color = 'bg-orange-500'; break;
    case LocationType.BEACH: color = 'bg-cyan-500'; break;
    case LocationType.HISTORY: color = 'bg-amber-700'; break;
    case LocationType.PARK: color = 'bg-green-600'; break;
    default: color = 'bg-blue-600';
  }

  const sizeClass = isSelected ? 'w-10 h-10 ring-4 ring-white' : 'w-8 h-8 ring-2 ring-white';
  
  return L.divIcon({
    className: 'custom-icon',
    html: `<div class="${color} ${sizeClass} rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110">${iconHtml}</div>`,
    iconSize: isSelected ? [40, 40] : [32, 32],
    iconAnchor: isSelected ? [20, 40] : [16, 32],
    popupAnchor: [0, -36]
  });
};

const getIconForType = (type: LocationType) => {
  switch(type) {
    case LocationType.EVENT: return <Calendar size={20} />;
    case LocationType.BUSINESS: return <Store size={20} />;
    case LocationType.BEACH: return <Waves size={20} />;
    case LocationType.HISTORY: return <Landmark size={20} />;
    case LocationType.PARK: return <TreeDeciduous size={20} />;
    case LocationType.VIEW: return <Mountain size={20} />;
    case LocationType.ACTIVITY: return <Footprints size={20} />;
    case LocationType.MUSEUM: return <Building2 size={20} />;
    default: return <Filter size={20} />;
  }
};

interface MapViewProps {
  language: Language;
  focusedLocationId: string | null;
  onFocusComplete: () => void;
  isActive: boolean;
}

// Map Controller for FlyTo animation and Size Invalidation
const MapController = ({ 
  focusedLocationId, 
  onFocusComplete,
  isActive
}: { 
  focusedLocationId: string | null, 
  onFocusComplete: () => void,
  isActive: boolean
}) => {
  const map = useMap();

  // Fix: Invalidate size when map becomes active to prevent rendering issues
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        map.invalidateSize();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isActive, map]);

  useEffect(() => {
    if (focusedLocationId) {
      const loc = LOCATIONS.find(l => l.id === focusedLocationId);
      if (loc) {
        // Wait a small tick to ensure invalidateSize has run if switching tabs simultaneously
        setTimeout(() => {
            map.flyTo([loc.coordinates.lat, loc.coordinates.lng], 15, {
              animate: true,
              duration: 1.5
            });
        }, 150);
        
        const timer = setTimeout(() => {
          onFocusComplete();
        }, 1650);
        return () => clearTimeout(timer);
      }
    }
  }, [focusedLocationId, map, onFocusComplete]);

  return null;
};

const MapView: React.FC<MapViewProps> = ({ language, focusedLocationId, onFocusComplete, isActive }) => {
  const [filter, setFilter] = useState<LocationType | 'ALL'>('ALL');
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sync with focused location
  useEffect(() => {
    if (focusedLocationId) {
      setFilter('ALL');
      setActivePopup(focusedLocationId);
    }
  }, [focusedLocationId]);

  const uniqueTypes = useMemo(() => {
    return Array.from(new Set(LOCATIONS.map(l => l.type)));
  }, []);

  const toggleFilterMenu = () => {
    if (isFilterOpen) {
      // Closing the menu resets the filter to ALL
      setFilter('ALL');
      setIsFilterOpen(false);
    } else {
      setIsFilterOpen(true);
    }
  };

  const handleSelectFilter = (type: LocationType) => {
    setFilter(type);
  };

  return (
    <div className="flex-1 flex flex-col relative h-full">
      <MapContainer 
        center={[-41.8675, -73.8278]} 
        zoom={13} 
        scrollWheelZoom={true} 
        className="w-full h-full z-0"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController 
          focusedLocationId={focusedLocationId} 
          onFocusComplete={onFocusComplete}
          isActive={isActive}
        />

        {LOCATIONS.map(location => {
          const isMatch = filter === 'ALL' || filter === location.type;
          const isHighlighted = isMatch;
          const isFocused = focusedLocationId === location.id;
          const markerRef = useRef<L.Marker>(null);
          
          useEffect(() => {
             if (isFocused && markerRef.current) {
                 markerRef.current.openPopup();
             }
          }, [isFocused]);

          return (
            <Marker
              key={location.id}
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={createCustomIcon(location.type, isHighlighted)}
              ref={markerRef}
              eventHandlers={{
                click: () => setActivePopup(location.id)
              }}
              zIndexOffset={isHighlighted ? 100 : 0}
              opacity={isHighlighted ? 1 : 0.5}
            >
              <Popup className="custom-popup">
                <div className="p-1 min-w-[200px]">
                   <span className="text-[10px] font-bold uppercase text-blue-500 tracking-wider block mb-1">{location.type}</span>
                   <h3 className="font-bold text-base text-slate-800 leading-tight mb-2">{location.name}</h3>
                   {location.description && (
                     <p className="text-sm text-slate-600 mb-2">{location.description}</p>
                   )}
                   {location.link && (
                     <a 
                       href={location.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-xs font-semibold text-blue-600 hover:underline flex items-center"
                     >
                       Google Maps Link &rarr;
                     </a>
                   )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Filter FAB Container - Strictly manage pointer events to avoid map blocking */}
      <div className="absolute bottom-4 left-4 z-[1000] flex flex-col-reverse items-start gap-3 pointer-events-none">
        {/* Main Filter Toggle Button - Always Interactive */}
        <button 
          onClick={toggleFilterMenu}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 pointer-events-auto ${
            isFilterOpen || filter !== 'ALL' ? 'bg-slate-800 text-white rotate-0' : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          {isFilterOpen ? <X size={24} /> : <Filter size={24} />}
        </button>

        {/* Expanded Filter Options (Icons) */}
        <div className={`flex flex-col-reverse gap-3 transition-all duration-300 origin-bottom ${isFilterOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}`}>
          {uniqueTypes.map((type, index) => {
             // Distinct colors for buttons based on type to match map markers
             let ringColor = 'ring-blue-500';
             let activeBg = 'bg-blue-500 text-white';
             
             if (type === LocationType.EVENT) { ringColor = 'ring-red-500'; activeBg = 'bg-red-500 text-white'; }
             if (type === LocationType.BUSINESS) { ringColor = 'ring-orange-500'; activeBg = 'bg-orange-500 text-white'; }
             if (type === LocationType.BEACH) { ringColor = 'ring-cyan-500'; activeBg = 'bg-cyan-500 text-white'; }
             if (type === LocationType.HISTORY) { ringColor = 'ring-amber-700'; activeBg = 'bg-amber-700 text-white'; }

             const isActive = filter === type;

             return (
              <div key={type} className="relative flex items-center" style={{ transitionDelay: `${index * 30}ms` }}>
                <button
                  onClick={() => handleSelectFilter(type)}
                  // CRITICAL: Ensure buttons are only clickable when the menu is open
                  className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-all active:scale-95 border-2 ${
                    isActive ? `${activeBg} border-white ring-2 ${ringColor}` : 'bg-white text-slate-600 border-white hover:bg-slate-50'
                  } ${isFilterOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  title={type}
                >
                  {getIconForType(type)}
                </button>
                
                {/* Label - Absolute positioning keeps the interaction box to just the circle. 
                    Pointer events none ensures the label text itself doesn't block clicks.
                 */}
                <span className={`absolute left-14 text-xs font-bold text-slate-800 bg-white/90 px-2 py-1 rounded shadow-sm whitespace-nowrap transition-opacity pointer-events-none ${isActive && isFilterOpen ? 'opacity-100' : 'opacity-0'}`}>
                  {type}
                </span>
              </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapView;