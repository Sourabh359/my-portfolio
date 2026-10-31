import profile from "../../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center transition-colors duration-300 dark:bg-gray-950"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
        Hello, I'm
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        {profile.name}
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300 sm:text-3xl">
        {profile.role}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
        {profile.tagline}
      </p>

      <a
        href="#projects"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        View My Projects
      </a>

      <a
        href="/resume.pdf"
        download="Sourabh_Malik_Resume.pdf"
        className="mt-4 rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Hero;
