import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English for Sandesh's portfolio

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ne' : 'en'));
  };
  
  useEffect(() => {
    // This context is not used in Sandesh's portfolio, but kept for potential future use
    // or if parts of the old structure are re-used.
    // For Sandesh's portfolio, language is primarily English.
    document.documentElement.lang = language;
  }, [language]);


  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // This can happen if a component tries to use it outside the provider.
    // For Sandesh's portfolio, we can default to 'en' if not provided.
    // console.warn("useLanguage must be used within a LanguageProvider, defaulting to 'en'");
    return { language: 'en', toggleLanguage: () => console.warn("LanguageProvider not found, toggleLanguage does nothing.") };
  }
  return context;
};