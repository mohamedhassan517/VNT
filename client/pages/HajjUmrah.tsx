import { Layout } from "@/components/layout/Layout";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Hotel,
  Plane,
  FileText,
  MapPin,
} from "lucide-react";

export default function HajjUmrah() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "umrah";

  const isHajj = type === "hajj";

  const packages =
    isHajj ?
      [
        {
          id: 1,
          name: "حج اقتصادي",
          rating: "3 نجوم",
          price: 3500,
          days: 12,
          description: "برنامج حج اقتصادي مع الخدمات الأساسية",
          features: [
            "إقامة 3 نجوم",
            "وجبات غذائية متنوعة",
            "نقل جماعي",
            "مرافق طبي",
          ],
          schedule: [
            "اليوم 1-2: الوصول والتوطين",
            "اليوم 3-5: الإحرام والطواف",
            "اليوم 6-8: عرفات ومزدلفة",
            "اليوم 9-12: منى والعودة",
          ],
          hotel: "فندق 3 نجوم - 3 أشخاص بالغرفة",
          flight: "طيران اقتصادي",
          documents: [
            "جواز سفر ساري المفعول",
            "الشهادة الصحية",
            "تصريح التطعيم",
          ],
        },
        {
          id: 2,
          name: "حج 4 نجوم",
          rating: "4 نجوم",
          price: 5500,
          days: 12,
          description: "برنامج حج متميز مع خدمات عالية الجودة",
          features: [
            "إقامة 4 نجوم",
            "وجبات فخمة",
            "نقل خاص",
            "مرافق طبي",
            "جنويد متخصصين",
          ],
          schedule: [
            "اليوم 1-2: الوصول والتوطين",
            "اليوم 3-5: الإحرام والطواف",
            "اليوم 6-8: عرفات ومزدلفة",
            "اليوم 9-12: منى والعودة",
          ],
          hotel: "فندق 4 نجوم - 2 أشخاص بالغرفة",
          flight: "طيران اقتصادي مع خدمات إضافية",
          documents: [
            "جواز سفر ساري المفعول",
            "الشهادة الصحية",
            "تصريح التطعيم",
          ],
        },
        {
          id: 3,
          name: "حج 5 نجوم",
          rating: "5 نجوم",
          price: 8500,
          days: 12,
          description: "برنامج حج فاخر مع أفضل الخدمات",
          features: [
            "إقامة 5 نجوم",
            "وجبات فاخرة",
            "نقل فاخر",
            "طبيب مرافق",
            "جنويد متخصصين",
            "خدمات VIP",
          ],
          schedule: [
            "اليوم 1-2: الوصول والتوطين",
            "اليوم 3-5: الإحرام والطواف",
            "اليوم 6-8: عرفات ومزدلفة",
            "اليوم 9-12: منى والعودة",
          ],
          hotel: "فندق 5 نجوم - غرفة مفردة",
          flight: "طيران رجال الأعمال",
          documents: [
            "جواز سفر ساري المفعول",
            "الشهادة الصحية",
            "تصريح التطعيم",
          ],
        },
        {
          id: 4,
          name: "حج VIP",
          rating: "VIP",
          price: 12000,
          days: 12,
          description: "برنامج حج فاخر جداً مع خدمات استثنائية",
          features: [
            "إقامة 5 نجوم فاخرة",
            "وجبات حصرية",
            "سيارة شخصية",
            "طبيب مرافق",
            "مرافق شخصي",
            "خدمات VIP كاملة",
          ],
          schedule: [
            "اليوم 1-2: الوصول والتوطين",
            "اليوم 3-5: الإحرام والطواف",
            "اليوم 6-8: عرفات ومزدلفة",
            "اليوم 9-12: منى والعودة",
          ],
          hotel: "فندق 5 نجوم فاخر - جناح",
          flight: "طيران الدرجة الأولى",
          documents: [
            "جواز سفر ساري المفعول",
            "الشهادة الصحية",
            "تصريح التطعيم",
          ],
        },
      ]
    : [
        {
          id: 1,
          name: "عمرة اقتصادية",
          rating: "3 نجوم",
          price: 1200,
          days: 7,
          description: "عمرة اقتصادية مع الخدمات الأساسية",
          features: [
            "إقامة 3 نجوم",
            "وجبات متنوعة",
            "نقل جماعي",
            "جنويد متخصصين",
          ],
          schedule: [
            "اليوم 1: الوصول والتوطين",
            "اليوم 2: الإحرام والطواف والسعي",
            "اليوم 3-5: الإقامة والعبادة",
            "اليوم 6-7: الحلق والعودة",
          ],
          hotel: "فندق 3 نجوم - 3 أشخاص بالغرفة",
          flight: "طيران اقتصادي",
          documents: [
            "جواز سفر ساري المفعول",
            "التأشيرة السياحية",
            "الشهادة الصحية",
          ],
        },
        {
          id: 2,
          name: "عمرة 4 نجوم",
          rating: "4 نجوم",
          price: 2200,
          days: 8,
          description: "عمرة متميزة مع خدمات عالية",
          features: [
            "إقامة 4 نجوم",
            "وجبات فخمة",
            "نقل خاص",
            "جنويد متخصصين",
            "برنامج إضافي",
          ],
          schedule: [
            "اليوم 1: الوصول والتوطين",
            "اليوم 2: الإحرام والطواف والسعي",
            "اليوم 3-6: الإقامة والعبادة",
            "اليوم 7-8: الحلق والعودة",
          ],
          hotel: "فندق 4 نجوم - 2 أشخاص بالغرفة",
          flight: "طيران اقتصادي مع خدمات",
          documents: [
            "جواز سفر ساري المفعول",
            "التأشيرة السياحية",
            "الشهادة الصحية",
          ],
        },
        {
          id: 3,
          name: "عمرة 5 نجوم",
          rating: "5 نجوم",
          price: 4000,
          days: 10,
          description: "عمرة فاخرة مع أفضل الخدمات",
          features: [
            "إقامة 5 نجوم",
            "وجبات فاخرة",
            "نقل فاخر",
            "جنويد متخصصين",
            "برنامج سياحي",
            "خدمات إضافية",
          ],
          schedule: [
            "اليوم 1: الوصول والتوطين",
            "اليوم 2: الإحرام والطواف والسعي",
            "اليوم 3-8: الإقامة والعبادة والبرنامج السياحي",
            "اليوم 9-10: الحلق والعودة",
          ],
          hotel: "فندق 5 نجوم - غرفة مفردة/مزدوجة",
          flight: "طيران رجال الأعمال",
          documents: [
            "جواز سفر ساري المفعول",
            "التأشيرة السياحية",
            "الشهادة الصحية",
          ],
        },
        {
          id: 4,
          name: "عمرة VIP",
          rating: "VIP",
          price: 6500,
          days: 12,
          description: "عمرة فاخرة جداً مع خدمات استثنائية",
          features: [
            "إقامة 5 نجوم فاخرة",
            "وجبات حصرية",
            "سيارة شخصية",
            "مرافق شخصي",
            "برنامج سياحي حصري",
            "خدمات VIP كاملة",
          ],
          schedule: [
            "اليوم 1: الوصول والتوطين",
            "اليوم 2: الإحرام والطواف والسعي",
            "اليوم 3-10: الإقامة والعبادة والبرنامج السياحي الحصري",
            "اليوم 11-12: الحلق والعودة",
          ],
          hotel: "فندق 5 نجوم فاخر - جناح",
          flight: "طيران الدرجة الأولى",
          documents: [
            "جواز سفر ساري المفعول",
            "التأشيرة السياحية",
            "الشهادة الصحية",
          ],
        },
      ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {isHajj ? "برامج الحج" : "برامج العمرة"}
          </h1>
          <p className="text-white/80 mt-2">
            اختر البرنامج المناسب لك من بيننا
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="bg-white rounded-2xl soft-shadow-md overflow-hidden hover:soft-shadow transition-all duration-300 hover:-translate-y-2 group"
              variants={itemVariants}
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
                  {pkg.price}
                  <span className="text-lg text-white/80 ml-2">ر.س</span>
                </div>
                <p className="text-white/70 text-sm mt-2">{pkg.days} أيام</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle size={20} className="text-secondary" />
                    المميزات
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
                    جدول البرنامج
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
                    الفندق
                  </h4>
                  <p className="text-sm text-muted-foreground">{pkg.hotel}</p>
                </div>

                {/* Flight */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Plane size={20} className="text-secondary" />
                    الطيران
                  </h4>
                  <p className="text-sm text-muted-foreground">{pkg.flight}</p>
                </div>

                {/* Documents */}
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <FileText size={20} className="text-secondary" />
                    المستندات المطلوبة
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
                <a
                  href="https://wa.me/YOUR_PHONE_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  احجز الآن
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
