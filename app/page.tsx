"use client";

import { useState, useEffect } from "react";

export default function Hone() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen w-full bg-dark-bg text-white">
      {/* Header */}
      <header className="grid grid-cols-[auto_1fr_auto] items-center px-4 md:px-60 py-6 fixed top-0 left-0 right-0 z-50 bg-dark-bg">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/45c59019d7170faaba6e29a3fe3d988f9d11744f?width=206"
            alt="Logo"
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
                activeSection === "service-section" ? "#7B386D" : "transparent",
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
                activeSection === "skills-section" ? "#7B386D" : "transparent",
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
        className="px-4 md:px-60 py-12 min-h-screen flex items-center relative isolate pt-20"
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
        <div className="relative z-10 max-w-4xl w-full px-4 sm:px-0">
          <div className="mb-6">
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-light text-white mb-2 tracking-tight">
              RattanaCode888
            </h1>
            <p className="font-poppins text-white text-sm sm:text-base md:text-[16px] leading-6">
              Design & Code That Grows With You
            </p>
          </div>

          <div
            className="mb-6 w-full max-w-[615px]"
            style={{
              height: "1px",
              background:
                "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
            }}
          ></div>

          <button
            className="cursor-pointer inline-flex items-center justify-center gap-3 text-white font-montserrat w-full sm:w-[219px] relative"
            style={{
              height: "45.819px",
              borderRadius: "23.298px",
              background: "transparent",
              border: "none",
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                padding: "1px",
                borderRadius: "23.298px",
              }}
            >
              <div 
                className="w-full h-full flex items-center justify-center gap-3"
                style={{
                  background: "rgba(9, 13, 24, 0.8)",
                  borderRadius: "23.298px",
                }}
              >
                <span className="text-lg">Contact Now</span>
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
      </section>

      {/* Service Section */}
      <section id="service-section" className="px-4 md:px-60 py-8 md:py-12">
        <div className="mb-6">
          <h2 className="font-poppins text-3xl font-normal mb-2">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Service
            </span>
          </h2>
          <p className="font-poppins text-white text-base">
            Optimize your business with user-friendly, scalable, and efficient
            digital solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6">
          {/* Website Design & Development Card */}
          <div
            className="bg-transparent rounded-2xl p-3 pb-6 flex flex-col w-full max-w-[450px] "
            style={{
              height: "auto",
              border: "1px solid #FFF",
            }}
          >
            <div className="h-72 bg-white rounded-xl mb-4 flex items-center justify-center">
              <img 
                src="./design.jpg" 
                alt="Website Development" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="px-3 flex-1 flex flex-col">
              <h3
                className="font-poppins text-white text-base mb-3"
                style={{ fontWeight: 900, lineHeight: "24px" }}
              >
                Website Design & Development
              </h3>
              <div className="font-poppins text-white text-sm leading-6 mb-6 flex-1">
                <p>- Inventory Management Systems</p>
                <p>- Point of Sale (POS) Systems</p>
                <p>- E-commerce Platforms</p>
                <p>
                  - Custom Business Software for small and large enterprises
                </p>
              </div>
              <button
                onClick={() => {
                  window.open("https://sppkng1998.wixsite.com/my-portfolio", "_blank");
                }}
                className="cursor-pointer flex items-center justify-center text-white font-montserrat relative w-full sm:w-[219px]"
                style={{
                  height: "45.819px",
                  borderRadius: "23.298px",
                  background: "transparent",
                  border: "none",
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                    padding: "1px",
                    borderRadius: "23.298px",
                  }}
                >
                  <div 
                    className="w-full h-full flex items-center justify-center gap-3"
                    style={{
                      background: "rgba(9, 13, 24, 0.8)",
                      borderRadius: "23.298px",
                    }}
                  >
                    <span className="text-base">View Details</span>
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
            className="bg-transparent rounded-2xl p-3 pb-6 flex flex-col w-full max-w-[450px] "
            style={{
              height: "auto",
              border: "1px solid #FFF",
            }}
          >
            <div className="h-72 bg-white rounded-xl mb-4 flex items-center justify-center">
              <img 
                src="./code.jpg" 
                alt="Graphic Design" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="px-3 flex-1 flex flex-col">
              <h3
                className="font-poppins text-white text-base mb-3"
                style={{ fontWeight: 900, lineHeight: "24px" }}
              >
                Graphic Design & Artwork
              </h3>
              <div className="font-poppins text-white text-sm leading-6 mb-6 flex-1">
                <p>Logos, Branding, Marketing Materials &</p>
                <p>More – Designed to Make an Impact</p>
              </div>
              <button
                className="cursor-pointer flex items-center justify-center text-white font-montserrat relative w-full sm:w-[219px]"
                style={{
                  height: "45.819px",
                  borderRadius: "23.298px",
                  background: "transparent",
                  border: "none",
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                    padding: "1px",
                    borderRadius: "23.298px",
                  }}
                >
                  <div 
                    className="w-full h-full flex items-center justify-center gap-3"
                    style={{
                      background: "rgba(9, 13, 24, 0.8)",
                      borderRadius: "23.298px",
                    }}
                  >
                    <span className="text-base">View Details</span>
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
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="px-4 md:px-60 py-12">
        <div className="mb-6">
          <h2 className="font-poppins text-3xl font-normal mb-3">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #00F0FF 0%, #5200FF 50%, #FF2DF7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>

          <div className="mb-8">
            <h3
              className="font-poppins text-white text-base mb-2"
              style={{ fontWeight: 900 }}
            >
              UX / UI Design
            </h3>
            <div className="font-poppins text-white text-base leading-normal">
              <p>User experience & user interface</p>
              <p>• Design system for developer</p>
              <p>Mock-up</p>
              <p>Create Flow, Wireframe, Prototype</p>
            </div>
          </div>

          {/* UX/UI Design logos */}
          <div className="flex justify-center gap-6 mb-8 py-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5561bb445888d105f826a7130a46bcd199bccb39?width=120"
              alt="Figma"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ca7ce5bdae50768e4f2523ca0303d7d4573694f7?width=120"
              alt="Adobe XD"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3406e0b36e083043587d828c533780ef8978cc2a?width=120"
              alt="Photoshop"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e4114276916ae0887e775a6819f4bff33d144b5b?width=120"
              alt="Illustrator"
              className="w-15 h-15 rounded-lg"
            />
          </div>

          <div className="mb-8">
            <h3
              className="font-poppins text-white text-base mb-2"
              style={{ fontWeight: 900 }}
            >
              Developer Skill
            </h3>
            <div className="font-poppins text-white text-base leading-normal">
              <p>
                Frontend: JavaScript, TypeScript, Vue.js, React.js, Next.js,
                Tailwind CSS, Ant Design
              </p>
              <p>Backend: TypeScript, NestJS, REST API</p>
              <p>Database: PostgreSQL, MySQL</p>
              <p>Dev Tools: Git, Docker, Postman</p>
              <p>
                LINE Platform: LINE Messaging API, LINE Login, Webhook, Rich
                Menu
              </p>
            </div>
          </div>

          {/* Developer Skills logos - First row */}
          <div className="flex justify-center gap-6 mb-3 py-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8c30482b5faadfe94dc0043b1fb53273e666f37e?width=120"
              alt="JavaScript"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a4f9d599e91d0c7e7b2e33287dfb2b7e5e22a705?width=120"
              alt="Vue"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/17acb683d46681fe3758e2d7f9688e6f477565e5?width=120"
              alt="React"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bb77778087c005fc355c38521f8894c900953da4?width=120"
              alt="Tailwind"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5f243c837c53896ea16b6066a6131804f7c9c4cb?width=120"
              alt="Next.js"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5d71ae57320549630760db9f07cdcc96e9472528?width=120"
              alt="Ant Design"
              className="w-15 h-15 rounded-lg"
            />
          </div>

          {/* Developer Skills logos - Second row */}
          <div className="flex justify-center gap-6 py-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5adbd0262ca08c966a6e995f20afb93feffbbd0c?width=120"
              alt="Yarn"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1f1b246fb35fb844f8fe47419b90ee4bdbd15c96?width=120"
              alt="Git"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8ce23d5ccaa4627cfcbccbe012354c1cf1054a90?width=120"
              alt="Docker"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c4eadc1411c07f586c00ecbdfd11636cfd084b11?width=120"
              alt="GraphQL"
              className="w-15 h-15 rounded-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0059f3aae54f6b8d62c7f320a40a004e7a3259d1?width=120"
              alt="PHP"
              className="w-15 h-15 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-60 py-12">
        <div className="relative" style={{ height: "35px" }}>
          <div
            className="absolute left-0 top-0"
            style={{
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
            }}
          ></div>
          <p
            className="font-poppins text-white text-base absolute left-0"
            style={{
              top: "11px",
              width: "454px",
              height: "24px",
            }}
          >
            Copyright © 2025 RATTANACODE888. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
