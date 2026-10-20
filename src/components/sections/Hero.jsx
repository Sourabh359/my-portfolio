
import profile from "../../data/profile";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
        Hello, I'm
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-600 sm:text-3xl">
        {profile.role}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
        {profile.tagline}
      </p>

      <a
        href="#projects"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        View My Projects
      </a>
    </section>
  );
}

export default Hero;
