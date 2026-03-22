import { Layout } from "@/components/layout/Layout";
import { useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  Hotel,
  Plane,
  FileText,
  MapPin,
} from "lucide-react";

export default function HajjUmrah() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "umrah";

  const isHajj = type === "hajj";

  const packages =
    isHajj ?
      [
        {
          id: "hajj-1",
          name: t("hajj_umrah_page.economy_hajj"),
          rating: t("hajj_umrah_page.stars_3"),
          price: 3500,
          days: 12,
          description: t("hajj_umrah_page.hajj_desc"),
          features: [
            t("tour_detail.accommodation_food"),
            t("tour_detail.comfortable_transport"),
            "إرشاد ديني متخصص",
          ],
          schedule: [
            t("tour_detail.day_x", { count: 1 }) + ": التوجه للمطار",
            t("tour_detail.day_x", { count: 2 }) + ": الوصول لمكة",
          ],
          hotel: "فندق 3 نجوم قريب من الحرم",
          flight: "طيران مباشر",
          documents: ["Passport", "Vaccination Certificate"],
        },
        {
          id: "hajj-2",
          name: t("hajj_umrah_page.vip_hajj"),
          rating: t("hajj_umrah_page.stars_5"),
          price: 7500,
          days: 14,
          description: t("hajj_umrah_page.hajj_desc"),
          features: [
            t("tour_detail.accommodation_food") + " (Full Board)",
            t("tour_detail.comfortable_transport") + " (VIP)",
            "هدايا قيمة للحجاج",
          ],
          schedule: [
            t("tour_detail.day_x", { count: 1 }) + ": استقبال خاص والتوجه للفندق",
          ],
          hotel: "فندق 5 نجوم مطل على الحرم",
          flight: "درجة رجال الأعمال",
          documents: ["Passport", "Vaccination Certificate"],
        },
      ]
    : [
        {
          id: "umrah-1",
          name: t("hajj_umrah_page.economy_umrah"),
          rating: t("hajj_umrah_page.stars_3"),
          price: 1200,
          days: 10,
          description: t("hajj_umrah_page.umrah_desc"),
          features: [
            t("tour_detail.accommodation_food"),
            t("tour_detail.comfortable_transport"),
          ],
          schedule: [
            t("tour_detail.day_x", { count: 1 }) + ": الوصول والتوجه للفندق",
          ],
          hotel: "فندق 3 نجوم",
          flight: "Economy",
          documents: ["Passport"],
        },
        {
          id: "umrah-2",
          name: t("hajj_umrah_page.premium_umrah"),
          rating: t("hajj_umrah_page.stars_5"),
          price: 2500,
          days: 15,
          description: t("hajj_umrah_page.umrah_desc"),
          features: [
            t("tour_detail.accommodation_food"),
            t("tour_detail.comfortable_transport"),
            "زيارات للمزارات الدينية",
          ],
          schedule: [
            t("tour_detail.day_x", { count: 1 }) + ": الاستقبال والترحيب",
          ],
          hotel: "فندق 5 نجوم (برج الساعة)",
          flight: "طيران مباشر",
          documents: ["Passport"],
        },
      ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/images/hajj/h2.jpg')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            {isHajj ? t("hajj_umrah_page.hajj_programs") : t("hajj_umrah_page.umrah_programs")}
          </h1>
          <p className="text-white/80 mt-2">
            {t("hajj_umrah_page.subtitle")}
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl soft-shadow-md overflow-hidden hover:soft-shadow transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm font-bold">
                    {pkg.rating}
                  </span>
                </div>
                <p className="text-white/80 mb-6">{pkg.description}</p>
                <div className="text-4xl font-bold text-secondary">
                  {t("home.offers.from_price", { price: pkg.price })}
                </div>
                <p className="text-white/70 text-sm mt-2">{t("home.offers.days", { count: pkg.days })}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle size={20} className="text-secondary" />
                    {t("tour_detail.features")}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Program Schedule */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <MapPin size={20} className="text-secondary" />
                    {t("tour_detail.schedule")}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.schedule.map((day, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {day}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hotel */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Hotel size={20} className="text-secondary" />
                    {t("tour_detail.hotel")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{pkg.hotel}</p>
                </div>

                {/* Flight */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Plane size={20} className="text-secondary" />
                    {t("tour_detail.flight")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{pkg.flight}</p>
                </div>

                {/* Documents */}
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <FileText size={20} className="text-secondary" />
                    {t("tour_detail.documents")}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.documents.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to={`/tours/${pkg.id}`}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {t("hajj_umrah_page.book_now")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
