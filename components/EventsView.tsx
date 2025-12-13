import React from 'react';
import { EVENTS, TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { MapPin, Calendar, Clock } from 'lucide-react';

interface EventsViewProps {
  language: Language;
  onViewOnMap: (id: string) => void;
}

const EventsView: React.FC<EventsViewProps> = ({ language, onViewOnMap }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-100 p-4 space-y-4 no-scrollbar">
      <div className="pb-2">
        <h2 className="text-2xl font-bold text-slate-800">{TRANSLATIONS.tabs.events[language]}</h2>
        <p className="text-sm text-slate-500">Discover what's happening in Ancud</p>
      </div>

      {EVENTS.map((event, index) => (
        <div key={event.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          {/* Left Date Column */}
          <div className="bg-blue-600 text-white w-20 flex flex-col items-center justify-center p-2 text-center shrink-0">
            <span className="text-xs font-medium uppercase opacity-80">{event.date.split('/')[1] === '01' ? 'ENE' : 'FEB'}</span>
            <span className="text-2xl font-bold leading-none">{event.date.split('/')[0]}</span>
            <span className="text-xs mt-1 opacity-75">{event.time}</span>
          </div>

          {/* Right Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-800 leading-tight mb-1">{event.title}</h3>
              <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">{event.program}</div>
              <p className="text-sm text-slate-600 line-clamp-3">{event.description}</p>
            </div>
            
            <button 
              onClick={() => onViewOnMap(event.locationId)}
              className="mt-4 self-end flex items-center space-x-1 text-sm font-medium text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
            >
              <MapPin size={16} />
              <span>{TRANSLATIONS.viewOnMap[language]}</span>
            </button>
          </div>
        </div>
      ))}
      <div className="h-20" /> {/* Spacer for fab */}
    </div>
  );
};

export default EventsView;
