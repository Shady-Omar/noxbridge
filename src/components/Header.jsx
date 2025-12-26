"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../public/assets/logo.png";

const navItems = ["Home", "Watches", "About Us", "Contact"];

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`
        w-full z-50 transition-all duration-500
        fixed top-0 left-0 bg-transparent  
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div
          className={`
            relative w-40 h-auto
             
        `}
        >
          <Image src={logo} alt="Noxbridge Logo" width={160} height={27} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`
                relative text-sm font-medium tracking-wide
                text-black
                after:absolute after:left-0 after:-bottom-1
                after:h-px after:w-0 after:bg-current
                after:transition-all after:duration-300
                hover:after:w-full
              `}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className={
            !scrolled && isHome ? "mix-blend-difference md:hidden" : "md:hidden"
          }
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black text-white"
          >
            <div className="flex h-full flex-col px-6 pt-6">
              <div
                className={`flex items-center justify-between ${
                  isHome && !scrolled ? "mix-blend-difference" : ""
                }`}
              >
                <Image
                  src={logo}
                  alt="Noxbridge Logo"
                  width={160}
                  height={27}
                  className={isHome && !scrolled ? "invert" : ""}
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 },
                  },
                }}
                className="mt-20 flex flex-col gap-8"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-light tracking-wide"
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
