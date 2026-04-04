import React from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NavbarProps = {
  currentPage: string
  onNavigate: (page: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'features', label: 'Features' },
    { id: 'techspecs', label: 'Tech Specs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'freetrial', label: 'Free Trial' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'locate', label: 'Locate Us' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 tron-glass border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
  onClick={() => onNavigate('home')}
  className="flex items-center"
>
  <img
    src="/jedlik_logo_transparent.png"
    alt="Jedlik Motors"
    className="h-10 w-auto object-contain"
  />
</button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                    currentPage === item.id
                      ? 'text-primary tron-glow-text'
                      : 'text-foreground hover:text-primary hover:tron-glow-text'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="tron-glass hover:tron-glow border border-primary/30"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 tron-glass mt-2 rounded-lg border border-primary/30">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-primary tron-glow-text bg-primary/10'
                      : 'text-foreground hover:text-primary hover:tron-glow-text hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
