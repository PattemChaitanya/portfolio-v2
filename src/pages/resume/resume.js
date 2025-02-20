import React from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import PageWrapper from "../../component/page-wrapper/page-wrapper";
import ResumeChaitanya from "../../assets/resume/Chaitanya-pattem.pdf";
import ResumeImage from "../../assets/resume/Chaitanya-pattem.jpg";
import { Download } from "../../assets/svgIcons/allIcons";
import HeaderTitle from "../../component/page-header/header-title";

const Resume = () => {
  const headerTags = {
    title: "Home - React Boiler plate",
    keywords: "home",
    titleTemplate: "Home - React Boiler plate",
    description: "Home of this react boiler plate",
  };

  return (
    <Layout headerTags={headerTags}>
      <PageWrapper>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
          <HeaderTitle headerTitle="Resume." />
          <a href={ResumeChaitanya} download target="_blank" rel="noreferrer">
            <Download />
          </a>
        </div>
        <img
          className="pdf"
          alt="resume"
          src={ResumeImage}
          srcSet={ResumeImage}
        />
        <Footer path="/contact">
          <p>Let’s Connect</p>
        </Footer>
      </PageWrapper>
    </Layout>
  );
};

export default Resume;
