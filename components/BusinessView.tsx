import React from 'react';
import { BUSINESSES, TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { MapPin, ShoppingBag } from 'lucide-react';

interface BusinessViewProps {
  language: Language;
  onViewOnMap: (id: string) => void;
}

const BusinessView: React.FC<BusinessViewProps> = ({ language, onViewOnMap }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-100 p-4 space-y-4 no-scrollbar">
       <div className="pb-2">
        <h2 className="text-2xl font-bold text-slate-800">{TRANSLATIONS.tabs.business[language]}</h2>
        <p className="text-sm text-slate-500">{TRANSLATIONS.supportLocals[language]}</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {BUSINESSES.map((biz, index) => (
          <div key={biz.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="h-32 bg-slate-200 relative">
               <img 
                src={biz.imageUrl} 
                alt={biz.title[language]} 
                className="w-full h-full object-cover"
               />
               <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                 {TRANSLATIONS.localLabel[language]}
               </div>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-xl text-slate-800 mb-1">{biz.title[language]}</h3>
              <p className="text-xs font-bold text-orange-600 uppercase mb-2">{biz.subtitle[language]}</p>
              <p className="text-sm text-slate-600 mb-4 flex-grow">{biz.description[language]}</p>
              
              <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                <div className="flex items-center space-x-2 text-slate-400">
                    <ShoppingBag size={14} />
                    <span className="text-xs">{TRANSLATIONS.artisanProduct[language]}</span>
                </div>
                <button 
                  onClick={() => onViewOnMap(biz.locationId)}
                  className="flex items-center space-x-1 text-sm font-medium text-orange-600 hover:bg-orange-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <MapPin size={16} />
                  <span>{TRANSLATIONS.viewOnMap[language]}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-20" />
    </div>
  );
};

export default BusinessView;