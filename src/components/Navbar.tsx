'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { 
  Menu, 
  X, 
  Brain, 
  Sun, 
  Moon, 
  Globe, 
  User, 
  ExternalLink,
  ChevronDown,
  Settings,
  LogOut
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  
  const userMenuRef = useRef<HTMLDivElement>(null)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.quizFrontend'), href: '/quiz/frontend' },
    { name: t('nav.quizBackend'), href: '/quiz/backend' },
    { name: t('nav.quizDatabase'), href: '/quiz/database' },
    { name: t('nav.quizDevops'), href: '/quiz/devops' },
    { name: t('nav.theory'), href: '/theory' },
    { name: t('nav.examples'), href: '/examples' },
  ]

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <nav className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Taietor Fullstack Trainer
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation and controls */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Portfolio Link */}
            <Link
              href="https://taietor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              <span>Portfolio</span>
              <ExternalLink className="h-4 w-4" />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-1 p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label={t('nav.changeLanguage')}
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button
                    onClick={() => {
                      setLanguage('it')
                      setShowLanguageMenu(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                      language === 'it' 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    🇮🇹 Italiano
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setShowLanguageMenu(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                      language === 'en' 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-1 p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label={t('nav.userMenu')}
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Guest User</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">guest@example.com</p>
                  </div>
                  <button className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <Settings className="h-4 w-4 mr-3" />
                    {t('nav.settings')}
                  </button>
                  <button className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <LogOut className="h-4 w-4 mr-3" />
                    {t('nav.logout')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg"
              aria-label={theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Portfolio Link */}
              <Link
                href="https://taietor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Portfolio</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('nav.language')}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setLanguage('it')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
                      language === 'it' 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    🇮🇹 IT
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
                      language === 'en' 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
              </div>
              
              {/* Mobile User Menu */}
              <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Guest User</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">guest@example.com</p>
                  </div>
                </div>
                <button className="flex items-center w-full text-left px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200">
                  <Settings className="h-4 w-4 mr-3" />
                  {t('nav.settings')}
                </button>
                <button className="flex items-center w-full text-left px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200">
                  <LogOut className="h-4 w-4 mr-3" />
                  {t('nav.logout')}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}