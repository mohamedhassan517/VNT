import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">✈</span>
            </div>
            <span className="text-xl font-bold text-white hidden md:inline">
              وجهتك
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              الرئيسية
            </Link>
            <Link
              to="/tours"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              الرحلات
            </Link>
            <Link
              to="/hajj-umrah"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              الحج والعمرة
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              تواصل معنا
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              احجز الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              to="/tours"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرحلات
            </Link>
            <Link
              to="/hajj-umrah"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الحج والعمرة
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </Link>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              className="block btn-primary text-center mt-4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              احجز الآن
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
