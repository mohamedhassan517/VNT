import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
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

// All tours data including best offers
const allToursData = [
  // Best Offers (from Index)
  {
    id: "offer-1",
    title: "عمرة مميزة",
    type: "umrah",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
    days: 7,
    price: 1500,
    location: "مكة المكرمة",
    description: "رحلة عمرة شاملة مع إقامة 5 نجوم",
    details:
      "تتمتع هذه الرحلة المميزة بكل المواصفات العالية. توفر لك إقامة فاخرة في فندق 5 نجوم على مقربة من المسجد الحرام مع خدمات عالية الجودة وفريق عمل متخصص.",
    features: [
      "إقامة 5 نجوم",
      "وجبات متكاملة",
      "نقل فاخر",
      "مرافقة متخصصة",
      "برنامج سياحي",
    ],
    schedule: [
      "اليوم 1: الوصول والتوطين",
      "اليوم 2: الإحرام والطواف والسعي",
      "اليوم 3-5: الإقامة والعبادة",
      "اليوم 6-7: الحلق والعودة",
    ],
    hotel: "فندق 5 نجوم - 2 أشخاص بالغرفة",
    flight: "طيران مريح مع خدمات",
    documents: [
      "جواز سفر ساري المفعول",
      "التأشيرة السياحية",
      "الشهادة الصحية",
    ],
  },
  {
    id: "offer-2",
    title: "حج الميزانية",
    type: "hajj",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    days: 10,
    price: 3000,
    location: "مكة والمدينة",
    description: "برنامج حج اقتصادي مع خدمات أساسية",
    details:
      "برنامج حج اقتصادي لمن يرغب في أداء فريضة الحج برسوم معقولة. يتضمن جميع الخدمات الأساسية والضرورية لتأدية مناسك الحج بسهولة.",
    features: [
      "إقامة 3 نجوم",
      "وجبات متنوعة",
      "نقل جماعي",
      "مرافقة متخصصة",
      "طبيب مرافق",
    ],
    schedule: [
      "اليوم 1-2: الوصول والتوطين",
      "اليوم 3-5: الإحرام والطواف",
      "اليوم 6-8: عرفات ومزدلفة",
      "اليوم 9-10: منى والعودة",
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
    id: "offer-3",
    title: "رحلة سياحية",
    type: "tour",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    days: 5,
    price: 1200,
    location: "دبي",
    description: "رحلة سياحية شاملة مع جميع الخدمات",
    details:
      "رحلة سياحية رائعة لاستكشاف معالم دبي السياحية الجميلة. تتضمن زيارات لأشهر المواقع السياحية والترفيهية مع إقامة مريحة وسيارات خاصة.",
    features: [
      "إقامة 4 نجوم",
      "وجبات فخمة",
      "نقل خاص",
      "جولات سياحية",
      "مرشد سياحي",
    ],
    schedule: [
      "اليوم 1: الوصول والتوطين",
      "اليوم 2-3: جولات سياحية",
      "اليوم 4: أنشطة ترفيهية",
      "اليوم 5: العودة",
    ],
    hotel: "فندق 4 نجوم - 2 أشخاص بالغرفة",
    flight: "طيران مريح",
    documents: [
      "جواز سفر ساري المفعول",
      "التأشيرة السياحية",
    ],
  },
  // Regular tours
  {
    id: "1",
    title: "عمرة مميزة - 7 أيام",
    type: "umrah",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
    days: 7,
    price: 1500,
    location: "مكة المكرمة",
    description: "رحلة عمرة شاملة مع إقامة 5 نجوم",
    details:
      "عمرة متكاملة مع إقامة 5 نجوم وكل الخدمات المطلوبة لراحتك وراحة عائلتك.",
    features: [
      "إقامة 5 نجوم",
      "وجبات متكاملة",
      "نقل فاخر",
      "مرافقة متخصصة",
    ],
    schedule: [
      "اليوم 1: الوصول والتوطين",
      "اليوم 2: الإحرام والطواف والسعي",
      "اليوم 3-5: الإقامة والعبادة",
      "اليوم 6-7: الحلق والعودة",
    ],
    hotel: "فندق 5 نجوم - 2 أشخاص بالغرفة",
    flight: "طيران مريح",
    documents: [
      "جواز سفر ساري المفعول",
      "التأشيرة السياحية",
    ],
  },
  {
    id: "2",
    title: "حج الميزانية - 10 أيام",
    type: "hajj",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    days: 10,
    price: 3000,
    location: "مكة والمدينة",
    description: "برنامج حج اقتصادي مع خدمات أساسية",
    details: "حج اقتصادي بأسعار مناسبة مع جميع الخدمات الأساسية.",
    features: [
      "إقامة 3 نجوم",
      "وجبات متنوعة",
      "نقل جماعي",
      "طبيب مرافق",
    ],
    schedule: [
      "اليوم 1-2: الوصول والتوطين",
      "اليوم 3-5: الإحرام والطواف",
      "اليوم 6-8: عرفات ومزدلفة",
      "اليوم 9-10: منى والعودة",
    ],
    hotel: "فندق 3 نجوم - 3 أشخاص بالغرفة",
    flight: "طيران اقتصادي",
    documents: [
      "جواز سفر ساري المفعول",
      "الشهادة الصحية",
    ],
  },
  {
    id: "3",
    title: "رحلة سياحية - 5 أيام",
    type: "tour",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    days: 5,
    price: 1200,
    location: "دبي",
    description: "رحلة سياحية شاملة مع جميع الخدمات",
    details:
      "رحلة ممتعة لاستكشاف دبي مع إقامة مريحة وجولات سياحية رائعة.",
    features: [
      "إقامة 4 نجوم",
      "وجبات فخمة",
      "نقل خاص",
      "جولات سياحية",
    ],
    schedule: [
      "اليوم 1: الوصول والتوطين",
      "اليوم 2-3: جولات سياحية",
      "اليوم 4: أنشطة ترفيهية",
      "اليوم 5: العودة",
    ],
    hotel: "فندق 4 نجوم",
    flight: "طيران مريح",
    documents: ["جواز سفر ساري المفعول"],
  },
  {
    id: "4",
    title: "عمرة VIP - 10 أيام",
    type: "umrah",
    image:
      "https://images.unsplash.com/photo-1535356713196-2fbf0f60e75a?w=600&h=400&fit=crop",
    days: 10,
    price: 4500,
    location: "مكة المكرمة",
    description: "عمرة فاخرة مع خدمات VIP و5 نجوم",
    details: "عمرة VIP مع أفضل الخدمات والإقامة الفاخرة.",
    features: [
      "إقامة 5 نجوم فاخرة",
      "وجبات حصرية",
      "سيارة شخصية",
      "مرافق شخصي",
    ],
    schedule: [
      "اليوم 1: الوصول والتوطين",
      "اليوم 2: الإحرام والطواف والسعي",
      "اليوم 3-8: الإقامة والعبادة والبرنامج السياحي",
      "اليوم 9-10: الحلق والعودة",
    ],
    hotel: "فندق 5 نجوم فاخر - غرفة مفردة",
    flight: "طيران الدرجة الأولى",
    documents: [
      "جواز سفر ساري المفعول",
      "التأشيرة السياحية",
    ],
  },
  {
    id: "5",
    title: "حج VIP - 14 أيام",
    type: "hajj",
    image:
      "https://images.unsplash.com/photo-1564441888220-84f4dd618e0c?w=600&h=400&fit=crop",
    days: 14,
    price: 8000,
    location: "مكة والمدينة",
    description: "برنامج حج فاخر مع خدمات VIP كاملة",
    details: "حج VIP مع أفضل الخدمات والتسهيلات.",
    features: [
      "إقامة 5 نجوم فاخرة",
      "وجبات حصرية",
      "سيارة شخصية",
      "مرافق شخصي",
      "طبيب مرافق",
    ],
    schedule: [
      "اليوم 1-2: الوصول والتوطين",
      "اليوم 3-5: الإحرام والطواف",
      "اليوم 6-8: عرفات ومزدلفة",
      "اليوم 9-12: منى والعودة",
      "اليوم 13-14: برنامج سياحي",
    ],
    hotel: "فندق 5 نجوم فاخر - جناح",
    flight: "طيران الدرجة الأولى",
    documents: [
      "جواز سفر ساري المفعول",
      "الشهادة الصحية",
    ],
  },
  {
    id: "6",
    title: "رحلة آسيا - 8 أيام",
    type: "tour",
    image:
      "https://images.unsplash.com/photo-1540959375944-7049f642e9a8?w=600&h=400&fit=crop",
    days: 8,
    price: 2500,
    location: "تايلاند",
    description: "رحلة سياحية رائعة في جنوب شرق آسيا",
    details:
      "رحلة سياحية مميزة في تايلاند الخضراء الجميلة مع معالم سياحية رائعة.",
    features: [
      "إقامة 4 نجوم",
      "وجبات متنوعة",
      "نقل خاص",
      "جولات سياحية",
    ],
    schedule: [
      "اليوم 1: الوصول والتوطين",
      "اليوم 2-3: جولات سياحية",
      "اليوم 4-6: أنشطة ترفيهية",
      "اليوم 7-8: العودة",
    ],
    hotel: "فندق 4 نجوم",
    flight: "طيران مريح",
    documents: ["جواز سفر ساري المفعول"],
  },
  // Hajj Packages
  {
    id: "hajj-1",
    title: "حج اقتصادي",
    type: "hajj",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    days: 12,
    price: 3500,
    location: "مكة والمدينة",
    description: "برنامج حج اقتصادي مع الخدمات الأساسية",
    details:
      "برنامج حج اقتصادي مصمم لمن يرغب في أداء الفريضة بأسعار معقولة. يتضمن جميع الخدمات الأساسية والضرورية.",
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
    id: "hajj-2",
    title: "حج 4 نجوم",
    type: "hajj",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    days: 12,
    price: 5500,
    location: "مكة والمدينة",
    description: "برنامج حج متميز مع خدمات عالية الجودة",
    details:
      "برنامج حج متميز يجمع بين الراحة والخدمات العالية. تتمتع بإقامة 4 نجوم وخدمات متقدمة.",
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
    id: "hajj-3",
    title: "حج 5 نجوم",
    type: "hajj",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    days: 12,
    price: 8500,
    location: "مكة والمدينة",
    description: "برنامج حج فاخر مع أفضل الخدمات",
    details:
      "برنامج حج فاخر يتمتع بأفضل الخدمات والإقامة الراقية. يضم كل ما تحتاجه لرحلة حج مريحة وممتعة.",
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
    id: "hajj-4",
    title: "حج VIP",
    type: "hajj",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    days: 12,
    price: 12000,
    location: "مكة والمدينة",
    description: "برنامج حج فاخر جداً مع خدمات استثنائية",
    details:
      "برنامج حج VIP فاخر جداً يوفر أفضل التجهيزات والخدمات الشخصية. تجربة حج بكل الرفاهية والراحة.",
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
  // Umrah Packages
  {
    id: "umrah-1",
    title: "عمرة اقتصادية",
    type: "umrah",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
    days: 7,
    price: 1200,
    location: "مكة المكرمة",
    description: "عمرة اقتصادية مع الخدمات الأساسية",
    details:
      "عمرة اقتصادية موثوقة توفر جميع الخدمات الأساسية بأسعار معقولة جداً.",
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
    id: "umrah-2",
    title: "عمرة 4 نجوم",
    type: "umrah",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
    days: 8,
    price: 2200,
    location: "مكة المكرمة",
    description: "عمرة متميزة مع خدمات عالية",
    details:
      "عمرة متميزة توفر إقامة 4 نجوم وخدمات عالية الجودة مع برامج إضافية.",
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
    id: "umrah-3",
    title: "عمرة 5 نجوم",
    type: "umrah",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
    days: 10,
    price: 4000,
    location: "مكة المكرمة",
    description: "عمرة فاخرة مع أفضل الخدمات",
    details:
      "عمرة فاخرة توفر إقامة 5 نجوم وأفضل الخدمات مع برنامج سياحي شامل.",
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
    id: "umrah-4",
    title: "عمرة VIP",
    type: "umrah",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=600&h=400&fit=crop",
    days: 12,
    price: 6500,
    location: "مكة المكرمة",
    description: "عمرة فاخرة جداً مع خدمات استثنائية",
    details:
      "عمرة VIP فاخرة جداً توفر سيارة شخصية ومرافق شخصي مع أفضل الإقامات الفاخرة.",
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

export default function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const tour = allToursData.find((t) => t.id === id);

  if (!tour) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            لم نجد هذه الرحلة
          </h1>
          <p className="text-muted-foreground mb-8">
            عذراً، الرحلة التي تبحث عنها غير موجودة
          </p>
          <Link to="/tours" className="btn-primary">
            العودة للرحلات
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
                <p className="text-secondary mb-2">
                  {tour.type === "umrah"
                    ? "عمرة"
                    : tour.type === "hajj"
                      ? "حج"
                      : "سياحة"}
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
                <p className="text-sm text-muted-foreground">أيام</p>
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
                <p className="text-sm text-muted-foreground">ر.س</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                عن هذه الرحلة
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
                المميزات
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
                جدول الرحلة
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
                  الفندق
                </h4>
                <p className="text-muted-foreground">{tour.hotel}</p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Plane size={20} className="text-secondary" />
                  الطيران
                </h4>
                <p className="text-muted-foreground">{tour.flight}</p>
              </div>
            </div>

            {/* Documents */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <FileText size={24} className="text-secondary" />
                المستندات المطلوبة
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
                <p className="text-white/70 text-sm mb-2">السعر الإجمالي</p>
                <div className="text-4xl font-bold mb-2">
                  {tour.price}
                  <span className="text-lg text-white/70 ml-1">ر.س</span>
                </div>
                <p className="text-white/70 text-sm">لكل شخص</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    {tour.days} أيام
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    إقامة وطعام
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    نقل مريح
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    مرافقة متخصصة
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/201030146303?text=أريد الحجز في رحلة ${tour.title} بسعر ${tour.price} ريال`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-secondary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 mb-3"
              >
                احجز الآن عبر واتساب
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+201030146303"
                className="w-full border-2 border-white text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                اتصل بنا
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
