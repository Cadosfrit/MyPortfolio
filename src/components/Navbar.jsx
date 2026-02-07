const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <strong>MyPortfolio</strong>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="mailto:your@email.com">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;