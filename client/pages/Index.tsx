import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Star,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  Hotel,
  Ship,
  FileText,
  UserCheck,
  Bus,
  Compass,
  Plane,
  Bike,
  Building,
  Footprints,
  CheckCircle,
} from "lucide-react";

export default function Index() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative h-full flex items-center justify-center container mx-auto px-4">
          <div className="text-center text-white max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
              {t("home.hero_title")}
            </h1>
            <p className="text-xl md:text-3xl mb-10 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              {t("home.hero_subtitle")}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="https://wa.me/201030146303" className="px-10 py-4 bg-secondary text-primary rounded-full font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95">
                {t("nav.book_now")}
              </a>
              <Link to="/tours" className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold text-xl transition-all duration-300 hover:bg-white hover:text-primary active:scale-95">
                {t("home.browse_offers")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">
              {t("common.logo_text")}
            </h2>
            <p className="text-2xl md:text-3xl text-secondary font-bold mb-8">
              {t("common.logo_text")} since 1983
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              {t("footer.company_description")}
            </p>
          </div>
        </div>
      </section>

      {/* Next Adventure - Destinations Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">
              {t("home.destinations.title")}
            </h2>
            <h3 className="text-2xl md:text-3xl text-secondary font-bold mb-8">
              {t("home.destinations.subtitle")}
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto italic">
              {t("home.destinations.desc")}
            </p>
            <div className="w-24 h-2 bg-secondary mx-auto mt-10 rounded-full"></div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: t("home.destinations.sharm"),
                image: "/images/destinations/Sharm.webp",
                icon: MapPin,
                link: "/tours",
              },
              {
                name: t("home.destinations.marsa_alam"),
                image: "/images/destinations/Marsa_Alam.webp",
                icon: MapPin,
                link: "/tours",
              },
              {
                name: t("home.destinations.luxor"),
                image: "/images/destinations/luxor.webp",
                icon: MapPin,
                link: "/tours",
              },
              {
                name: t("home.destinations.cairo"),
                image: "/images/destinations/Cairo.jpg",
                icon: MapPin,
                link: "/tours",
              },
              {
                name: t("home.destinations.hurghada"),
                image: "/images/destinations/Hurghada.webp",
                icon: MapPin,
                link: "/tours",
              },
              {
                name: t("nav.hajj_umrah"),
                image: "/images/hajj/h2.jpg",
                icon: MapPin,
                link: "/hajj-umrah",
              },
            ].map((dest, i) => (
              <Link
                key={i}
                to={dest.link}
                className="group relative h-[450px] rounded-[40px] overflow-hidden soft-shadow-lg hover:soft-shadow transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-all duration-500 shadow-xl">
                    <dest.icon size={32} className="text-primary" />
                  </div>
                  <h4 className="text-3xl font-black text-white mb-4">
                    {dest.name}
                  </h4>
                  <div
                    className="flex items-center gap-2 text-secondary font-bold text-lg group-hover:gap-4 transition-all"
                  >
                    {t("home.all_packages")}
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-muted-foreground">{t("home.services.subtitle")}</p>
            <div className="w-24 h-2 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Hotel, title: t("home.services.hotels") },
              { icon: Ship, title: t("home.services.cruises") },
              { icon: FileText, title: t("home.services.visas") },
              { icon: UserCheck, title: t("home.services.assist") },
              { icon: Bus, title: t("home.services.transport") },
              { icon: Compass, title: t("home.services.sightseeing") },
              { icon: Plane, title: t("home.services.flights") },
              { icon: Star, title: t("home.services.vip") },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-primary/5 p-8 rounded-2xl soft-shadow-md hover:soft-shadow transition-all duration-300 group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-500">
                  <service.icon size={40} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary leading-tight">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              {t("nav.activities")}
            </h2>
            <div className="w-24 h-2 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon:Hotel ,
                title: t("hajj_umrah_page.premium_umrah"),
                image: "/images/hajj/h4.png",
                link: "/hajj-umrah?type=umrah",
              },
              {
                icon: Building,
                title: t("hajj_umrah_page.economy_hajj"),
                image: "/images/hajj/h3.jpg",
                link: "/hajj-umrah?type=hajj",
              },
              {
                icon: Building,
                title: t("home.offers.tourist_trip"),
                image: "/images/Activities/Cairo.jpg",
                link: "/tours",
              },
            ].map((activity, index) => (
              <Link
                key={index}
                to={activity.link}
                className="group relative h-[450px] rounded-3xl overflow-hidden soft-shadow-lg hover:soft-shadow transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-4 transform -rotate-6 group-hover:rotate-0 transition-all">
                    <activity.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {activity.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
                {t("home.best_offers")}
              </h2>
              <div className="w-24 h-2 bg-secondary mx-auto md:mx-0 rounded-full"></div>
            </div>
            <Link to="/tours" className="btn-primary flex items-center gap-2">
              {t("home.browse_offers")}
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "/images/tours/Luxor_Aswan.jpg",
                title: t("home.packages.luxor_aswan"),
                days: 2,
                price: 80,
              },
              {
                id: 2,
                image: "/images/tours/pyramids.webp",
                title: t("home.packages.pyramids"),
                days: 1,
                price: 65,
              },
              {
                id: 3,
                image: "/images/tours/safari.avif",
                title: t("home.packages.safari"),
                days: 2,
                price: 90,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden soft-shadow-md hover:soft-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-secondary text-primary px-4 py-2 rounded-full font-bold text-sm shadow-xl">
                    {t("home.offers.from_price", { price: pkg.price })}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-secondary mb-4 font-bold text-sm uppercase tracking-widest">
                    <Calendar size={16} />
                    {t("home.offers.days", { count: pkg.days })}
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-6 group-hover:text-secondary transition-colors">
                    {pkg.title}
                  </h3>
                  <Link to={`/tours/${pkg.id}`} className="w-full py-4 bg-primary/5 text-primary rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
                    {t("nav.book_now")}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-left">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/images/tours/savoy.jpg"
                alt="Adventure"
                className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-[30px] shadow-2xl z-20 hidden md:block animate-bounce-slow">
                <p className="text-primary font-black text-4xl mb-1">42+</p>
                <p className="text-primary/70 font-bold uppercase text-xs tracking-widest">Years of Experience</p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <p className="text-secondary font-black uppercase tracking-widest mb-4">{t("home.adventure.title")}</p>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
                {t("home.adventure.subtitle")}
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                {t("home.adventure.desc")}
              </p>
              <div className="space-y-6">
                {Array.isArray(t("home.adventure.points", { returnObjects: true })) &&
                  (t("home.adventure.points", { returnObjects: true }) as string[]).map((point: string, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={24} className="text-secondary" />
                      </div>
                      <p className="text-lg font-bold text-primary">{point}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              {t("nav.gallery") || "Our Gallery"}
            </h2>
            <div className="w-24 h-2 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="group relative aspect-square overflow-hidden rounded-3xl soft-shadow-lg hover:soft-shadow transition-all duration-500"
              >
                <img 
                  src={`/images/gallery/${i}.webp`} 
                  alt={`Gallery image ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Compass size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">{t("home.testimonials.subtitle")}</p>
            <div className="w-24 h-2 bg-secondary mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {Array.isArray(t("home.testimonials.reviews", { returnObjects: true })) &&
              (t("home.testimonials.reviews", { returnObjects: true }) as any[]).map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="text-xl leading-relaxed mb-10 font-light">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={`/images/testimonials/user${idx + 1}.webp`} 
                      alt={review.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-secondary/20 shadow-lg"
                    />
                    <div>
                      <p className="font-black text-lg">
                        {review.name}
                      </p>
                      <p className="text-secondary font-bold text-xs uppercase tracking-widest">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                {t("home.cta.title")}
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/70 font-light">
                {t("home.cta.subtitle")}
              </p>
              <a
                href="https://wa.me/201030146303"
                className="inline-flex items-center gap-3 px-12 py-6 bg-secondary text-primary rounded-full font-black text-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("home.cta.book_now_whatsapp")}
                <ArrowRight size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
