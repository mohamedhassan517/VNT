import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Music2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/VNTlogo.png" alt="VNT Logo" className="h-10 w-auto object-contain" />
              <h3 className="text-xl font-bold">{t("common.logo_text")}</h3>
            </div>
            <p className="text-white/70 text-sm mb-6">
              {t("footer.company_description")}
            </p>
            <div className="space-y-4">
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
                {t("footer.accepted_payment_methods")}
              </p>
              <div className="flex gap-4">
                {/* Visa Logo */}
                <div className="bg-white px-3 py-1.5 rounded-lg flex items-center h-10 w-16 justify-center shadow-lg hover:scale-110 transition-transform cursor-help group" title="Visa">
                  <img src="/images/visa.png" alt="Visa" className="max-h-full max-w-full object-contain" />
                </div>
                {/* Mastercard Logo */}
                <div className=" rounded-lg flex items-center h-10 w-16 justify-center shadow-lg hover:scale-110 transition-transform cursor-help group" title="Mastercard">
                  <img src="/images/MasterCard.png" alt="Mastercard" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t("footer.quick_links")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-secondary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-white/70 hover:text-secondary transition-colors">
                  {t("nav.activities")}
                </Link>
              </li>
              <li>
                <Link to="/tours?type=hotel" className="text-white/70 hover:text-secondary transition-colors">
                  {t("nav.hotels")}
                </Link>
              </li>
              <li>
                <Link to="/hajj-umrah" className="text-white/70 hover:text-secondary transition-colors">
                  {t("nav.hajj_umrah")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-secondary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-secondary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t("footer.contact_info")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <a
                  href="tel:+201030146303"
                  className="hover:text-secondary transition-colors"
                >
                  +20 103 014 6303
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@vnt.travel"
                  className="hover:text-secondary transition-colors break-all"
                >
                  info@vnt.travel
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                <span>{t("footer.address")}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t("footer.follow_us")}</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/virginnaturetours"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/virginnaturetours"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@virginnaturetours"
                className="w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music2 size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>{t("footer.rights_reserved")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">{t("footer.privacy_policy")}</a>
            <a href="#" className="hover:text-secondary transition-colors">{t("footer.terms_conditions")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
