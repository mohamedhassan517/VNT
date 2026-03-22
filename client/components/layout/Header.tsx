import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇪🇬" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/VNTlogo.png" alt="VNT Logo" className="h-12 w-auto object-contain" />
            <span className="text-xl font-bold text-white hidden md:inline">
              {t("common.logo_text")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/tours"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              {t("nav.activities")}
            </Link>
            <Link
              to="/tours?type=hotel"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              {t("nav.hotels")}
            </Link>
            <Link
              to="/hajj-umrah"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              {t("nav.hajj_umrah")}
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              {t("nav.contact")}
            </Link>
          </nav>

          {/* CTA & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-secondary">
                  <Globe className="h-4 w-4 mr-2" />
                  {t("common.language")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="https://wa.me/201030146303"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("nav.book_now")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-secondary">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/tours"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.activities")}
            </Link>
            <Link
              to="/tours?type=hotel"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.hotels")}
            </Link>
            <Link
              to="/hajj-umrah"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.hajj_umrah")}
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
