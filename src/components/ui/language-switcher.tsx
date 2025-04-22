
import { useState } from "react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ChevronDown } from "lucide-react";

// Supported languages for the MVP
const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

export default function LanguageSwitcher() {
  // Get initial language from localStorage or default to browser language
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = window.localStorage.getItem("language");
      if (storedLanguage) return storedLanguage;
      
      // Try to match browser language with available languages
      const browserLang = navigator.language.split('-')[0];
      const matchedLang = languages.find(lang => lang.code === browserLang);
      if (matchedLang) return matchedLang.code;
    }
    return "en"; // Default to English
  });

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    localStorage.setItem("language", langCode);
    // Here we would trigger the actual language change using i18n library
    // For the MVP, we'll just store the preference
  };

  // Find the current language object
  const current = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
          <span>{current.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={language.code === currentLanguage ? "bg-secondary" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
