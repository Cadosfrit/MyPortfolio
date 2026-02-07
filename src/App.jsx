import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("YOUR_GITHUB_JSON_URL")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '20%' }}>Loading...</div>;

  return (
    <Layout>
      <Hero profile={data.profile} />
      <hr />
      <Skills skills={data.skills} />
      <hr />
      <Portfolio projects={data.projects} />
    </Layout>
  );
}

export default App;