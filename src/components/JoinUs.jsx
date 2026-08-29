function JoinUs() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-gray-950 py-24 px-6 text-white"
    >
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full border border-yellow-400/20"></div>

      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-yellow-400/20"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <p className="mb-5 text-sm font-bold tracking-[3px] text-yellow-400">
          READY TO BUILD SOMETHING GREAT?
        </p>

        <h2 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Your Idea Could Be
          <span className="block text-yellow-400">
            The Next Big Thing.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
          Join our community of innovators, creators and future
          entrepreneurs. Turn your ideas into reality with E-Cell.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-sm font-bold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-white"
        >
          Join E-Cell
          <span>→</span>
        </a>

      </div>
    </section>
  );
}

export default JoinUs;