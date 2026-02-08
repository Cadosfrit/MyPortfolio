const Portfolio = ({ projects }) => (
  <section id="portfolio" className="py-20 bg-main transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-text-main mb-12 italic tracking-tight">
        Technical Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-bg-soft border border-brand-primary/15 rounded-2xl p-8 hover:shadow-xl hover:border-brand-primary/30 transition-all group"
          >
            <h3 className="text-2xl font-bold text-text-main group-hover:text-brand-primary transition-colors mb-2">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span 
                  key={t} 
                  className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-2 py-1 rounded border border-brand-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-text-muted mb-4 leading-relaxed">
              {project.description}
            </p>

            <ul className="text-sm text-text-muted space-y-2 mb-6">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-primary mt-1">▹</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 mt-auto pt-4 border-t border-brand-primary/5">
              {/* Conditional Live Preview Link */}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center font-bold text-brand-primary hover:scale-105 transition-all"
                >
                  <span className="mr-1.5">🌐</span> Live Demo
                </a>
              )}

              {/* Conditional Source Code Link */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center font-bold text-brand-primary/80 hover:text-brand-primary transition-all"
                >
                  <span className="mr-1.5">💻</span> Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;