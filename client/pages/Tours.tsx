import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, MapPin, Filter, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Tours() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");

  const [selectedType, setSelectedType] = useState<string | null>(typeParam);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<string | null>(null);

  useEffect(() => {
    setSelectedType(typeParam);
  }, [typeParam]);

  const allTours = [
    {
      id: 1,
      title: t("home.packages.luxor_aswan"),
      type: "tour",
      image: "/images/tours/Luxor_Aswan.jpg",
      days: 2,
      price: 80,
      location: t("common.locations.egypt"),
      description: t("home.packages.luxor_aswan_desc"),
    },
    {
      id: 2,
      title: t("home.packages.pyramids"),
      type: "tour",
      image: "/images/tours/pyramids.webp",
      days: 1,
      price: 65,
      location: t("common.locations.egypt"),
      description: t("home.packages.pyramids_desc"),
    },
    {
      id: 3,
      title: t("home.packages.safari"),
      type: "tour",
      image: "/images/tours/safari.avif",
      days: 2,
      price: 90,
      location: t("common.locations.egypt"),
      description: t("home.packages.safari_desc"),
    },
    {
      id: 4,
      title: t("home.packages.cruise"),
      type: "hotel",
      image: "/images/tours/Luxury.jpg",
      days: 7,
      price: 1550,
      location: t("common.locations.egypt"),
      description: t("home.packages.cruise_desc"),
    },
    {
      id: 5,
      title: t("home.packages.savoy"),
      type: "hotel",
      image: "/images/tours/savoy.jpg",
      days: 5,
      price: 610,
      location: t("common.locations.sharm"),
      description: t("home.packages.savoy_desc"),
    },
    {
      id: 6,
      title: t("home.packages.beachfront"),
      type: "hotel",
      image: "/images/tours/Beachfront.jpg",
      days: 3,
      price: 450,
      location: t("common.locations.egypt"),
      description: t("home.packages.beachfront_desc"),
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
    },
  ];

  const filteredTours = allTours.filter((tour) => {
    if (selectedType && tour.type !== selectedType) return false;
    if (
      selectedPrice &&
      !(
        (selectedPrice === "0-100" && tour.price < 100) ||
        (selectedPrice === "100-500" &&
          tour.price >= 100 &&
          tour.price < 500) ||
        (selectedPrice === "500+" && tour.price >= 500)
      )
    ) {
      return false;
    }
    if (
      selectedDays &&
      !(
        (selectedDays === "1-7" && tour.days <= 7) ||
        (selectedDays === "8-14" && tour.days > 7 && tour.days <= 14) ||
        (selectedDays === "15+" && tour.days > 14)
      )
    ) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{t("tours.title")}</h1>
          <p className="text-white/80 mt-2">{t("tours.subtitle")}</p>
        </div>
      </div>

      {/* Filters and Tours */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl soft-shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-secondary" />
                <h3 className="text-lg font-bold text-primary">{t("tours.filter")}</h3>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-3">
                  {t("tours.type")}
                </label>
                <div className="space-y-2">
                  {[
                    { value: null, label: t("tours.types.all") },
                    { value: "tour", label: t("nav.activities") },
                    { value: "hotel", label: t("nav.hotels") },
                    { value: "hajj_umrah", label: t("nav.hajj_umrah") },
                  ].map((option) => (
                    <label key={option.value || "all"} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value={option.value || ""}
                        checked={selectedType === option.value}
                        onChange={() => setSelectedType(option.value)}
                        className="w-4 h-4 accent-secondary"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <label className="block text-sm font-semibold text-primary mb-3">
                  {t("tours.price_range")}
                </label>
                <div className="space-y-2">
                  {[
                    { value: null, label: t("tours.prices.all") },
                    { value: "0-100", label: t("tours.prices.less_than_2000") },
                    { value: "100-500", label: t("tours.prices.2000_5000") },
                    { value: "500+", label: t("tours.prices.more_than_5000") },
                  ].map((option) => (
                    <label key={option.value || "all"} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={option.value || ""}
                        checked={selectedPrice === option.value}
                        onChange={() => setSelectedPrice(option.value)}
                        className="w-4 h-4 accent-secondary"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Days Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-3">
                  {t("tours.days_count")}
                </label>
                <div className="space-y-2">
                  {[
                    { value: null, label: t("tours.days.all") },
                    { value: "1-7", label: t("tours.days.1_7") },
                    { value: "8-14", label: t("tours.days.8_14") },
                    { value: "15+", label: t("tours.days.15_plus") },
                  ].map((option) => (
                    <label key={option.value || "all"} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="days"
                        value={option.value || ""}
                        checked={selectedDays === option.value}
                        onChange={() => setSelectedDays(option.value)}
                        className="w-4 h-4 accent-secondary"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedType(null);
                  setSelectedPrice(null);
                  setSelectedDays(null);
                }}
                className="w-full py-2 px-4 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                {t("tours.clear_filters")}
              </button>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="lg:col-span-3">
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredTours.map((tour, idx) => (
                  <div
                    key={tour.id}
                    className="group bg-white rounded-2xl overflow-hidden soft-shadow-md hover:soft-shadow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                          {tour.type === "tour"
                            ? t("nav.activities")
                            : tour.type === "hotel"
                            ? t("nav.hotels")
                            : t("nav.hajj_umrah")}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {tour.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {tour.description}
                      </p>

                      <div className="space-y-2 mb-4 pb-4 border-b border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={16} className="text-secondary" />
                          {tour.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} className="text-secondary" />
                          {t("home.offers.days", { count: tour.days })}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            {t("tours.from_price_starts")}
                          </p>
                          <p className="text-2xl font-bold text-secondary">
                            {t("home.offers.from_price", { price: tour.price })}
                          </p>
                        </div>
                        <Link
                          to={`/tours/${tour.id}`}
                          className="btn-primary flex items-center gap-2 text-sm"
                        >
                          {t("tours.book")}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {t("tours.no_tours")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
