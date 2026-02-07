const Skills = ({ skills }) => (
  <section id="skills">
    <h2>Skills</h2>
    {Object.keys(skills).map(category => (
      <div key={category}>
        <h3>{category}</h3>
        <ul>{skills[category].map(s => <li key={s}>{s}</li>)}</ul>
      </div>
    ))}
  </section>
);