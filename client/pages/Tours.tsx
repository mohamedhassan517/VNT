import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Filter, ArrowRight } from "lucide-react";

export default function Tours() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<string | null>(null);

  const allTours = [
    {
      id: 1,
      title: "عمرة مميزة - 7 أيام",
      type: "umrah",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
      days: 7,
      price: 1500,
      location: "مكة المكرمة",
      description: "رحلة عمرة شاملة مع إقامة 5 نجوم",
    },
    {
      id: 2,
      title: "حج الميزانية - 10 أيام",
      type: "hajj",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      days: 10,
      price: 3000,
      location: "مكة والمدينة",
      description: "برنامج حج اقتصادي مع خدمات أساسية",
    },
    {
      id: 3,
      title: "رحلة سياحية - 5 أيام",
      type: "tour",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      days: 5,
      price: 1200,
      location: "دبي",
      description: "رحلة سياحية شاملة مع جميع الخدمات",
    },
    {
      id: 4,
      title: "عمرة VIP - 10 أيام",
      type: "umrah",
      image:
        "https://images.unsplash.com/photo-1535356713196-2fbf0f60e75a?w=600&h=400&fit=crop",
      days: 10,
      price: 4500,
      location: "مكة المكرمة",
      description: "عمرة فاخرة مع خدمات VIP و5 نجوم",
    },
    {
      id: 5,
      title: "حج VIP - 14 أيام",
      type: "hajj",
      image:
        "https://images.unsplash.com/photo-1564441888220-84f4dd618e0c?w=600&h=400&fit=crop",
      days: 14,
      price: 8000,
      location: "مكة والمدينة",
      description: "برنامج حج فاخر مع خدمات VIP كاملة",
    },
    {
      id: 6,
      title: "رحلة آسيا - 8 أيام",
      type: "tour",
      image:
        "https://images.unsplash.com/photo-1540959375944-7049f642e9a8?w=600&h=400&fit=crop",
      days: 8,
      price: 2500,
      location: "تايلاند",
      description: "رحلة سياحية رائعة في جنوب شرق آسيا",
    },
  ];

  const filteredTours = allTours.filter((tour) => {
    if (selectedType && tour.type !== selectedType) return false;
    if (
      selectedPrice &&
      !(
        (selectedPrice === "0-2000" && tour.price < 2000) ||
        (selectedPrice === "2000-5000" &&
          tour.price >= 2000 &&
          tour.price < 5000) ||
        (selectedPrice === "5000+" && tour.price >= 5000)
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
          <h1 className="text-4xl md:text-5xl font-bold">جميع الرحلات</h1>
          <p className="text-white/80 mt-2">اكتشف أفضل العروض المتاحة</p>
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
                <h3 className="text-lg font-bold text-primary">تصفية</h3>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-3">
                  نوع الرحلة
                </label>
                <div className="space-y-2">
                  {[
                    { value: null, label: "الكل" },
                    { value: "umrah", label: "عمرة" },
                    { value: "hajj", label: "حج" },
                    { value: "tour", label: "سياحة" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
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
                  النطاق السعري
                </label>
                <div className="space-y-2">
                  {[
                    { value: null, label: "الكل" },
                    { value: "0-2000", label: "أقل من 2000" },
                    { value: "2000-5000", label: "2000 - 5000" },
                    { value: "5000+", label: "5000 وأكثر" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
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
                  عدد الأيام
                </label>
                <div className="space-y-2">
                  {[
                    { value: null, label: "الكل" },
                    { value: "1-7", label: "1 - 7 أيام" },
                    { value: "8-14", label: "8 - 14 يوم" },
                    { value: "15+", label: "15 يوم فأكثر" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
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
                مسح الفلاتر
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
                          {tour.type === "umrah"
                            ? "عمرة"
                            : tour.type === "hajj"
                              ? "حج"
                              : "سياحة"}
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
                          {tour.days} أيام
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            السعر يبدأ من
                          </p>
                          <p className="text-2xl font-bold text-secondary">
                            {tour.price}
                            <span className="text-xs ml-1">ر.س</span>
                          </p>
                        </div>
                        <Link
                          to={`/tours/${tour.id}`}
                          className="btn-primary flex items-center gap-2 text-sm"
                        >
                          احجز
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
                  لا توجد رحلات مطابقة للفلاتر المختارة
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
