const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-main transition-colors duration-300">
      {/* Modern Fixed Navbar */}
      <header className="sticky top-0 z-40 w-full bg-bg-main/80 backdrop-blur-md border-b border-brand-primary/10">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <strong className="text-xl font-black text-brand-primary tracking-tighter -ml-40">
            RN<span className="text-text-main">.</span>
          </strong>
          
          <div className="flex gap-6 md:gap-8 text-sm font-bold text-text-muted">
            <a href="#hero" className="hover:text-brand-primary transition-colors">Home</a>
            <a href="#experience" className="hover:text-brand-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-brand-primary transition-colors">Skills</a>
            <a href="#portfolio" className="hover:text-brand-primary transition-colors">Projects</a>
            <a href="#education" className="hover:text-brand-primary transition-colors">Education</a>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Modern Footer */}
      <footer className="py-7 border-t border-brand-primary/50 bg-bg-main">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-text-main font-bold mb-2">Ronit Roshan Nayak</p>
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} — Built with React and Tailwind CSS. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs font-mono text-brand-primary/60">
            <span>Tailwind v4</span>
            <span>•</span>
            <span>React </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;