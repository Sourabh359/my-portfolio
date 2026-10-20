import skills from "../../data/skills";


function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          My Skills
        </h2>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-semibold">
            Primary Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.primary.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-semibold">
            Additional Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.additional.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
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
