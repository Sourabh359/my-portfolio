import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          My Skills
        </h2>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Primary Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.primary.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors dark:border-gray-700 dark:text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Additional Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.additional.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors dark:border-gray-700 dark:text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
