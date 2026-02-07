import { useState, useEffect } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_JSON_URL = "YOUR_RAW_GITHUB_URL_HERE";

  useEffect(() => {
    fetch(GITHUB_JSON_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch projects");
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects from GitHub...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="portfolio">
      <h2>My Work</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.id} className="skeleton-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Source Code</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;