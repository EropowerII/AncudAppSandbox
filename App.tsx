import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language } from './types';
import { TRANSLATIONS } from './constants';
import { Calendar, Store, Map as MapIcon, Bus, Info, Globe, ChevronDown } from 'lucide-react';
import EventsView from './components/EventsView';
import BusinessView from './components/BusinessView';
import MapView from './components/MapView';
import BusView from './components/BusView';
import InfoView from './components/InfoView';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AppView>(AppView.MAP);
  const [language, setLanguage] = useState<Language>(Language.ESP);
  const [focusedLocationId, setFocusedLocationId] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fake loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleViewOnMap = (locationId: string) => {
    setFocusedLocationId(locationId);
    setActiveTab(AppView.MAP);
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-blue-600 flex flex-col items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/800/1200?grayscale')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <h1 className="text-4xl font-bold z-10 animate-bounce text-center px-4 drop-shadow-lg">
          {TRANSLATIONS.welcome[language]}
        </h1>
        <div className="mt-8 w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin z-10"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden relative">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 flex justify-between items-center z-20 shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <span className="font-bold text-slate-800 text-lg">Ancud Discovery</span>
        </div>
        
        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-800 transition-colors border border-slate-200"
          >
            <Globe size={14} />
            <span>{language}</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isLangOpen && (
            <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {Object.values(Language).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageSelect(lang)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${language === lang ? 'text-blue-600 font-bold bg-blue-50' : 'text-slate-600'}`}
                >
                  <span>{lang}</span>
                  {language === lang && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow overflow-hidden relative">
        <div className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${activeTab === AppView.EVENTS ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
          <EventsView language={language} onViewOnMap={handleViewOnMap} />
        </div>
        
        <div className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${activeTab === AppView.BUSINESS ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
          <BusinessView language={language} onViewOnMap={handleViewOnMap} />
        </div>

        <div className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${activeTab === AppView.MAP ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
          <MapView 
            language={language} 
            focusedLocationId={focusedLocationId} 
            onFocusComplete={() => setFocusedLocationId(null)}
            isActive={activeTab === AppView.MAP}
          />
        </div>

        <div className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${activeTab === AppView.BUS ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
          <BusView language={language} />
        </div>

        <div className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${activeTab === AppView.INFO ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
          <InfoView language={language} />
        </div>
      </main>

      {/* Bottom Tray Navigation */}
      <nav className="bg-white border-t border-slate-200 px-2 py-2 safe-area-bottom shrink-0 z-50">
        <div className="flex justify-between items-end">
          <TabButton 
            active={activeTab === AppView.EVENTS} 
            onClick={() => setActiveTab(AppView.EVENTS)} 
            icon={<Calendar size={20} />} 
            label={TRANSLATIONS.tabs.events[language]} 
          />
          <TabButton 
            active={activeTab === AppView.BUSINESS} 
            onClick={() => setActiveTab(AppView.BUSINESS)} 
            icon={<Store size={20} />} 
            label={TRANSLATIONS.tabs.business[language]} 
          />
          
          {/* Center Map Button */}
          <div className="relative -top-5">
            <button 
              onClick={() => setActiveTab(AppView.MAP)}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 ${
                activeTab === AppView.MAP ? 'bg-blue-600 scale-110 ring-4 ring-blue-100' : 'bg-slate-700 hover:bg-slate-800'
              }`}
            >
              <MapIcon size={28} color="white" />
            </button>
            <span className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold ${activeTab === AppView.MAP ? 'text-blue-600' : 'text-slate-500'}`}>
              {TRANSLATIONS.tabs.map[language]}
            </span>
          </div>

          <TabButton 
            active={activeTab === AppView.BUS} 
            onClick={() => setActiveTab(AppView.BUS)} 
            icon={<Bus size={20} />} 
            label={TRANSLATIONS.tabs.bus[language]} 
          />
          <TabButton 
            active={activeTab === AppView.INFO} 
            onClick={() => setActiveTab(AppView.INFO)} 
            icon={<Info size={20} />} 
            label={TRANSLATIONS.tabs.info[language]} 
          />
        </div>
      </nav>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-16 py-1 transition-colors duration-200 ${active ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
  >
    <div className={`mb-1 ${active ? 'scale-110' : 'scale-100'} transition-transform`}>
      {icon}
    </div>
    <span className="text-[10px] font-medium leading-none truncate w-full text-center">{label}</span>
  </button>
);