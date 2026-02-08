const Education = ({ education }) => (
  <section id="education" className="py-20 bg-main">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-text-main mb-12">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row md:justify-between p-8 rounded-2xl bg-bg-soft border border-slate-50">
            <div>
              <h3 className="text-xl font-bold text-text-main">{edu.institution}</h3>
              <p className="text-brand-primary">{edu.degree}</p>
              <p className="text-text-muted text-sm italic">{edu.year}</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md shadow-brand-primary/20">
                {edu.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Education;