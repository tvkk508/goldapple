import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface/80 px-5">
      <div className="text-center brand-card p-8 md:p-10 max-w-md w-full">
        <h1 className="mb-3 text-5xl font-black">404</h1>
        <p className="mb-5 text-base md:text-lg text-muted-foreground">Страница не найдена</p>
        <Link to="/" className="text-primary underline hover:text-primary/90 font-semibold">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
