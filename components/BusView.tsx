import React from 'react';
import { BUS_SCHEDULE, TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { Clock, MapPin, BusFront } from 'lucide-react';

interface BusViewProps {
  language: Language;
}

const BusView: React.FC<BusViewProps> = ({ language }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4 no-scrollbar">
      <div className="pb-2">
        <h2 className="text-2xl font-bold text-slate-800">{TRANSLATIONS.tabs.bus[language]}</h2>
        <div className="bg-blue-600 text-white p-4 rounded-xl mt-3 shadow-md flex items-start space-x-3">
           <div className="bg-white/20 p-2 rounded-lg">
             <MapPin className="shrink-0" size={20} />
           </div>
           <div>
             <p className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">{TRANSLATIONS.originTerminal[language]}</p>
             <p className="text-sm font-bold leading-tight">{TRANSLATIONS.busOrigin[language].split(': ')[1]}</p>
           </div>
        </div>
      </div>

      <div className="space-y-3">
        {BUS_SCHEDULE.map((route, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
            {/* Decorative Side Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
            
            <div className="p-4 pl-6">
              {/* Route Header */}
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase">{TRANSLATIONS.route[language]} {idx + 1}</span>
                <div className="flex-grow border-t border-slate-100 dashed"></div>
                <BusFront size={16} className="text-blue-500" />
              </div>

              {/* Destination */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <div className="flex-1">
                   <h3 className="text-lg font-bold text-slate-800 leading-tight">{route.destination}</h3>
                </div>
              </div>

              {/* Schedule Block */}
              <div className="bg-slate-50 rounded-lg p-3 flex items-start space-x-3">
                <Clock size={16} className="text-slate-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {route.schedule[language]}
                </p>
              </div>
            </div>
            
            {/* Ticket Cutout Effect (Visual only) */}
            <div className="absolute -left-1.5 top-1/2 w-3 h-3 bg-slate-50 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-slate-50 rounded-full transform -translate-y-1/2"></div>
          </div>
        ))}
      </div>
      <div className="h-20" />
    </div>
  );
};

export default BusView;