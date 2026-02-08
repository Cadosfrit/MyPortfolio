const Experience = ({ experience }) => (
  <section id="experience" className="py-20 bg-main">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-text-main mb-12">Professional Experience</h2>
      <div className="space-y-10">
        {experience.map((job, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-brand-primary">
            <div className="absolute -left-2.25 top-0 w-4 h-4 bg-brand-primary rounded-full border-4 border-white"></div>
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-text-main">{job.role}</h3>
                <p className="text-xl text-brand-primary font-semibold">{job.company}</p>
              </div>
              <span className="text-sm font-mono text-text-muted mt-2 md:mt-0">{job.duration}</span>
            </div>
            <ul className="space-y-2">
              {job.highlights.map((point, i) => (
                <li key={i} className="text-text-muted flex items-start">
                  <span className="text-brand-primary mr-3">▹</span>{point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;