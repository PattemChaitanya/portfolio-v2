import React from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import PageWrapper from "../../component/page-wrapper/page-wrapper";
import ResumeChaitanya from "../../assets/resume/Chaitanya-pattem.jpg";

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
        <p>Resume</p>
        <a href={ResumeChaitanya} rel="noreferrer" target="_blank">
          Download
        </a>
        <img class="pdf" alt="resume" src={ResumeChaitanya}></img>
      </PageWrapper>
      <Footer path="/contact">
        <p>Continue to Contact</p>
      </Footer>
    </Layout>
  );
};

export default Resume;
