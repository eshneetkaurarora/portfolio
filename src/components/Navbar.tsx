import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const LINKS = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "leadership", label: "Leadership" },
  { id: "beyond", label: "Beyond Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to={isHome ? "#top" : "/"} data-cursor="hover" className="font-mono text-lg font-bold tracking-tight">
          <span className="text-gradient">{"<EKA />"}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={isHome ? `#${link.id}` : `/#${link.id}`}
              data-cursor="hover"
              className={`relative text-sm font-medium transition-colors ${
                active === link.id ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-accent"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-cursor="hover"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            data-cursor="hover"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          >
            <FiMenu size={16} />
          </button>
        </div>
      </div>
    </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full border border-border">
                <FiX size={18} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 pt-12">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={isHome ? `#${link.id}` : `/#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-medium text-text"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
