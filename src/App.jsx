import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Education from "./sections/Education";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '20%' }}>Loading...</div>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '20%' }}>Error: {error}</div>;

  return (
    <Layout>
      <ThemeToggle />
      <Hero profile={data.profile} />
      <Experience experience={data.experience} />
      <Skills skills={data.skills} />
      <Portfolio projects={data.projects} />
      <Education education={data.education} />
    </Layout>
  );
}

export default App;