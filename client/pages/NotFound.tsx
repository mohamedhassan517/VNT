import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-secondary mb-4">404</h1>
          <p className="text-2xl font-bold text-primary mb-2">الصفحة غير موجودة</p>
          <p className="text-muted-foreground mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة. يرجى العودة للصفحة الرئيسية.
          </p>
          <Link to="/" className="btn-primary inline-block">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
