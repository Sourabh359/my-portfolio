
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Sourabh Malik.
          All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/Sourabh359"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
