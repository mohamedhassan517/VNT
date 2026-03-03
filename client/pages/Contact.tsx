import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">تواصل معنا</h1>
          <p className="text-white/80 mt-2">نحن هنا للإجابة على جميع أسئلتك</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {[
            {
              icon: Phone,
              title: "الهاتف",
              details: "+966 50 123 4567",
              link: "tel:+966501234567",
            },
            {
              icon: Mail,
              title: "البريد الإلكتروني",
              details: "info@wajeha.com",
              link: "mailto:info@wajeha.com",
            },
            {
              icon: MapPin,
              title: "العنوان",
              details: "الرياض، المملكة العربية السعودية",
              link: "#",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white rounded-xl soft-shadow-md p-8 text-center hover:soft-shadow transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <item.icon size={32} className="text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.details}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              أرسل لنا استفسار
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="بريدك الإلكتروني"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="رقم جوالك"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="موضوع الاستفسار"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Send size={20} />
                إرسال الرسالة
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center animate-fade-in">
                  شكراً! تم استقبال رسالتك بنجاح. سنتواصل معك قريباً.
                </div>
              )}
            </form>
          </div>

          {/* WhatsApp CTA and Map */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-400 to-green-600 rounded-2xl soft-shadow p-8 text-white text-center hover:soft-shadow transition-all duration-300 hover:-translate-y-2 block animate-fade-in-up"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">تحدث معنا على واتساب</h3>
              <p className="text-white/90 mb-4">
                للرد السريع والاستفسارات العاجلة
              </p>
              <div className="inline-block px-6 py-3 bg-white text-green-600 rounded-lg font-bold hover:shadow-lg transition-all">
                فتح واتساب
              </div>
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden soft-shadow-md h-96 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7346362804426!2d46.67543!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03bad5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            {/* Business Hours */}
            <div className="bg-primary/5 rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <h4 className="text-lg font-bold text-primary mb-4">ساعات العمل</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span>9:00 صباحاً - 10:00 مساءً</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span>2:00 ظهراً - 10:00 مساءً</span>
                </div>
                <div className="flex justify-between font-semibold text-secondary">
                  <span>الدعم (24/7)</span>
                  <span>متاح دائماً</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
