import { Mail, Phone, MapPin, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

const Hero = ({ profile }) => (
  <section id="hero" className="py-24 bg-linear-to-b from-brand-primary/10 to-bg-main transition-colors duration-300 rounded-b-2xl">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Side: Round Image */}
      <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
        <div className="w-full h-full rounded-full border-4 border-brand-primary/20 p-2 shadow-2xl overflow-hidden">
          <img 
            src={profile.image || "/myimage.png"} 
            alt={profile.name}
            className="w-full h-full rounded-full object-cover shadow-inner bg-bg-soft"
          />
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-black text-text-main mb-4 tracking-tight">
          {profile.name}
        </h1>
        <p className="text-2xl text-brand-primary font-bold mb-6">
          {profile.role}
        </p>
        <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
          {profile.summary}
        </p>
        
        {/* Quick Contact Badges */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium text-text-muted">
          
          <span className="flex items-center gap-2 bg-bg-soft px-3 py-1.5 rounded-lg border border-brand-primary/10">
            <MapPin size={16} className="text-brand-primary" /> {profile.location || "Bhubaneswar"}
          </span>

          {profile.contact.email && (
            <span className="flex items-center gap-2 bg-bg-soft px-3 py-1.5 rounded-lg border border-brand-primary/10">
              <Mail size={16} className="text-brand-primary" /> {profile.contact.email}
            </span>
          )}

          {/* Social Links as Interactive Buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            {profile.contact.linkedin && (
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-4 py-1.5 rounded-lg transition-all border border-brand-primary/20">
                <Linkedin size={18} /> <span>LinkedIn</span>
              </a>
            )}

            {profile.contact.github && (
              <a href={profile.contact.github} target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-4 py-1.5 rounded-lg transition-all border border-brand-primary/20">
                <Github size={18} /> <span>GitHub</span>
              </a>
            )}

            {profile.contact.resume && (
              <a href={profile.contact.resume} target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 bg-brand-primary text-white hover:bg-brand-secondary px-4 py-1.5 rounded-lg transition-all shadow-md">
                <FileText size={18} /> <span>Resume</span> <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;