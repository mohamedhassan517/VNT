import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Calendar,
  MapPin,
  Hotel,
  Plane,
  CheckCircle,
  FileText,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // All tours data including best offers
  const allToursData = [
    {
      id: "1",
      title: t("home.packages.luxor_aswan"),
      type: "tour",
      image: "/images/tours/Luxor & Aswan.jpg",
      days: 2,
      price: 80,
      location: t("common.locations.egypt"),
      description: t("home.packages.luxor_aswan_desc"),
      details: "This 2-day journey takes you through the heart of ancient Egypt. Visit the Valley of the Kings, Karnak Temple, and the beautiful Philae Temple in Aswan.",
      features: [
        t("tour_detail.accommodation_food"),
        t("tour_detail.comfortable_transport"),
        "Professional Egyptologist Guide",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Luxor West & East Bank",
        t("tour_detail.day_x", { count: 2 }) + ": Aswan Sightseeing",
      ],
      hotel: "5 Star Nile View",
      flight: "Domestic Flight Included",
      documents: ["Passport", "Entry Visa"],
    },
    {
      id: "2",
      title: t("home.packages.pyramids"),
      type: "tour",
      image: "/images/tours/pyramids.webp",
      days: 1,
      price: 65,
      location: t("common.locations.egypt"),
      description: t("home.packages.pyramids_desc"),
      details: "A comprehensive day tour of the Giza Plateau, the Sphinx, and the Egyptian Museum in Cairo.",
      features: [
        "Private AC Transport",
        "Lunch Included",
        "Entrance Fees",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Pyramids, Sphinx & Museum",
      ],
      hotel: "N/A (Day Trip)",
      flight: "N/A",
      documents: ["Passport"],
    },
    {
      id: "3",
      title: t("home.packages.safari"),
      type: "tour",
      image: "/images/tours/safari.avif",
      days: 2,
      price: 90,
      location: t("common.locations.egypt"),
      description: t("home.packages.safari_desc"),
      details: "Join us for an overnight desert adventure including quad biking, camel riding, and a traditional Bedouin dinner under the stars.",
      features: [
        "Quad Biking",
        "Bedouin Dinner",
        "Camping Gear",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Desert Exploration & Sunset",
        t("tour_detail.day_x", { count: 2 }) + ": Sunrise Camel Ride & Return",
      ],
      hotel: "Luxury Desert Camp",
      flight: "N/A",
      documents: ["ID/Passport"],
    },
    {
      id: "4",
      title: t("home.packages.cruise"),
      type: "hotel",
      image: "/images/tours/Luxury Nile Cruise.jpg",
      days: 7,
      price: 1550,
      location: t("common.locations.egypt"),
      description: t("home.packages.cruise_desc"),
      details: "A full week of luxury on the Nile. Enjoy fine dining, pool decks, and daily excursions to ancient sites along the river.",
      features: [
        "Full Board",
        "Daily Excursions",
        "Evening Entertainment",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Embarkation in Luxor",
        t("tour_detail.day_x", { count: 7 }) + ": Disembarkation in Aswan",
      ],
      hotel: "5-Star Cruise Ship",
      flight: "Airport Transfers Included",
      documents: ["Passport"],
    },
    {
      id: "5",
      title: t("home.packages.savoy"),
      type: "hotel",
      image: "/images/tours/savoy.jpg",
      days: 5,
      price: 610,
      location: t("common.locations.sharm"),
      description: t("home.packages.savoy_desc"),
      details: "Located in the heart of SOHO Square, the Savoy offers world-class amenities, private beaches, and exceptional service.",
      features: [
        "Private Beach",
        "Multiple Pools",
        "Spa & Wellness",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Arrival & Welcome",
        t("tour_detail.day_x", { count: 5 }) + ": Departure",
      ],
      hotel: "Savoy 5-Star Resort",
      flight: "N/A",
      documents: ["Passport"],
    },
    {
      id: "6",
      title: t("home.packages.beachfront"),
      type: "hotel",
      image: "/images/tours/Beachfront Resort Stay.jpg",
      days: 3,
      price: 450,
      location: t("common.locations.egypt"),
      description: t("home.packages.beachfront_desc"),
      details: "The perfect weekend getaway. Sun, sand, and sea at a top-rated Red Sea resort.",
      features: [
        "All Inclusive",
        "Water Sports",
        "Kids Club",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Check-in",
        t("tour_detail.day_x", { count: 3 }) + ": Check-out",
      ],
      hotel: "Premium 5-Star Resort",
      flight: "N/A",
      documents: ["ID/Passport"],
    },
    {
      id: "hajj-1",
      title: t("hajj_umrah_page.economy_hajj"),
      type: "hajj_umrah",
      image: "/images/hajj/h2.jpg",
      days: 12,
      price: 3500,
      location: t("common.locations.saudi_arabia"),
      description: t("hajj_umrah_page.hajj_desc"),
      details: "Affordable Hajj program with essential services and religious guidance.",
      features: [
        t("tour_detail.accommodation_food"),
        t("tour_detail.comfortable_transport"),
        "Religious Guide",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Departure",
        t("tour_detail.day_x", { count: 2 }) + ": Arrival in Mecca",
      ],
      hotel: "3-Star Hotel",
      flight: "Economy",
      documents: ["Passport", "Vaccination Certificate"],
    },
    {
      id: "hajj-2",
      title: t("hajj_umrah_page.vip_hajj"),
      type: "hajj_umrah",
      image: "/images/hajj/h4.jpg",
      days: 14,
      price: 7500,
      location: t("common.locations.saudi_arabia"),
      description: t("hajj_umrah_page.hajj_desc"),
      details: "Luxury Hajj experience with 5-star accommodations and VIP transport.",
      features: [
        t("tour_detail.accommodation_food") + " (Full Board)",
        t("tour_detail.comfortable_transport") + " (VIP)",
        "VIP Religious Guide",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": VIP Welcome & Transfer",
      ],
      hotel: "5-Star Hotel (Mecca & Medina)",
      flight: "Business Class",
      documents: ["Passport", "Vaccination Certificate"],
    },
    {
      id: "umrah-1",
      title: t("hajj_umrah_page.economy_umrah"),
      type: "hajj_umrah",
      image: "/images/hajj/h3.jpg",
      days: 10,
      price: 1200,
      location: t("common.locations.saudi_arabia"),
      description: t("hajj_umrah_page.umrah_desc"),
      details: "Standard Umrah package with comfortable stay and full support.",
      features: [
        t("tour_detail.accommodation_food"),
        t("tour_detail.comfortable_transport"),
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": Arrival & Check-in",
      ],
      hotel: "3-Star Hotel",
      flight: "Standard Economy",
      documents: ["Passport"],
    },
    {
      id: "umrah-2",
      title: t("hajj_umrah_page.premium_umrah"),
      type: "hajj_umrah",
      image: "/images/hajj/h4.png",
      days: 15,
      price: 2500,
      location: t("common.locations.saudi_arabia"),
      description: t("hajj_umrah_page.umrah_desc"),
      details: "Premium Umrah program with 5-star hotels and religious sightseeing.",
      features: [
        t("tour_detail.accommodation_food"),
        t("tour_detail.comfortable_transport"),
        "Religious Sightseeing",
      ],
      schedule: [
        t("tour_detail.day_x", { count: 1 }) + ": VIP Arrival",
      ],
      hotel: "5-Star Hotel (Clock Tower)",
      flight: "Premium Economy",
      documents: ["Passport"],
    },
  ];

  // Helper to find tour by ID, in a real app this might be a fetch
  const tour = allToursData.find((t) => t.id === id) || {
    id: id,
    title: t("home.offers.premium_umrah"),
    type: "umrah",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
    days: 7,
    price: 1500,
    location: t("footer.address").split(",")[0],
    description: t("footer.company_description"),
    details: t("footer.company_description"),
    features: [t("tour_detail.accommodation_food")],
    schedule: [t("tour_detail.day_x", { count: 1 })],
    hotel: "5 Star",
    flight: "Standard",
    documents: ["Passport"]
  };

  if (!tour) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {t("tour_detail.not_found")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("tour_detail.not_found_desc")}
          </p>
          <Link to="/tours" className="btn-primary">
            {t("tour_detail.back_to_tours")}
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header with Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8 text-white w-full">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-secondary mb-2 uppercase tracking-widest font-bold">
                  {tour.type === "tour"
                    ? t("nav.activities")
                    : tour.type === "hotel"
                    ? t("nav.hotels")
                    : t("nav.hajj_umrah")}
                </p>
                <h1 className="text-5xl font-bold mb-4">{tour.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-secondary/10 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar size={20} className="text-secondary" />
                  <span className="text-2xl font-bold text-primary">
                    {tour.days}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{t("tour_detail.days")}</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground">{tour.location}</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-secondary mb-2">
                  {tour.price}
                </p>
                <p className="text-sm text-muted-foreground">{t("tour_detail.sar")}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t("tour_detail.about")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {tour.details}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <CheckCircle size={24} className="text-secondary" />
                {t("tour_detail.features")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tour.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0"></div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin size={24} className="text-secondary" />
                {t("tour_detail.schedule")}
              </h3>
              <div className="space-y-3 bg-white border border-border rounded-lg p-6">
                {tour.schedule.map((day, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{day}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel & Flight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Hotel size={20} className="text-secondary" />
                  {t("tour_detail.hotel")}
                </h4>
                <p className="text-muted-foreground">{tour.hotel}</p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Plane size={20} className="text-secondary" />
                  {t("tour_detail.flight")}
                </h4>
                <p className="text-muted-foreground">{tour.flight}</p>
              </div>
            </div>

            {/* Documents */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <FileText size={24} className="text-secondary" />
                {t("tour_detail.documents")}
              </h3>
              <div className="space-y-2 bg-white border border-border rounded-lg p-6">
                {tour.documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <p className="text-muted-foreground">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-gradient-to-b from-primary to-primary/80 text-white rounded-2xl p-8 sticky top-24">
              <div className="mb-6">
                <p className="text-white/70 text-sm mb-2">{t("tour_detail.total_price")}</p>
                <div className="text-4xl font-bold mb-2">
                  {t("home.offers.from_price", { price: tour.price })}
                </div>
                <p className="text-white/70 text-sm">{t("tour_detail.per_person")}</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    {t("home.offers.days", { count: tour.days })}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    {t("tour_detail.accommodation_food")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    {t("tour_detail.comfortable_transport")}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    {t("tour_detail.specialized_escort")}
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/201030146303?text=${encodeURIComponent(t("tour_detail.book_now_whatsapp") + ": " + tour.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-secondary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 mb-3"
              >
                {t("tour_detail.book_now_whatsapp")}
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+201030146303"
                className="w-full border-2 border-white text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                {t("tour_detail.call_us")}
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
