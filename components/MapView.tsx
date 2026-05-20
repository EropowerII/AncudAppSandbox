import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { LOCATIONS, TRANSLATIONS } from '../constants';
import { Language, LocationType } from '../types';
import { 
  Filter, X, 
  Calendar, Store, Waves, Landmark, 
  TreeDeciduous, Mountain, Footprints, Building2,
  Navigation, ExternalLink, ChevronDown
} from 'lucide-react';

// SVG Paths for icons used in map pins
const SVG_PATHS: Record<string, string> = {
  [LocationType.EVENT]: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
  [LocationType.BUSINESS]: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>',
  [LocationType.BEACH]: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>',
  [LocationType.HISTORY]: '<line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon>',
  [LocationType.PARK]: '<path d="M8 19.825V22"></path><path d="M16 19.825V22"></path><path d="M12 22v-8.3"></path><path d="M19.643 9.471a5.753 5.753 0 0 0-1.89-6.471 5.755 5.755 0 0 0-7.753 0 5.75 5.75 0 0 0-1.89 6.471c-1.897.458-3.048 2.348-2.618 4.3.43 1.953 2.256 3.193 4.153 2.822h4.71c1.897.37 3.723-.87 4.153-2.822.43-1.952-.721-3.842-2.618-4.3Z"></path>',
  [LocationType.VIEW]: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>',
  [LocationType.ACTIVITY]: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 8c0 2.85-1.67 5.12-4 5.86V16c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V4.77c0-1.66 2.15-2.6 3.55-1.55l.89.67c.98.74 1.56 1.9 1.56 3.12V12c0 2.8-2.2 5-5 5h-1c-2.8 0-5 2.2-5 5v2h2v-2c0-1.7 1.3-3 3-3h1c1.7 0 3 1.3 3 3v2h2v-2c0-2.8-2.2-5-5-5z"></path>',
  [LocationType.MUSEUM]: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>'
};

