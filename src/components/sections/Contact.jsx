
function Contact() {
    return (
        <section id="contact" className="bg-gray-50 px-6 py-16 transition-colors duration-300 dark:bg-gray-950" >
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                    Get In Touch
                </h2>

                <p className="mb-8 leading-7 text-gray-600 dark:text-gray-400">
                    I am looking for frontend development opportunities.
                    Feel free to contact me for internships, jobs, or
                    collaboration.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="mailto:maliksourabh503@gmail.com"                    className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700" >
                        Email Me
                    </a>

                    <a
                        href="https://github.com/Sourabh359"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800" >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
