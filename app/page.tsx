"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Hone() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("service-section");
      const skillsSection = document.getElementById("skills-section");

      if (!serviceSection || !skillsSection) {
        return;
      }

      const scrollPosition = window.scrollY;
      const serviceTop = serviceSection.offsetTop;
      const skillsTop = skillsSection.offsetTop;

      if (scrollPosition >= skillsTop - 100) {
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative shadow-2xl border border-gray-700 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-all duration-200"
            >
              ×
            </button>

            {/* Header */}
            <div className="flex flex-col items-center gap-4 pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-400"
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
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
                <p className="text-gray-400 text-sm font-medium tracking-wider">
                  GET IN TOUCH
                </p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* Phone Contact */}
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4 hover:bg-gray-700 transition-all duration-200 hover:scale-[1.02] border border-gray-600/50">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
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
                <div className="flex-1">
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    PHONE
                  </p>
                  <p className="text-white text-lg font-bold">098-463-0999</p>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4 hover:bg-gray-700 transition-all duration-200 hover:scale-[1.02] border border-gray-600/50">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
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
                <div className="flex-1">
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    WHATSAPP
                  </p>
                  <p className="text-white text-lg font-bold">098-463-0999</p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4 hover:bg-gray-700 transition-all duration-200 hover:scale-[1.02] border border-gray-600/50">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
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
                <div className="flex-1">
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    EMAIL
                  </p>
                  <p className="text-white text-lg font-bold">
                    Spp.kng1998@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen w-full bg-dark-bg text-white">
        {/* Header */}
        <header className="grid grid-cols-[auto_1fr_auto] items-center px-4 md:px-60 py-6 fixed top-0 left-0 right-0 z-50 bg-dark-bg">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/45c59019d7170faaba6e29a3fe3d988f9d11744f?width=206"
              alt="Logo"
              width={100}
              height={40}
              className="h-10"
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
                    ? "text-white"
                    : "text-gray-400 hover:text-cyan-400"
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
                    ? "text-white"
                    : "text-gray-400 hover:text-cyan-400"
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
                    ? "text-white"
                    : "text-gray-400 hover:text-cyan-400"
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
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white p-2"
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
          </div>

          {/* Right: Contact */}
          <div className="flex justify-end">
            <button
              className="font-actor text-white text-base"
              style={{
                width: "70px",
                height: "34px",
                borderRadius: "8px",
                border: "0.599px solid #9E9C9C",
              }}
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact
            </button>
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-dark-bg border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <div
                className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  activeSection === "home"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveSection("home");
                  setMobileMenuOpen(false);
                }}
              >
                HOME
              </div>
              <div
                className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  activeSection === "service-section"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
                onClick={() => {
                  document
                    .getElementById("service-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("service-section");
                  setMobileMenuOpen(false);
                }}
              >
                SERVICE
              </div>
              <div
                className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  activeSection === "skills-section"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
                onClick={() => {
                  document
                    .getElementById("skills-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("skills-section");
                  setMobileMenuOpen(false);
                }}
              >
                SKILLS
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
          </div>

          <div className="relative z-10 max-w-4xl w-full px-4 sm:px-0">
            <div className="mb-8 animate-in slide-in-from-left-4 fade-in duration-1000">
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-light text-white mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  RattanaCode888
                </span>
              </h1>
              <p className="font-poppins text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
                Design & Code That Grows With You
              </p>
            </div>

            <div
              className="mb-8 w-full max-w-[615px] animate-in slide-in-from-left-4 fade-in duration-1000 delay-300"
              style={{
                height: "2px",
                background:
                  "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
                boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
              }}
            ></div>

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
            <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-12 text-center animate-in slide-in-from-bottom-4 fade-in duration-1000">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
                <span
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Service
                </span>
              </h2>
              <p className="font-poppins text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Optimize your business with user-friendly, scalable, and
                efficient digital solutions.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-8 md:gap-10">
              {/* Website Design & Development Card */}
              <div
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 pb-8 flex flex-col w-full max-w-[450px] border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-in slide-in-from-left-4 fade-in duration-1000 delay-200"
                style={{
                  height: "auto",
                }}
              >
                <div className="h-72 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden group">
                  <Image
                    src="/code.jpg"
                    alt="Website Development"
                    width={400}
                    height={288}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3
                    className="font-poppins text-white text-xl font-bold mb-4"
                    style={{ lineHeight: "28px" }}
                  >
                    Website Design & Development
                  </h3>
                  <div className="font-poppins text-gray-300 text-base leading-7 mb-8 flex-1 space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Inventory Management Systems
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Point of Sale (POS) Systems
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      E-commerce Platforms
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Custom Business Software for small and large enterprises
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      window.open(
                        "https://sppkng1998.wixsite.com/my-portfolio",
                        "_blank"
                      );
                    }}
                    className="cursor-pointer flex items-center justify-center text-white font-montserrat relative w-full group transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      height: "50px",
                      borderRadius: "25px",
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
                        borderRadius: "25px",
                      }}
                    >
                      <div
                        className="w-full h-full flex items-center justify-center gap-3"
                        style={{
                          background: "rgba(9, 13, 24, 0.9)",
                          borderRadius: "25px",
                        }}
                      >
                        <span className="text-base font-semibold">
                          View Details
                        </span>
                        <svg
                          className="ml-3"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
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

              {/* Graphic Design & Artwork Card */}
              <div
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 pb-8 flex flex-col w-full max-w-[450px] border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 animate-in slide-in-from-right-4 fade-in duration-1000 delay-400"
                style={{
                  height: "auto",
                }}
              >
                <div className="h-72 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden group">
                  <Image
                    src="/design.jpg"
                    alt="Graphic Design"
                    width={400}
                    height={288}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3
                    className="font-poppins text-white text-xl font-bold mb-4"
                    style={{ lineHeight: "28px" }}
                  >
                    Graphic Design & Artwork
                  </h3>
                  <div className="font-poppins text-gray-300 text-base leading-7 mb-8 flex-1 space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Logos, Branding, Marketing Materials
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      More – Designed to Make an Impact
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/drive/folders/1-2YVCt3Fh2OIhK61JnEnXTRt4WuUAW3K",
                        "_blank"
                      );
                    }}
                    className="cursor-pointer flex items-center justify-center text-white font-montserrat relative w-full group transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      height: "50px",
                      borderRadius: "25px",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    <div
                      className="absolute inset-0 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                        padding: "1px",
                        borderRadius: "25px",
                      }}
                    >
                      <div
                        className="w-full h-full flex items-center justify-center gap-3"
                        style={{
                          background: "rgba(9, 13, 24, 0.9)",
                          borderRadius: "25px",
                        }}
                      >
                        <span className="text-base font-semibold">
                          View Details
                        </span>
                        <svg
                          className="ml-3"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
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
        </section>

        {/* Skills Section */}
        <section
          id="skills-section"
          className="px-4 md:px-60 py-16 md:py-20 relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-12 text-center animate-in slide-in-from-bottom-4 fade-in duration-1000">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
                <span
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Skills
                </span>
              </h2>
              <p className="font-poppins text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Professional expertise in modern technologies and design tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* UX/UI Design */}
              <div className="animate-in slide-in-from-left-4 fade-in duration-1000 delay-200">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="font-poppins text-white text-2xl font-bold mb-6 flex items-center gap-3">
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
                    <p className="text-gray-300 text-lg">
                      User experience & user interface design
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Design system for developers
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Mock-ups & Prototypes
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        User Flow & Wireframes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer Skills */}
              <div className="animate-in slide-in-from-right-4 fade-in duration-1000 delay-400">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="font-poppins text-white text-2xl font-bold mb-6 flex items-center gap-3">
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
                    <p className="text-gray-300 text-lg">
                      Full-stack development expertise
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Frontend: React, Next.js, Vue.js, TypeScript
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Backend: NestJS, REST API, PostgreSQL
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
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
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Technology Stack
              </h3>

              {/* Design Tools */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4 text-center">
                  Design Tools
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Figma", "Adobe XD", "Photoshop", "Illustrator"].map(
                    (tool, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-white font-medium">{tool}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Development Tools */}
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-4 text-center">
                  Development Tools
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "React",
                    "Next.js",
                    "Vue.js",
                    "TypeScript",
                    "NestJS",
                    "PostgreSQL",
                    "Docker",
                    "Git",
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-white font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-12">
                My Process
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h4 className="text-white font-semibold mb-2">Discovery</h4>
                  <p className="text-gray-400 text-sm">
                    Understanding your needs and goals
                  </p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-400">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h4 className="text-white font-semibold mb-2">Design</h4>
                  <p className="text-gray-400 text-sm">
                    Creating wireframes and prototypes
                  </p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-600">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h4 className="text-white font-semibold mb-2">Develop</h4>
                  <p className="text-gray-400 text-sm">
                    Building with modern technologies
                  </p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-800">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    4
                  </div>
                  <h4 className="text-white font-semibold mb-2">Deploy</h4>
                  <p className="text-gray-400 text-sm">
                    Launch and ongoing support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-60 py-16 relative">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to bring your ideas to life with modern
                design and cutting-edge technology.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Get Started Today
              </button>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-poppins text-gray-400 text-sm">
                  Copyright © 2025 RATTANACODE888. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </footer>
      </div>
    </>
  );
}
