import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Events", link: "#events" },
    { name: "Team", link: "#team" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-gray-950 flex items-center justify-center shadow-lg">
              <span className="text-xl">💡</span>
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-gray-950">
                E-CELL
              </h1>

              <p className="text-[9px] font-semibold tracking-[2px] text-gray-400">
                UIET KUK
              </p>
            </div>

          </a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm font-medium text-gray-600 hover:text-yellow-500 transition duration-300"
              >
                {item.name}
              </a>
            ))}

          </div>


          {/* Desktop Button */}
          <a
            href="#join"
            className="hidden md:flex items-center gap-2 bg-gray-950 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Join E-Cell
            <span>→</span>
          </a>


          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-5">

            <div className="flex flex-col gap-4">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#join"
                onClick={() => setMenuOpen(false)}
                className="bg-gray-950 text-white text-center py-3 rounded-xl text-sm font-semibold"
              >
                Join E-Cell →
              </a>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;