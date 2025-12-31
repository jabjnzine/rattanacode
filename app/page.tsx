"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./contexts/ThemeContext";
export default function Hone() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Safe theme hook usage
  let theme: 'dark' | 'light' = 'dark';
  let toggleTheme: () => void = () => {};
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch {
    // Fallback to dark theme if context is not available
    console.warn('Theme context not available, using dark theme as fallback');
  }

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("service-section");
      const skillsSection = document.getElementById("skills-section");
      const projectSection = document.getElementById("project-section");

      if (!serviceSection || !skillsSection || !projectSection) {
        return;
      }

      const scrollPosition = window.scrollY;
      const serviceTop = serviceSection.offsetTop;
      const skillsTop = skillsSection.offsetTop;
      const projectTop = projectSection.offsetTop;

      if (scrollPosition >= projectTop - 100) {
        setActiveSection("project-section");
      } else if (scrollPosition >= skillsTop - 100) {
        setActiveSection("skills-section");
      } else if (scrollPosition >= serviceTop - 100) {
        setActiveSection("service-section");
      } else {
        setActiveSection("home");
      }
    };

    // Wait for DOM to be ready
    const timer = setTimeout(handleScroll, 500);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Custom Contact Modal */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 max-w-sm w-full mx-4 relative shadow-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 animate-in zoom-in-95 slide-in-from-bottom-4"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalEnter 0.5s ease-out',
            }}
          >
            <style jsx>{`
              @keyframes modalEnter {
                0% {
                  opacity: 0;
                  transform: scale(0.8) translateY(20px);
                }
                100% {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                }
              }
              @keyframes cardSlide {
                0% {
                  opacity: 0;
                  transform: translateX(-20px);
                }
                100% {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              @keyframes bounce {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-8px);
                }
              }
              .card-animate-1 {
                animation: cardSlide 0.5s ease-out 0.1s both;
              }
              .card-animate-2 {
                animation: cardSlide 0.5s ease-out 0.2s both;
              }
              .card-animate-3 {
                animation: cardSlide 0.5s ease-out 0.3s both;
              }
              .icon-float {
                animation: float 3s ease-in-out infinite;
              }
            `}</style>

            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Close Button */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-200 z-10 hover:rotate-90 hover:scale-110"
            >
              ×
            </button>

            {/* Header */}
            <div className="flex flex-col items-center gap-3 pb-5 relative z-10">
              <div className="relative icon-float">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-cyan-400/50">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-cyan-400"
                    >
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-ping"></div>
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  Contact Me
                </h2>
                <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                  Let's Connect
                </p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-3 relative z-10">
              {/* Phone Contact */}
              <a
                href="tel:0984630999"
                className="group card-animate-1 bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:from-green-600/20 hover:to-green-500/20 transition-all duration-300 hover:scale-[1.02] border border-gray-600/50 hover:border-green-500/50 shadow-lg hover:shadow-green-500/20 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06679 2.16708 8.43376 2.48353C8.80073 2.79999 9.04005 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9595 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    📞 Phone
                  </p>
                  <p className="text-white text-base font-bold group-hover:text-green-400 transition-colors truncate">
                    098-463-0999
                  </p>
                </div>
                <div className="text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/66984630999"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-animate-2 bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:from-green-600/20 hover:to-green-500/20 transition-all duration-300 hover:scale-[1.02] border border-gray-600/50 hover:border-green-500/50 shadow-lg hover:shadow-green-500/20 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 12L12 16L16 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    💬 WhatsApp
                  </p>
                  <p className="text-white text-base font-bold group-hover:text-green-400 transition-colors truncate">
                    098-463-0999
                  </p>
                </div>
                <div className="text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>

              {/* Email Contact */}
              <a
                href="mailto:Spp.kng1998@gmail.com"
                className="group card-animate-3 bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:from-red-600/20 hover:to-red-500/20 transition-all duration-300 hover:scale-[1.02] border border-gray-600/50 hover:border-red-500/50 shadow-lg hover:shadow-red-500/20 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    ✉️ Email
                  </p>
                  <p className="text-white text-sm font-bold group-hover:text-red-400 transition-colors truncate">
                    Spp.kng1998@gmail.com
                  </p>
                </div>
                <div className="text-gray-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Footer Message */}
            <div className="mt-4 pt-4 border-t border-gray-700/50 text-center relative z-10">
              <p className="text-gray-400 text-xs animate-pulse">
                💡 Available for projects
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Header */}
        <header className="flex items-center justify-between px-4 md:px-60 py-4 md:py-6 fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
        {/* Left: Logo */}
        <div className="flex items-center">
            <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/45c59019d7170faaba6e29a3fe3d988f9d11744f?width=206"
            alt="Logo"
              width={80}
              height={32}
            className="h-8 md:h-10"
          />
        </div>

          {/* Center: Nav - Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          <div
              className={`flex items-center gap-3 px-2 py-2 ${
                activeSection === "home" ? "border-b" : ""
              }`}
              style={{
                borderBottomColor:
                  activeSection === "home" ? "#7B386D" : "transparent",
              }}
            >
              <span
                className={`font-actor text-base cursor-pointer transition-colors ${
                  activeSection === "home"
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                }`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveSection("home");
                }}
              >
                HOME
              </span>
          </div>
            <div
              className={`flex items-center gap-3 px-2 py-2 ${
                activeSection === "service-section" ? "border-b" : ""
              }`}
              style={{
                borderBottomColor:
                  activeSection === "service-section"
                    ? "#7B386D"
                    : "transparent",
              }}
            >
              <span
                className={`font-actor text-base cursor-pointer transition-colors ${
                  activeSection === "service-section"
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                }`}
                onClick={() => {
                  document
                    .getElementById("service-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("service-section");
                }}
              >
                SERVICE
              </span>
          </div>
            <div
              className={`flex items-center gap-3 px-2 py-2 ${
                activeSection === "skills-section" ? "border-b" : ""
              }`}
              style={{
                borderBottomColor:
                  activeSection === "skills-section"
                    ? "#7B386D"
                    : "transparent",
              }}
            >
              <span
                className={`font-actor text-base cursor-pointer transition-colors ${
                  activeSection === "skills-section"
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                }`}
                onClick={() => {
                  document
                    .getElementById("skills-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("skills-section");
                }}
              >
                SKILLS
              </span>
          </div>
          <div
              className={`flex items-center gap-3 px-2 py-2 ${
                activeSection === "project-section" ? "border-b" : ""
              }`}
              style={{
                borderBottomColor:
                  activeSection === "project-section"
                    ? "#7B386D"
                    : "transparent",
              }}
            >
              <span
                className={`font-actor text-base cursor-pointer transition-colors ${
                  activeSection === "project-section"
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                }`}
                onClick={() => {
                  document
                    .getElementById("project-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("project-section");
                }}
              >
                PROJECT
              </span>
          </div>
        </nav>

          {/* Right: Theme Toggle + Mobile Menu + Contact */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white dark:text-white p-2 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Contact Button */}
            <button
              className="font-actor text-white dark:text-white text-sm md:text-base px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact
            </button>
          </div>
      </header>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 animate-in slide-in-from-top-4 fade-in duration-300">
            <div className="px-4 py-6 space-y-2">
              {/* Theme Toggle in Mobile Menu */}
              <div className="px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 bg-gray-800/50 dark:bg-gray-800/50 border border-gray-600/50 dark:border-gray-600/50">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full text-left"
                >
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                  <span className="font-semibold text-white dark:text-white">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>
              </div>
              <div
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSection === "home"
                    ? "bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveSection("home");
                  setMobileMenuOpen(false);
                }}
              >
                <span className="font-semibold">HOME</span>
              </div>
              <div
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSection === "service-section"
                    ? "bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  document
                    .getElementById("service-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("service-section");
                  setMobileMenuOpen(false);
                }}
              >
                <span className="font-semibold">SERVICE</span>
              </div>
              <div
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSection === "skills-section"
                    ? "bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  document
                    .getElementById("skills-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("skills-section");
                  setMobileMenuOpen(false);
                }}
              >
                <span className="font-semibold">SKILLS</span>
              </div>
              <div
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSection === "project-section"
                    ? "bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  document
                    .getElementById("project-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("project-section");
                  setMobileMenuOpen(false);
                }}
              >
                <span className="font-semibold">PROJECT</span>
              </div>
            </div>
          </div>
        )}

      {/* Hero Section */}
      <section
          className="px-4 md:px-60 py-12 min-h-screen flex items-center relative isolate pt-20 overflow-hidden"
        style={{
            backgroundImage: "url('/hero_section.png')",
          backgroundSize: "cover",
            backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-[#090D18]/70"
          aria-hidden="true"
        ></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Floating Sparkles */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping delay-200"></div>
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-700"></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-pink-400/60 rounded-full animate-ping delay-1200"></div>
            <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-cyan-300/30 rounded-full animate-ping delay-1700"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-300/35 rounded-full animate-ping delay-2200"></div>
            
            {/* Moving Light Particles */}
            <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-white/25 rounded-full animate-bounce delay-400"></div>
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-300/20 rounded-full animate-bounce delay-900"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-300/15 rounded-full animate-bounce delay-1400"></div>
            <div className="absolute bottom-1/2 right-1/2 w-1.5 h-1.5 bg-pink-300/20 rounded-full animate-bounce delay-1900"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-4">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10 max-w-4xl w-full px-4 sm:px-0">
            <div className="mb-8 animate-in slide-in-from-left-4 fade-in duration-1000">
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-light text-gray-900 dark:text-white mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-cyan-600 to-purple-600 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent animate-pulse">
                  RattanaCode888
                </span>
              </h1>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300">
                Design & Code That Grows With You
              </p>
            </div>

            <div
              className="mb-8 w-full max-w-[615px] animate-in slide-in-from-left-4 fade-in duration-1000 delay-300 relative overflow-hidden"
              style={{
                height: "2px",
                background:
                  "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
                boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>

            <div className="animate-in slide-in-from-left-4 fade-in duration-1000 delay-500">
          <button
                onClick={() => setIsContactModalOpen(true)}
                className="cursor-pointer inline-flex items-center justify-center gap-3 text-white font-montserrat w-full sm:w-[219px] relative group transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              height: "45.819px",
              borderRadius: "23.298px",
                  background: "transparent",
                  border: "none",
                }}
              >
                <div
                  className="absolute inset-0 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                    padding: "1px",
                    borderRadius: "23.298px",
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center gap-3"
                    style={{
                      background: "rgba(9, 13, 24, 0.9)",
                      borderRadius: "23.298px",
                    }}
                  >
                    <span className="text-lg font-semibold">Contact Now</span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.29688 9.38734H15.7224M10.2862 3.95117L15.7224 9.38734L10.2862 14.8235"
                stroke="url(#paint0_linear)"
                strokeWidth="1.55319"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="15.0416"
                  y1="1.31545"
                  x2="0.589464"
                  y2="2.17268"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00F0FF" />
                  <stop offset="0.482483" stopColor="#5200FF" />
                  <stop offset="1" stopColor="#FF2DF7" />
                </linearGradient>
              </defs>
            </svg>
                  </div>
                </div>
          </button>
            </div>
        </div>
      </section>

      {/* Service Section */}
        <section
          id="service-section"
          className="px-4 md:px-60 py-16 md:py-20 relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Floating Sparkles */}
            <div className="absolute top-32 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping delay-500"></div>
            <div className="absolute top-48 right-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-48 left-1/3 w-2 h-2 bg-cyan-300/20 rounded-full animate-ping delay-1200"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="mb-12 text-center animate-in slide-in-from-bottom-4 fade-in duration-1000">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
                <span
                  className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Service
                </span>
              </h2>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Optimize your business with user-friendly, scalable, and
                efficient digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Website Design & Development Card */}
          <div
                className="group bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-xl p-5 flex flex-col border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/30 relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="h-40 bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-gray-900 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden group/image">
                    <Image
                      src="/code.jpg"
                      alt="Website Development"
                      width={300}
                      height={160}
                      className="w-full h-full object-cover rounded-lg group-hover/image:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-poppins text-gray-900 dark:text-white text-lg font-bold mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Website Design & Development
                    </h3>
                    
                    <div className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-6 mb-4 flex-1 space-y-1.5">
                      <p className="flex items-start gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="text-xs">Inventory Management Systems</span>
                      </p>
                      <p className="flex items-start gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="text-xs">Point of Sale Systems (POS)</span>
                      </p>
                      <p className="flex items-start gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="text-xs">E-commerce Platforms</span>
                      </p>
                      <p className="flex items-start gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="text-xs">Custom Business Software</span>
                      </p>
                    </div>
                    
                    <button
                      className="cursor-pointer flex items-center justify-center text-white font-montserrat relative w-full group/btn transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        height: "42px",
                        borderRadius: "21px",
                        background: "transparent",
                        border: "none",
                      }}
                    >
                      <div
                        className="absolute inset-0 group-hover/btn:shadow-lg group-hover/btn:shadow-cyan-500/50 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                          padding: "1px",
                          borderRadius: "21px",
                        }}
                      >
                        <div
                          className="w-full h-full flex items-center justify-center gap-2"
                          style={{
                            background: "rgba(9, 13, 24, 0.9)",
                            borderRadius: "21px",
                          }}
                        >
                          <span className="text-sm font-semibold">View Details</span>
                          <svg
                            className="group-hover/btn:translate-x-1 transition-transform duration-300"
                            width="16"
                            height="16"
                            viewBox="0 0 19 19"
                            fill="none"
                          >
                            <path
                              d="M3.29688 9.38734H15.7224M10.2862 3.95117L15.7224 9.38734L10.2862 14.8235"
                              stroke="url(#paint0_linear2)"
                              strokeWidth="1.55319"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear2"
                                x1="15.0416"
                                y1="1.31545"
                                x2="0.589464"
                                y2="2.17268"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#00F0FF" />
                                <stop offset="0.482483" stopColor="#5200FF" />
                                <stop offset="1" stopColor="#FF2DF7" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
          </div>

          {/* Graphic Design & Artwork Card */}
          <div
                className="group bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-xl p-5 flex flex-col border border-gray-200/50 dark:border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/30 relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-pink-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-pink-500/5 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-pink-400">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="h-40 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden group/image">
                    <Image
                      src="/design.jpg"
                      alt="Graphic Design"
                      width={300}
                      height={160}
                      className="w-full h-full object-cover rounded-lg group-hover/image:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-poppins text-gray-900 dark:text-white text-lg font-bold mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      Graphic Design & Artwork
                    </h3>
                    
                    <div className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-6 mb-4 flex-1 space-y-1.5">
                      <p className="flex items-start gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="text-xs">Logos, Branding, Marketing Materials</span>
                      </p>
                      <p className="flex items-start gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="text-xs">More – Designed to Make an Impact</span>
                      </p>
                    </div>
                    
                    <button
                      className="cursor-pointer flex items-center justify-center text-white font-montserrat relative w-full group/btn transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        height: "42px",
                        borderRadius: "21px",
                        background: "transparent",
                        border: "none",
                      }}
                    >
                      <div
                        className="absolute inset-0 group-hover/btn:shadow-lg group-hover/btn:shadow-pink-500/50 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                          padding: "1px",
                          borderRadius: "21px",
                        }}
                      >
                        <div
                          className="w-full h-full flex items-center justify-center gap-2"
                          style={{
                            background: "rgba(9, 13, 24, 0.9)",
                            borderRadius: "21px",
                          }}
                        >
                          <span className="text-sm font-semibold">View Details</span>
                          <svg
                            className="group-hover/btn:translate-x-1 transition-transform duration-300"
                            width="16"
                            height="16"
                            viewBox="0 0 19 19"
                            fill="none"
                          >
                            <path
                              d="M3.29688 9.38734H15.7224M10.2862 3.95117L15.7224 9.38734L10.2862 14.8235"
                              stroke="url(#paint0_linear3)"
                              strokeWidth="1.55319"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear3"
                                x1="15.0416"
                                y1="1.31545"
                                x2="0.589464"
                                y2="2.17268"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#00F0FF" />
                                <stop offset="0.482483" stopColor="#5200FF" />
                                <stop offset="1" stopColor="#FF2DF7" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
        <section
          id="skills-section"
          className="px-4 md:px-60 py-16 md:py-20 relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Floating Sparkles */}
            <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-300"></div>
            <div className="absolute top-56 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-ping delay-800"></div>
            <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-cyan-400/50 rounded-full animate-ping delay-1100"></div>
            <div className="absolute bottom-56 right-1/3 w-1.5 h-1.5 bg-purple-300/25 rounded-full animate-ping delay-1600"></div>
            
            {/* Moving Light Particles */}
            <div className="absolute top-32 right-1/2 w-1 h-1 bg-white/15 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-cyan-300/20 rounded-full animate-bounce delay-1000"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '35px 35px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="mb-12 text-center animate-in slide-in-from-bottom-4 fade-in duration-1000">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
                <span
                  className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Skills
                </span>
              </h2>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Professional expertise in modern technologies and design tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* UX/UI Design */}
              <div className="animate-in slide-in-from-left-4 fade-in duration-1000 delay-200">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="font-poppins text-gray-900 dark:text-white text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
              UX / UI Design
            </h3>
                  <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      User experience & user interface design
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Design system for developers
                      </p>
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Mock-ups & Prototypes
                      </p>
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        User Flow & Wireframes
                      </p>
                    </div>
                  </div>
            </div>
          </div>

              {/* Developer Skills */}
              <div className="animate-in slide-in-from-right-4 fade-in duration-1000 delay-400">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="font-poppins text-gray-900 dark:text-white text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <polyline
                          points="16,18 22,12 16,6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="8,6 2,12 8,18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Development
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Full-stack development expertise
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Frontend: React, Next.js, Vue.js, TypeScript
                      </p>
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Backend: NestJS, REST API, PostgreSQL
                      </p>
                      <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        LINE Platform Integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

            {/* Technology Stack */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Technology Stack
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  Tools & Technologies I work with
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend */}
                <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⚛</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"].map(
                      (tool, index) => (
                        <div
                          key={index}
                          className="bg-blue-50 dark:bg-blue-900/20 rounded-lg px-4 py-2 border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                          <span className="text-blue-700 dark:text-blue-300 text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">{tool}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⚙</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["Node.js", "NestJS", "Express", "Python", "REST API", "GraphQL", "JWT", "Socket.io"].map(
                      (tool, index) => (
                        <div
                          key={index}
                          className="bg-green-50 dark:bg-green-900/20 rounded-lg px-4 py-2 border border-green-200/50 dark:border-green-800/50 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                          <span className="text-green-700 dark:text-green-300 text-sm font-medium group-hover:text-green-600 dark:group-hover:text-green-200 transition-colors">{tool}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Database */}
                <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🗄</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Database</h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "TypeORM"].map(
                      (tool, index) => (
                        <div
                          key={index}
                          className="bg-purple-50 dark:bg-purple-900/20 rounded-lg px-4 py-2 border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                          <span className="text-purple-700 dark:text-purple-300 text-sm font-medium group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">{tool}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* DevOps & Cloud */}
                <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">☁</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">DevOps & Cloud</h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["Docker", "Git", "GitHub", "AWS", "Vercel", "CI/CD", "Linux", "Nginx"].map(
                      (tool, index) => (
                        <div
                          key={index}
                          className="bg-orange-50 dark:bg-orange-900/20 rounded-lg px-4 py-2 border border-orange-200/50 dark:border-orange-800/50 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                          <span className="text-orange-700 dark:text-orange-300 text-sm font-medium group-hover:text-orange-600 dark:group-hover:text-orange-200 transition-colors">{tool}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Design Tools */}
                <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🎨</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Design Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects", "Sketch"].map(
                      (tool, index) => (
                        <div
                          key={index}
                          className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg px-4 py-2 border border-cyan-200/50 dark:border-cyan-800/50 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                          <span className="text-cyan-700 dark:text-cyan-300 text-sm font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors">{tool}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Mobile & Others */}
                <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">📱</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Mobile & Others</h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["React Native", "Flutter", "PWA", "WebSocket", "Microservices", "Agile"].map(
                      (tool, index) => (
                        <div
                          key={index}
                          className="bg-pink-50 dark:bg-pink-900/20 rounded-lg px-4 py-2 border border-pink-200/50 dark:border-pink-800/50 hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                          <span className="text-pink-700 dark:text-pink-300 text-sm font-medium group-hover:text-pink-600 dark:group-hover:text-pink-200 transition-colors">{tool}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio/Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-12">
                Portfolio
              </h3>
              
              {/* CRM System Project */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Image/Preview */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
                      {/* Mock CRM Dashboard */}
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-gray-600">
                          <h4 className="text-white font-bold text-lg">CRM Dashboard</h4>
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-cyan-500/20 rounded-lg p-3">
                            <div className="text-cyan-400 text-sm font-semibold">Total Customers</div>
                            <div className="text-white text-xl font-bold">1,247</div>
                          </div>
                          <div className="bg-purple-500/20 rounded-lg p-3">
                            <div className="text-purple-400 text-sm font-semibold">Active Deals</div>
                            <div className="text-white text-xl font-bold">89</div>
                          </div>
                        </div>
                        
                        {/* Recent Activities */}
                        <div className="space-y-2">
                          <div className="text-gray-300 text-sm">Recent Activities</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              New lead: John Smith
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Deal closed: $5,200
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              Follow-up scheduled
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">React</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">MongoDB</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Express</span>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Customer Relationship Management System</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      A comprehensive CRM system built with modern technologies to help businesses manage their customer relationships, track sales, and automate workflows.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Customer database management
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Sales pipeline tracking
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Task and activity management
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Real-time analytics dashboard
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Email integration
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                          View Live Demo
                        </button>
                        <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                          View Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* E-commerce Platform Project */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Details */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">E-commerce Platform</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      A full-featured e-commerce platform with modern design, secure payment processing, and comprehensive admin dashboard.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            Product catalog management
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            Shopping cart & checkout
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            Payment gateway integration
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            Order management system
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            User authentication
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                          View Live Demo
                        </button>
                        <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-pink-400 hover:text-pink-400 transition-all duration-300">
                          View Code
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Image/Preview */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
                      {/* Mock E-commerce Interface */}
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-gray-600">
                          <h4 className="text-white font-bold text-lg">Shop Now</h4>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-pink-500/20 rounded flex items-center justify-center">
                              <span className="text-pink-400 text-xs">🛒</span>
                            </div>
                            <span className="text-pink-400 text-sm">3</span>
                          </div>
                        </div>
                        
                        {/* Product Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-700/50 rounded-lg p-2">
                            <div className="w-full h-16 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded mb-2"></div>
                            <div className="text-white text-xs font-semibold">Product 1</div>
                            <div className="text-pink-400 text-xs">$29.99</div>
                          </div>
                          <div className="bg-gray-700/50 rounded-lg p-2">
                            <div className="w-full h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded mb-2"></div>
                            <div className="text-white text-xs font-semibold">Product 2</div>
                            <div className="text-pink-400 text-xs">$39.99</div>
                          </div>
                        </div>
                        
                        {/* Checkout Button */}
                        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm py-2 rounded-lg font-semibold">
                          Checkout - $69.98
                        </button>
                      </div>
                    </div>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full">Next.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">TypeScript</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">PostgreSQL</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Stripe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-12">
                My Process
              </h3>
              <div className="relative">
                {/* Desktop: Horizontal layout with connecting lines */}
                <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
                  {/* Connecting lines */}
                  <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 to-green-500 opacity-60"></div>
                  <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 via-pink-500/30 to-green-500/30 blur-sm"></div>
                  
                  {/* Dots between steps */}
                  <div className="absolute top-6 left-1/4 w-2 h-2 bg-cyan-500 rounded-full opacity-60"></div>
                  <div className="absolute top-6 left-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
                  <div className="absolute top-6 left-3/4 w-2 h-2 bg-pink-500 rounded-full opacity-60"></div>
                  
                  <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-200 group hover:scale-105 transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:animate-bounce shadow-lg">
                      1
                    </div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">Discovery</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      Understanding your needs and goals
                    </p>
                  </div>
                  
                  <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-400 group hover:scale-105 transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:animate-bounce shadow-lg">
                      2
                    </div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">Design</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      Creating wireframes and prototypes
                    </p>
                  </div>
                  
                  <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-600 group hover:scale-105 transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:animate-bounce shadow-lg">
                      3
                    </div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-pink-300 transition-colors duration-300">Develop</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      Building with modern technologies
                    </p>
                  </div>
                  
                  <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-800 group hover:scale-105 transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:animate-bounce shadow-lg">
                      4
                    </div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">Deploy</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      Launch and ongoing support
                    </p>
                  </div>
                </div>

                {/* Mobile: Vertical layout with connecting lines */}
                <div className="md:hidden relative">
                  <div className="space-y-12">
                    <div className="flex items-start gap-6 animate-in slide-in-from-left-4 fade-in duration-1000 delay-200 group relative">
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:animate-bounce shadow-lg">
                          1
                        </div>
                        {/* Connecting line to next step */}
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-40"></div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">Discovery</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          Understanding your needs and goals
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 animate-in slide-in-from-right-4 fade-in duration-1000 delay-400 group relative">
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:animate-bounce shadow-lg">
                          2
                        </div>
                        {/* Connecting line to next step */}
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-purple-500 to-pink-500 opacity-40"></div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">Design</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          Creating wireframes and prototypes
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 animate-in slide-in-from-left-4 fade-in duration-1000 delay-600 group relative">
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:animate-bounce shadow-lg">
                          3
                        </div>
                        {/* Connecting line to next step */}
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-pink-500 to-green-500 opacity-40"></div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-pink-300 transition-colors duration-300">Develop</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          Building with modern technologies
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 animate-in slide-in-from-right-4 fade-in duration-1000 delay-800 group">
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:animate-bounce shadow-lg">
                          4
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">Deploy</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          Launch and ongoing support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="project-section"
        className="px-4 md:px-60 py-16 md:py-20 relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main Gradient Orbs */}
          <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating Sparkles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-48 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-64 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-ping delay-1500"></div>
          <div className="absolute top-80 right-1/4 w-2.5 h-2.5 bg-cyan-300/30 rounded-full animate-ping delay-2000"></div>
          
          <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-pink-400/50 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-48 left-1/3 w-2 h-2 bg-purple-300/40 rounded-full animate-ping delay-1200"></div>
          <div className="absolute bottom-64 right-1/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping delay-1700"></div>
          <div className="absolute bottom-80 left-1/4 w-2.5 h-2.5 bg-pink-300/30 rounded-full animate-ping delay-2200"></div>
          
          {/* Moving Light Particles */}
          <div className="absolute top-40 left-1/2 w-1 h-1 bg-white/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-56 right-1/2 w-1.5 h-1.5 bg-cyan-300/30 rounded-full animate-bounce delay-800"></div>
          <div className="absolute bottom-40 left-1/2 w-1 h-1 bg-purple-300/20 rounded-full animate-bounce delay-1300"></div>
          <div className="absolute bottom-56 right-1/2 w-1.5 h-1.5 bg-pink-300/25 rounded-full animate-bounce delay-1800"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Animated Gradient Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse delay-1500"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10">
            <div className="mb-12 text-center animate-in slide-in-from-bottom-4 fade-in duration-1000">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
                <span
                  className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  PROJECT
                </span>
              </h2>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                ระบบซอฟต์แวร์ที่ออกแบบมาเพื่อตอบสนองความต้องการของธุรกิจทุกขนาด
              </p>
            </div>

          {/* Project Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Inventory Management Systems */}
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Card Content */}
              <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/30 dark:border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/25 animate-in slide-in-from-left-4 fade-in duration-1000 delay-200">
                {/* Glowing Header */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:animate-pulse">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg">
                        <path d="M20 7L4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 11L4 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 15L4 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 3L20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                      <span className="text-cyan-500 dark:text-cyan-400 animate-pulse">✪</span>
                      Inventory Management Systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">ระบบจัดการสินค้าคงคลัง</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-cyan-400 text-xs font-semibold">LIVE</span>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 font-medium">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30 font-medium">MongoDB</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 font-medium">TypeScript</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      ฟีเจอร์หลัก
                    </h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-cyan-300 transition-colors duration-300">ติดตามสินค้าคงคลังแบบ Real-time</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-cyan-300 transition-colors duration-300">ระบบแจ้งเตือนสินค้าใกล้หมด</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-cyan-300 transition-colors duration-300">รายงานการเคลื่อนไหวสินค้า</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-cyan-300 transition-colors duration-300">ระบบ Barcode/QR Code</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"></div>
                    <div className="relative">
                      <h4 className="text-cyan-300 font-semibold mb-2 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        ตัวอย่างการใช้งาน
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        ระบบจัดการสินค้าคงคลังสำหรับร้านค้าปลีก ร้านค้าออนไลน์ และคลังสินค้า 
                        ช่วยลดต้นทุนและเพิ่มประสิทธิภาพการจัดการ
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full relative group/btn overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-xl blur-sm opacity-75 group-hover/btn:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2">
                    <span>ดูตัวอย่างโปรเจค</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Point of Sale (POS) Systems */}
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 animate-in slide-in-from-right-4 fade-in duration-1000 delay-400">
                {/* Glowing Header */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:animate-pulse">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-2">
                      <span className="text-purple-400 animate-pulse">✪</span>
                      Point of Sale (POS) Systems
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">ระบบขายหน้าร้าน</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-purple-400 text-xs font-semibold">LIVE</span>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30 font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-medium">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30 font-medium">Stripe</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      ฟีเจอร์หลัก
                    </h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-purple-300 transition-colors duration-300">ระบบขายและรับชำระเงิน</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-purple-300 transition-colors duration-300">รายงานยอดขายรายวัน/เดือน</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-purple-300 transition-colors duration-300">ระบบสมาชิกและแต้มสะสม</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-purple-300 transition-colors duration-300">รองรับการพิมพ์ใบเสร็จ</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-pulse"></div>
                    <div className="relative">
                      <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        ตัวอย่างการใช้งาน
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        ระบบ POS สำหรับร้านอาหาร คาเฟ่ ร้านค้าปลีก 
                        รองรับการทำงานแบบ Multi-user และเชื่อมต่อกับระบบอื่นๆ
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full relative group/btn overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl blur-sm opacity-75 group-hover/btn:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">
                    <span>ดูตัวอย่างโปรเจค</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* E-commerce Platforms */}
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/25 animate-in slide-in-from-left-4 fade-in duration-1000 delay-600">
                {/* Glowing Header */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:animate-pulse">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg">
                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V19C17 19.6 16.6 20 16 20H8C7.4 20 7 19.6 7 19V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300 flex items-center gap-2">
                      <span className="text-pink-400 animate-pulse">✪</span>
                      E-commerce Platforms
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">แพลตฟอร์มขายออนไลน์</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      <span className="text-pink-400 text-xs font-semibold">LIVE</span>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30 font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full border border-red-500/30 font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-medium">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30 font-medium">Stripe</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      ฟีเจอร์หลัก
                    </h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-pink-300 transition-colors duration-300">ระบบร้านค้าออนไลน์ครบวงจร</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-pink-300 transition-colors duration-300">ระบบชำระเงินออนไลน์</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-pink-300 transition-colors duration-300">ระบบจัดการคำสั่งซื้อ</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-pink-300 transition-colors duration-300">ระบบสมาชิกและโปรโมชั่น</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-4 border border-pink-500/30 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-red-500/5 animate-pulse"></div>
                    <div className="relative">
                      <h4 className="text-pink-300 font-semibold mb-2 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-pink-400">
                          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        ตัวอย่างการใช้งาน
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        เว็บไซต์ขายออนไลน์ที่รองรับการขายสินค้าหลายประเภท 
                        มีระบบจัดการที่ครบครันและใช้งานง่าย
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full relative group/btn overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-xl blur-sm opacity-75 group-hover/btn:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-r from-pink-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 flex items-center justify-center gap-2">
                    <span>ดูตัวอย่างโปรเจค</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Custom Business Software */}
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-teal-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/30 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/25 animate-in slide-in-from-right-4 fade-in duration-1000 delay-800">
                {/* Glowing Header */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:animate-pulse">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M9 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M15 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M9 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M15 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1 9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1 15H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21 9H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21 15H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                      <span className="text-green-400 animate-pulse">✪</span>
                      Custom Business Software
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">ซอฟต์แวร์ธุรกิจเฉพาะ</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-semibold">LIVE</span>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30 font-medium">React</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full border border-teal-500/30 font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-medium">PostgreSQL</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 font-medium">Docker</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      ฟีเจอร์หลัก
                    </h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-green-300 transition-colors duration-300">ออกแบบตามความต้องการเฉพาะ</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-green-300 transition-colors duration-300">ระบบจัดการข้อมูลครบวงจร</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-green-300 transition-colors duration-300">รายงานและวิเคราะห์ข้อมูล</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover/item:animate-pulse"></div>
                        <span className="group-hover/item:text-green-300 transition-colors duration-300">รองรับการขยายระบบในอนาคต</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl p-4 border border-green-500/30 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5 animate-pulse"></div>
                    <div className="relative">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-400">
                          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        ตัวอย่างการใช้งาน
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        ซอฟต์แวร์ที่ออกแบบมาเฉพาะสำหรับธุรกิจของคุณ 
                        รองรับทั้งธุรกิจขนาดเล็กและใหญ่
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full relative group/btn overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-green-500 rounded-xl blur-sm opacity-75 group-hover/btn:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2">
                    <span>ดูตัวอย่างโปรเจค</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              พร้อมเริ่มโปรเจคของคุณแล้วหรือยัง?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              เราพร้อมช่วยคุณสร้างระบบซอฟต์แวร์ที่ตอบสนองความต้องการของธุรกิจ 
              ด้วยเทคโนโลยีที่ทันสมัยและการออกแบบที่ใช้งานง่าย
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                เริ่มโปรเจคเลย
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="px-4 md:px-60 py-16 relative">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to bring your ideas to life with modern
                design and cutting-edge technology.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-poppins text-gray-600 dark:text-gray-400 text-sm">
            Copyright © 2025 RATTANACODE888. All rights reserved.
          </p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Floating Sparkles */}
            <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping delay-400"></div>
            <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-purple-400/25 rounded-full animate-ping delay-900"></div>
            <div className="absolute top-48 left-1/2 w-1 h-1 bg-pink-400/35 rounded-full animate-ping delay-1400"></div>
            <div className="absolute top-64 right-1/4 w-2.5 h-2.5 bg-cyan-300/20 rounded-full animate-ping delay-1900"></div>
            
            {/* Moving Light Particles */}
            <div className="absolute top-24 left-1/3 w-1 h-1 bg-white/10 rounded-full animate-bounce delay-600"></div>
            <div className="absolute top-40 right-1/2 w-1.5 h-1.5 bg-cyan-300/15 rounded-full animate-bounce delay-1100"></div>
            <div className="absolute top-56 left-1/2 w-1 h-1 bg-purple-300/10 rounded-full animate-bounce delay-1600"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-2">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
        </div>
      </footer>
    </div>
    </>
  );
}
