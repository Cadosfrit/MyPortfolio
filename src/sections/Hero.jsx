const Hero = ({ profile }) => (
  <section id="hero">
    <h1>{profile.name}</h1>
    <p>{profile.role}</p>
  </section>
);