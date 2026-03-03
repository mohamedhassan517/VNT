import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Award,
  Clock,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Quote,
  ArrowRight,
} from "lucide-react";

export default function Index() {
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
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm"></div>
        </div>

        <div className="relative h-full flex items-center justify-center container mx-auto px-4">
          <motion.div
            className="text-center text-white max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              رحلتك تبدأ معنا
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              اكتشف أفضل العروض للحج والعمرة والرحلات السياحية
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="https://wa.me/YOUR_PHONE_NUMBER" className="btn-primary">
                احجز الآن
              </a>
              <Link to="/tours" className="btn-secondary">
                تصفح العروض
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Offers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              أفضل العروض
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=500&h=400&fit=crop",
                title: "عمرة مميزة",
                days: "7 أيام",
                price: "من 1,500 ريال",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
                title: "حج الميزانية",
                days: "10 أيام",
                price: "من 3,000 ريال",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
                title: "رحلة سياحية",
                days: "5 أيام",
                price: "من 1,200 ريال",
              },
            ].map((offer, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden soft-shadow-md hover:soft-shadow transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {offer.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                    <Calendar size={16} className="text-secondary" />
                    {offer.days}
                  </div>
                  <div className="mb-4 pb-4 border-b border-border">
                    <p className="text-secondary font-bold text-lg">
                      {offer.price}
                    </p>
                  </div>
                  <button className="w-full btn-primary flex items-center justify-center gap-2">
                    عرض التفاصيل
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hajj & Umrah Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              الحج والعمرة
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/hajj-umrah?type=umrah"
                className="group relative h-64 rounded-2xl overflow-hidden soft-shadow-md hover:soft-shadow block"
              >
                <img
                  src="https://images.unsplash.com/photo-1535356713196-2fbf0f60e75a?w=600&h=500&fit=crop"
                  alt="عمرة"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                  <button className="btn-primary">برامج العمرة</button>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                to="/hajj-umrah?type=hajj"
                className="group relative h-64 rounded-2xl overflow-hidden soft-shadow-md hover:soft-shadow block"
              >
                <img
                  src="https://images.unsplash.com/photo-1564441888220-84f4dd618e0c?w=600&h=500&fit=crop"
                  alt="حج"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                  <button className="btn-primary">برامج الحج</button>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              لماذا نحن؟
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: "أسعار تنافسية",
                description: "أفضل الأسعار المضمونة",
              },
              {
                icon: Clock,
                title: "دعم 24/7",
                description: "فريق دعم متاح طول الوقت",
              },
              {
                icon: Shield,
                title: "خبرة 10 سنوات",
                description: "سنوات من التميز والاحترافية",
              },
              {
                icon: Star,
                title: "تقييمات ممتازة",
                description: "آلاف العملاء الراضين",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl hover:soft-shadow transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <feature.icon size={28} className="text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              آراء العملاء
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "محمد أحمد",
                comment: "رحلة رائعة وخدمة ممتازة! شكراً على الاهتمام والدقة",
                rating: 5,
              },
              {
                name: "فاطمة علي",
                comment: "أفضل تجربة حج في حياتي، التنظيم كان احترافي جداً",
                rating: 5,
              },
              {
                name: "سارة محمود",
                comment: "أسعار مناسبة وخدمات عالية الجودة، أنصح الجميع",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl soft-shadow-md hover:soft-shadow transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Users size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">عميل سعيد</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              احجز رحلتك الآن واستمتع بأفضل العروض
            </h2>
            <p className="text-lg mb-8 text-white/90">
              لا تضيع الفرصة! عروضنا محدودة والأماكن تنتهي بسرعة
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                className="px-8 py-4 bg-secondary text-primary rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                احجز الآن عبر واتساب
              </a>
              <Link
                to="/tours"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/10"
              >
                تصفح جميع الرحلات
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
