import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if the loader has been shown in this session
    const hasShownLoader = sessionStorage.getItem('hasShownLoader');
    return !hasShownLoader;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasShownLoader', 'true');
      }, 1500); // Faster: 1.5 seconds instead of 2.5

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Research Compass
        </h1>
        <div className="relative w-64 h-1 mx-auto overflow-hidden rounded-full bg-muted">
          <div className="absolute inset-0 bg-gradient-hero animate-[loading_1.5s_ease-in-out]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
