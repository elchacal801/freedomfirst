
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./button";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for dark mode preference in localStorage or system preference
    if (typeof window !== "undefined") {
      const storedPreference = window.localStorage.getItem("darkMode");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return storedPreference ? storedPreference === "true" : prefersDark;
    }
    return false;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    // Store preference in localStorage
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <nav className="border-b border-border bg-background">
      <div className="freedom-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo and site title */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="font-bold text-xl md:text-2xl">FreedomFirst</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/rights-hub" className="font-medium hover:text-accent transition-colors">
              Rights Hub
            </Link>
            <Link to="/playbooks" className="font-medium hover:text-accent transition-colors">
              Playbooks
            </Link>
            <Link to="/find-lawyers" className="font-medium hover:text-accent transition-colors">
              Find Lawyers
            </Link>
            <Link to="/resources" className="font-medium hover:text-accent transition-colors">
              Resources
            </Link>
            <div className="flex items-center space-x-4 pl-4 border-l border-border">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="mr-2"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 space-y-4 md:hidden">
            <Link
              to="/rights-hub"
              className="block py-2 font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rights Hub
            </Link>
            <Link
              to="/playbooks"
              className="block py-2 font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Playbooks
            </Link>
            <Link
              to="/find-lawyers"
              className="block py-2 font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Lawyers
            </Link>
            <Link
              to="/resources"
              className="block py-2 font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
