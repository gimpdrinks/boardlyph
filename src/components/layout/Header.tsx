import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X, User, LogOut, Settings, Bell } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { Button } from '../ui/Button';

export function Header() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Demo', href: '/demo' },
    { name: 'Boards', href: '/boards' },
    { name: 'Community', href: '/community' },
  ];

  const userNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Notifications', href: '/notifications', icon: Bell },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="p-2 bg-gradient-to-br from-primary-500 via-coral-500 to-violet-500 rounded-2xl shadow-lg"
            >
              <Brain className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <span className="text-xl font-display font-bold text-neutral-900">Boardly</span>
              <span className="text-lg font-display font-medium bg-gradient-to-r from-primary-600 to-coral-500 bg-clip-text text-transparent">PH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Menu / Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-neutral-700">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                </button>

                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50"
                  >
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                    <hr className="my-1 border-neutral-200" />
                    <button
                      onClick={() => {
                        signOut();
                        setUserMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/auth/signin">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth/signup">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-neutral-600" />
              ) : (
                <Menu className="h-6 w-6 text-neutral-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-200 py-4"
          >
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {!user && (
                <div className="pt-4 space-y-2">
                  <Link to="/auth/signin" className="block">
                    <Button variant="ghost" size="sm" className="w-full justify-center">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth/signup" className="block">
                    <Button variant="primary" size="sm" className="w-full justify-center">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function clsx(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}