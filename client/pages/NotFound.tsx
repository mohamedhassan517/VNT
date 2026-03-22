import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
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
          <h1 className="text-7xl font-bold text-secondary mb-4">{t("not_found.title")}</h1>
          <p className="text-2xl font-bold text-primary mb-2">{t("not_found.page_not_found")}</p>
          <p className="text-muted-foreground mb-8">
            {t("not_found.desc")}
          </p>
          <Link to="/" className="btn-primary inline-block">
            {t("not_found.back_home")}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
