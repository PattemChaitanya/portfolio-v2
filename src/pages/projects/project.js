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
        <div
          style={{
            paddingBlock: "10px",
            paddingBottom: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <HeaderTitle headerTitle="Projects." />
          <div className="tags-container">
            {["all", "frontend", "backend", "coming soon"].map((item) => (
              <Tabs selectedTag={selectedTag} setSelectedTag={setSelectedTag}>
                {item}
              </Tabs>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyItems: "center",
              marginInline: "center",
              width: "100%",
            }}
          >
            {projectData.map((item) => (
              <Cards
                image={item.image}
                name={item.name}
                githubLink={item.githubLink}
                liveSiteLink={item.liveSiteLink}
              />
            ))}
          </div>
        </div>
      </PageWrapper>
      <Footer path="/resume">
        <p>Continue to Resume</p>
      </Footer>
    </Layout>
  );
};

export default Project;
