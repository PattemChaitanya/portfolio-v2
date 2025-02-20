import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import HeaderTitle from "../../component/page-header/header-title";
import Tabs from "../../component/tabs/tabs";
import { projects } from "../../app-data/project-data";
import Cards from "../../component/cards/cards";
import PageWrapper from "../../component/page-wrapper/page-wrapper";

const Project = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [projectData, setProjectData] = useState(projects);

  const headerTags = {
    title: "Projects | Chaitanya Pattem",
    keywords: "Projects",
    titleTemplate: "Projects | Chaitanya Pattem",
    description: "Projects of this porfolio of chaitanya's website",
  };

  useEffect(() => {
    if (selectedTag === "all") {
      setProjectData(projects);
    } else {
      const filteredData = projects.filter((project) =>
        project.tags.includes(selectedTag)
      );
      setProjectData(filteredData);
    }
  }, [selectedTag]);

  return (
    <Layout headerTags={headerTags}>
      <PageWrapper>
        <HeaderTitle headerTitle="Projects." />
        <section className="tags-section">
          <div className="tags-container">
            {["all", "frontend", "backend", "coming soon"].map((item) => (
              <Tabs selectedTag={selectedTag} setSelectedTag={setSelectedTag}>
                {item}
              </Tabs>
            ))}
          </div>
          <div className="cards-container">
            {projectData.map((item) => (
              <Cards
                image={item.image}
                name={item.name}
                githubLink={item.githubLink}
                liveSiteLink={item.liveSiteLink}
              />
            ))}
          </div>
        </section>
        <Footer path="/resume">
          <p>Summary of my work</p>
        </Footer>
      </PageWrapper>
    </Layout>
  );
};

export default Project;
