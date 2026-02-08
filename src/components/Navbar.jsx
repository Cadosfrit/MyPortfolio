const Navbar = () => (
  <nav className="fixed top-0 w-full bg-bg-main/80 backdrop-blur-md z-40 border-b border-brand-primary/5">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <span className="font-black text-xl text-brand-primary">RN.</span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
        <a href="#experience" className="hover:text-brand-primary transition-colors">Experience</a>
        <a href="#portfolio" className="hover:text-brand-primary transition-colors">Projects</a>
        <a href="#education" className="hover:text-brand-primary transition-colors">Education</a>
      </div>
    </div>
  </nav>
);

export default Navbar;