'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'it' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  it: {
    // Navbar
    'nav.home': 'Home',
    'nav.quiz': 'Quiz',
    'nav.quizFrontend': 'Quiz Frontend',
    'nav.quizBackend': 'Quiz Backend',
    'nav.quizDatabase': 'Quiz Database',
    'nav.quizDevops': 'Quiz DevOps',
    'nav.theory': 'Teoria',
    'nav.examples': 'Esempi',
    'nav.portfolio': 'Portafoglio',
    'nav.account': 'Account',
    'nav.darkMode': 'Modalità Scura',
    'nav.lightMode': 'Modalità Chiara',
    'nav.changeLanguage': 'Cambia Lingua',
    'nav.language': 'Lingua',
    'nav.userMenu': 'Menu Utente',
    'nav.settings': 'Impostazioni',
    'nav.logout': 'Esci',
    'nav.openMenu': 'Apri Menu',
    'nav.closeMenu': 'Chiudi Menu',
    
    // Home page
    'home.title': 'Allena le tue competenze',
    'home.title.highlight': 'Fullstack',
    'home.subtitle': 'Preparati per i colloqui di lavoro con quiz interattivi, esempi pratici e spiegazioni dettagliate su tutte le tecnologie moderne del web development.',
    'home.cta.quiz': 'Inizia Quiz',
    'home.cta.theory': 'Studia Teoria',
    
    // Quiz
    'quiz.title': 'Scegli la tua',
    'quiz.title.highlight': 'Categoria',
    'quiz.subtitle': 'Testa le tue competenze in diverse aree del fullstack development. Ogni categoria contiene domande di difficoltà crescente con spiegazioni dettagliate.',
    'quiz.stats.available': 'Quiz Disponibili',
    'quiz.stats.examples': 'Esempi di Codice',
    'quiz.stats.technologies': 'Tecnologie Coperte',
    'quiz.stats.levels': 'Livelli di Difficoltà',
    
    // Categories
    'category.frontend': 'Frontend Development',
    'category.backend': 'Backend Development', 
    'category.database': 'Database & Storage',
    'category.devops': 'DevOps & Cloud',
    
    // Common
    'common.loading': 'Caricamento...',
    'common.error': 'Errore',
    'common.back': 'Indietro',
    'common.next': 'Avanti',
    'common.submit': 'Invia',
    'common.cancel': 'Annulla',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.quiz': 'Quiz',
    'nav.quizFrontend': 'Frontend Quiz',
    'nav.quizBackend': 'Backend Quiz',
    'nav.quizDatabase': 'Database Quiz',
    'nav.quizDevops': 'DevOps Quiz',
    'nav.theory': 'Theory',
    'nav.examples': 'Examples',
    'nav.portfolio': 'Portfolio',
    'nav.account': 'Account',
    'nav.darkMode': 'Dark Mode',
    'nav.lightMode': 'Light Mode',
    'nav.changeLanguage': 'Change Language',
    'nav.language': 'Language',
    'nav.userMenu': 'User Menu',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',
    'nav.openMenu': 'Open Menu',
    'nav.closeMenu': 'Close Menu',
    
    // Home page
    'home.title': 'Train your',
    'home.title.highlight': 'Fullstack',
    'home.subtitle': 'Prepare for job interviews with interactive quizzes, practical examples, and detailed explanations on all modern web development technologies.',
    'home.cta.quiz': 'Start Quiz',
    'home.cta.theory': 'Study Theory',
    
    // Quiz
    'quiz.title': 'Choose your',
    'quiz.title.highlight': 'Category',
    'quiz.subtitle': 'Test your skills in different areas of fullstack development. Each category contains questions of increasing difficulty with detailed explanations.',
    'quiz.stats.available': 'Available Quizzes',
    'quiz.stats.examples': 'Code Examples',
    'quiz.stats.technologies': 'Technologies Covered',
    'quiz.stats.levels': 'Difficulty Levels',
    
    // Categories
    'category.frontend': 'Frontend Development',
    'category.backend': 'Backend Development',
    'category.database': 'Database & Storage', 
    'category.devops': 'DevOps & Cloud',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('it')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['it']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}