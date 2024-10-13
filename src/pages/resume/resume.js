import React from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import PageWrapper from "../../component/page-wrapper/page-wrapper";
import ResumeChaitanya from "../../assets/resume/Chaitanya-pattem.pdf";
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
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <HeaderTitle headerTitle="Resume." />
          <a
            href={ResumeChaitanya}
            download
            target="_blank"
            style={{ marginTop: "4px" }}
            rel="noreferrer"
          >
            <Download />
            Download
          </a>
        </div>
        <img
          class="pdf"
          alt="resume"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-app-49a39.appspot.com/o/Chaitanya-pattem_page-0001.jpg?alt=media&token=1b30160b-3154-4d3b-8f2c-0c4b183df355"
          style={{ marginTop: "30px" }}
        />
      </PageWrapper>
      <Footer path="/contact">
        <p>Continue to Contact</p>
      </Footer>
    </Layout>
  );
};

export default Resume;
