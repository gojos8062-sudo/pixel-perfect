import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="animate-soft-in fixed bottom-5 right-5 z-40 rounded-full bg-primary p-3 text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-110"
    >
      <Heart size={20} fill="currentColor" strokeWidth={1.5} />
    </button>
  );
}
