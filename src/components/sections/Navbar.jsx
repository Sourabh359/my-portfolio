
function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 px-4 py-4 backdrop-blur dark:border-gray-700 dark:bg-gray-950/95 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-4">

        <a
          href="#home"
          className="order-1 text-xl font-bold text-gray-900 dark:text-white"
        > Sourabh </a>

        <div className="order-3 flex basis-full flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:order-2 sm:basis-auto sm:gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          > Home </a>

          <a
            href="#skills"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          > Skills </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          > Projects </a>

          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          > Contact </a>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="order-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-800 sm:order-3"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