const createCustomIcon = (type: LocationType, isSelected: boolean, isDimmed: boolean) => {
  let color = 'bg-blue-500';
  let svgPath = SVG_PATHS[type] || '<circle cx="12" cy="12" r="10"/>'; 
  
  if (!isDimmed) {
    switch(type) {
      case LocationType.EVENT: color = 'bg-red-500'; break;
      case LocationType.BUSINESS: color = 'bg-orange-500'; break;
      case LocationType.BEACH: color = 'bg-cyan-500'; break;
      case LocationType.HISTORY: color = 'bg-amber-700'; break;
      case LocationType.PARK: color = 'bg-green-600'; break;
      case LocationType.ACTIVITY: color = 'bg-indigo-500'; break;
      case LocationType.VIEW: color = 'bg-purple-500'; break;
      case LocationType.MUSEUM: color = 'bg-rose-700'; break;
      default: color = 'bg-blue-600';
    }
  } else {
    color = 'bg-slate-400';
  }

  const baseSize = isSelected ? 48 : (isDimmed ? 24 : 36);
  const sizeClass = `w-[${baseSize}px] h-[${baseSize}px]`;
  const ringClass = isSelected ? 'ring-4 ring-white shadow-2xl scale-110' : (isDimmed ? 'ring-1 ring-white/50' : 'ring-2 ring-white shadow-md');
  const opacityClass = isDimmed ? 'opacity-60 grayscale' : 'opacity-100';
  const zIndex = isDimmed ? '0' : '10';

  const iconHtml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${isSelected ? 24 : 18}" height="${isSelected ? 24 : 18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${svgPath}
    </svg>
  `;
  
  return L.divIcon({
    className: 'custom-icon',
    html: `<div class="${color} ${sizeClass} ${ringClass} ${opacityClass} rounded-full flex items-center justify-center text-white transition-all duration-300 transform" style="width:${baseSize}px; height:${baseSize}px;">${iconHtml}</div>`,
    iconSize: [baseSize, baseSize],
    iconAnchor: [baseSize / 2, baseSize],
    popupAnchor: [0, -baseSize + 4]
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

// Handler for map clicks to deselect
const MapEvents = ({ onMapClick }: { onMapClick: () => void }) => {
  useMapEvents({
    click: () => {
      onMapClick();
    },
  });
  return null;
};

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
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (focusedLocationId) {
      setFilter('ALL');
      setSelectedLocationId(focusedLocationId);
    }
  }, [focusedLocationId]);

  const uniqueTypes = useMemo(() => {
    return Array.from(new Set(LOCATIONS.map(l => l.type))).filter(t => t !== LocationType.BUSINESS && t !== LocationType.EVENT);
  }, []);

  const toggleFilterMenu = () => {
    if (isFilterOpen) {
      setFilter('ALL');
      setIsFilterOpen(false);
    } else {
      setIsFilterOpen(true);
    }
  };

  const handleSelectFilter = (type: LocationType) => {
    setFilter(type);
    setIsFilterOpen(false); // Auto close filter menu on selection
  };

  const selectedLocation = useMemo(() => 
    LOCATIONS.find(l => l.id === selectedLocationId), 
  [selectedLocationId]);

  const handleHowToGetThere = () => {
    if (selectedLocation?.link) {
      window.open(selectedLocation.link, '_blank');
    }
  };

  return (
    <div className="flex-1 flex flex-col relative h-full">
      <MapContainer 
        center={[-41.8675, -73.8278]} 
        zoom={12} 
        scrollWheelZoom={true} 
        className="w-full h-full z-0 bg-slate-100"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapEvents onMapClick={() => setSelectedLocationId(null)} />

        <MapController 
          focusedLocationId={focusedLocationId} 
          onFocusComplete={onFocusComplete}
          isActive={isActive}
        />

        {LOCATIONS.map(location => {
          const isMatch = filter === 'ALL' || filter === location.type;
          const isDimmed = !isMatch;
          const isSelected = selectedLocationId === location.id;

          return (
            <Marker
              key={location.id}
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={createCustomIcon(location.type, isSelected, isDimmed)}
              eventHandlers={{
                click: (e) => {
                    L.DomEvent.stopPropagation(e);
                    setSelectedLocationId(location.id);
                }
              }}
              zIndexOffset={isSelected ? 1000 : (isMatch ? 100 : 0)}
            />
          );
        })}
      </MapContainer>

      {/* Detail Blade (Bottom Sheet) */}
      <div 
        className={`absolute bottom-0 left-0 right-0 z-[1100] transition-transform duration-500 ease-in-out ${
          selectedLocation ? 'translate-y-0' : 'translate-y-[110%]'
        }`}
      >
        {selectedLocation && (
          <div className="m-4">
             {/* Main Blade Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-3 border border-slate-100 max-h-[50vh] flex flex-col">
              {/* Header with Type and Close */}
              <div className="px-5 pt-4 pb-2 flex justify-between items-start shrink-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-700">
                  {selectedLocation.type}
                </span>
                <button 
                  onClick={() => setSelectedLocationId(null)}
                  className="bg-slate-100 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <ChevronDown size={20} />
                </button>
              </div>

              {/* Title and Description */}
              <div className="px-5 pb-5 overflow-y-auto overscroll-contain">
                <h2 className="text-xl font-bold text-slate-900 leading-tight mb-2 pr-2">
                  {selectedLocation.name[language]}
                </h2>
                <div className="h-0.5 w-10 bg-blue-500 rounded-full mb-3"></div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedLocation.description ? selectedLocation.description[language] : TRANSLATIONS.noDescription[language]}
                </p>
              </div>
            </div>

            {/* Separate UI for "How to get there" */}
            <button 
              onClick={handleHowToGetThere}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-between transition-all"
            >
               <div className="flex items-center space-x-3">
                 <div className="p-1.5 bg-blue-500 rounded-lg">
                   <Navigation size={20} fill="currentColor" />
                 </div>
                 <div className="text-left">
                   <span className="block text-xs text-blue-200 uppercase font-semibold tracking-wider">{TRANSLATIONS.directions[language]}</span>
                   <span className="block text-base">{TRANSLATIONS.howToGetThere[language]}</span>
                 </div>
               </div>
               <div className="bg-blue-500 p-2 rounded-full">
                 <ExternalLink size={18} />
               </div>
            </button>
          </div>
        )}
      </div>

      {/* Filter FAB Container */}
      <div 
        className={`absolute bottom-4 left-4 z-[1000] flex flex-col-reverse items-start gap-3 pointer-events-none transition-all duration-300 ${
          selectedLocation ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
        }`}
      >
        <button 
          onClick={toggleFilterMenu}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 pointer-events-auto ${
            isFilterOpen || filter !== 'ALL' ? 'bg-slate-800 text-white rotate-0' : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          {isFilterOpen ? <X size={24} /> : <Filter size={24} />}
        </button>

        <div className={`flex flex-col-reverse gap-3 transition-all duration-300 origin-bottom ${isFilterOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}`}>
          {uniqueTypes.map((type, index) => {
             let ringColor = 'ring-blue-500';
             let activeBg = 'bg-blue-500 text-white';
             
             if (type === LocationType.EVENT) { ringColor = 'ring-red-500'; activeBg = 'bg-red-500 text-white'; }
             if (type === LocationType.BUSINESS) { ringColor = 'ring-orange-500'; activeBg = 'bg-orange-500 text-white'; }
             if (type === LocationType.BEACH) { ringColor = 'ring-cyan-500'; activeBg = 'bg-cyan-500 text-white'; }
             if (type === LocationType.HISTORY) { ringColor = 'ring-amber-700'; activeBg = 'bg-amber-700 text-white'; }
             if (type === LocationType.PARK) { ringColor = 'ring-green-600'; activeBg = 'bg-green-600 text-white'; }
             if (type === LocationType.ACTIVITY) { ringColor = 'ring-indigo-500'; activeBg = 'bg-indigo-500 text-white'; }
             if (type === LocationType.VIEW) { ringColor = 'ring-purple-500'; activeBg = 'bg-purple-500 text-white'; }
             if (type === LocationType.MUSEUM) { ringColor = 'ring-rose-700'; activeBg = 'bg-rose-700 text-white'; }

             const isActive = filter === type;

             return (
              <div key={type} className="relative flex items-center" style={{ transitionDelay: `${index * 30}ms` }}>
                <button
                  onClick={() => handleSelectFilter(type)}
                  className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-all active:scale-95 border-2 ${
                    isActive ? `${activeBg} border-white ring-2 ${ringColor}` : 'bg-white text-slate-600 border-white hover:bg-slate-50'
                  } ${isFilterOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  title={type}
                >
                  {getIconForType(type)}
                </button>
                
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