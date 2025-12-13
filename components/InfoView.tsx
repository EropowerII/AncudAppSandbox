import React from 'react';
import { EMERGENCY_CONTACTS, TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { Phone, Building2 } from 'lucide-react';

interface InfoViewProps {
  language: Language;
}

const InfoView: React.FC<InfoViewProps> = ({ language }) => {
  
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4 no-scrollbar">
      <div className="pb-2">
        <h2 className="text-2xl font-bold text-slate-800 text-red-600">Emergency & Info</h2>
        <p className="text-sm text-slate-500">Important contacts in Ancud</p>
      </div>

      <div className="space-y-4">
        {EMERGENCY_CONTACTS.map((contact, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3 text-slate-600">
              <Building2 size={24} />
            </div>
            
            <h3 className="font-bold text-lg text-slate-900 mb-1">{contact.institution}</h3>
            <p className="text-sm text-slate-500 mb-4">{contact.address}</p>
            
            <div className="w-full space-y-2">
              <button 
                onClick={() => handleCall(contact.phone1)}
                className="w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold py-3 px-4 rounded-lg shadow transition-all flex items-center justify-center space-x-2"
              >
                <Phone size={18} fill="currentColor" />
                <span>{TRANSLATIONS.callNow[language]}</span>
              </button>
              
              {contact.phone2 && (
                 <button 
                  onClick={() => handleCall(contact.phone2!)}
                  className="w-full bg-white border border-green-500 text-green-600 font-bold py-2 px-4 rounded-lg hover:bg-green-50 transition-colors text-sm"
                >
                  Secondary: {contact.phone2}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="h-20" />
    </div>
  );
};

export default InfoView;
