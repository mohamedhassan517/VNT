import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">✈</span>
              </div>
              <h3 className="text-xl font-bold">وجهتك</h3>
            </div>
            <p className="text-white/70 text-sm">
              شركة متخصصة في تنظيم رحلات الحج والعمرة والرحلات السياحية بأفضل الأسعار والخدمات
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-secondary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-white/70 hover:text-secondary transition-colors">
                  الرحلات
                </Link>
              </li>
              <li>
                <Link to="/hajj-umrah" className="text-white/70 hover:text-secondary transition-colors">
                  الحج والعمرة
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-secondary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">معلومات التواصل</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                +966 50 123 4567
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                info@wajeha.com
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">تابعنا</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-white/60 text-sm">
            <p>&copy; 2024 وجهتك - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
