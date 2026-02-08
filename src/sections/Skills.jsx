const Skills = ({ skills }) => (
  <section id="skills" className="py-20 bg-main transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-text-main mb-12 italic tracking-tight">
        Technical Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div 
            key={category} 
            className="bg-bg-soft p-6 rounded-xl shadow-sm border border-brand-primary/15 hover:border-brand-primary/30 transition-all"
          >
            <h4 className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-4">
              {category}
            </h4>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="text-text-main font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;