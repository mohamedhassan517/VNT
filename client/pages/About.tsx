import { Layout } from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { Award, Clock, Users, Shield, CheckCircle } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/images/hero.webp')",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6">{t("nav.about")}</h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light">
            {t("common.logo_text")} - Excellence in Travel since 1983.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            <img
              src="/images/gallery/1.webp"
              alt="Our Team"
              className="rounded-[40px] shadow-2xl relative z-10 w-full h-[600px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              Crafting Unforgettable Journeys For Over 4 Decades
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              {t("footer.company_description")}
            </p>
            <div className="space-y-6">
              {[
                "Personalized Travel Itineraries",
                "Expert Local Guides",
                "24/7 Global Support",
                "Best Price Guarantee",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-secondary" />
                  </div>
                  <p className="text-lg font-bold text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-32">
          {[
            { icon: Users, label: "Happy Travelers", value: "50k+" },
            { icon: Award, label: "Years Experience", value: "42+" },
            { icon: Clock, label: "Support Hours", value: "24/7" },
            { icon: Shield, label: "Safe Tours", value: "10k+" },
          ].map((stat, i) => (
            <div key={i} className="bg-primary/5 p-10 rounded-[40px] text-center group hover:bg-primary transition-all duration-500">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-all">
                <stat.icon size={32} className="text-secondary group-hover:text-primary" />
              </div>
              <p className="text-4xl font-black text-primary mb-2 group-hover:text-white transition-all">{stat.value}</p>
              <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest group-hover:text-white/60 transition-all">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-secondary rounded-[50px] p-12 md:p-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8">Our Vision</h2>
            <p className="text-xl md:text-2xl text-primary/70 font-light leading-relaxed">
              To be the world's leading travel companion, connecting people with the beauty of nature and the richness of diverse cultures through sustainable and meaningful experiences.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
