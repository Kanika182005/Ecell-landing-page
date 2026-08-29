function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-yellow-100 blur-3xl opacity-70"></div>

      <div className="absolute bottom-0 -left-40 h-80 w-80 rounded-full bg-yellow-50 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-2xl">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>

              <span className="text-xs font-bold tracking-[2px] text-yellow-700">
                ENTREPRENEURSHIP CELL
              </span>
            </div>


            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">

              Where Ideas

              <span className="block">
                Become
              </span>

              <span className="block text-yellow-500">
                Impact.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              We empower students to think beyond classrooms, build
              innovative solutions and transform bold ideas into
              meaningful ventures.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#join"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gray-950 px-7 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-gray-950"
              >
                Join E-Cell

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>


              <a
                href="#events"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-600"
              >
                Explore Events

                <span>↗</span>
              </a>

            </div>


            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-gray-200 pt-7">

              <div>
                <p className="text-2xl font-black text-gray-950 sm:text-3xl">
                  500+
                </p>

                <p className="mt-1 text-xs font-medium text-gray-400">
                  Students
                </p>
              </div>


              <div className="border-l border-gray-200 pl-5">
                <p className="text-2xl font-black text-gray-950 sm:text-3xl">
                  25+
                </p>

                <p className="mt-1 text-xs font-medium text-gray-400">
                  Events
                </p>
              </div>


              <div className="border-l border-gray-200 pl-5">
                <p className="text-2xl font-black text-gray-950 sm:text-3xl">
                  15+
                </p>

                <p className="mt-1 text-xs font-medium text-gray-400">
                  Startups
                </p>
              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}

          <div className="relative mx-auto h-[500px] w-full max-w-lg">

            {/* Large background circle */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100 sm:h-96 sm:w-96"></div>


            {/* Dashed ring */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-yellow-400 sm:h-80 sm:w-80"></div>


            {/* Main Card */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] bg-gray-950 shadow-2xl sm:h-64 sm:w-64">

              {/* Icon */}
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400 shadow-lg">

                <span className="text-4xl">
                  💡
                </span>

              </div>


              <h2 className="text-2xl font-black text-white">
                THINK
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Build • Innovate • Lead
              </p>

            </div>


            {/* Floating Card — Innovation */}
            <div className="absolute right-0 top-12 z-20 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:right-2">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100">
                  💡
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-950">
                    Innovation
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Think differently
                  </p>
                </div>

              </div>

            </div>


            {/* Floating Card — Growth */}
            <div className="absolute bottom-16 left-0 z-20 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:left-2">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100">
                  📈
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-950">
                    Growth
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Build & scale
                  </p>
                </div>

              </div>

            </div>


            {/* Floating Card — Network */}
            <div className="absolute bottom-4 right-5 z-20 hidden rounded-2xl border border-gray-100 bg-gray-950 px-5 py-4 shadow-xl sm:block">

              <p className="text-[10px] font-bold tracking-widest text-yellow-400">
                CONNECT
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Network. Collaborate.
              </p>

            </div>


            {/* Small decorative dots */}
            <div className="absolute left-10 top-20 h-3 w-3 rounded-full bg-yellow-400"></div>

            <div className="absolute bottom-32 right-10 h-2 w-2 rounded-full bg-gray-950"></div>

          </div>

        </div>

      </div>


      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition hover:text-yellow-500 md:flex"
      >
        <span className="text-[10px] font-bold tracking-[2px]">
          SCROLL TO EXPLORE
        </span>

        <span className="text-lg">
          ↓
        </span>
      </a>

    </section>
  );
}

export default Hero;