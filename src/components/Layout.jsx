const Layout = ({ children }) => {
  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <strong>DevPortfolio</strong>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#hero">Home</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Projects</a>
          </div>
        </nav>
      </header>

      {/* This is where the Hero, Skills, and Portfolio will live */}
      <main style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 1rem' }}>
        {children}
      </main>

      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <p>© {new Date().getFullYear()} — Built with the Functional Skeleton Strategy</p>
      </footer>
    </div>
  );
};

export default Layout;