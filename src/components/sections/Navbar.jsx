
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <a href="#home" className="text-xl font-bold text-gray-900" >
          Sourabh </a>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a href="#home" className="text-sm font-medium text-gray-600 transition hover:text-blue-600" >
            Home
          </a>

          <a href="#skills" className="text-sm font-medium text-gray-600 transition hover:text-blue-600" >
            Skills
          </a>

          <a href="#projects" className="text-sm font-medium text-gray-600 transition hover:text-blue-600" >
            Projects
          </a>

          <a href="#contact" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700" >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
