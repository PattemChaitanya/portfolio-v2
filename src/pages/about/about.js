import React, { useState } from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import { professionallySkills, selfIntro } from "../../app-data/about-page";
import Chip from "../../component/chip/chip";
import ModalView from "../../component/modal/modal";
import PageWrapper from "../../component/page-wrapper/page-wrapper";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerTags = {
    title: "About | Chaitanya Pattem",
    keywords: "about",
    titleTemplate: "About | Chaitanya Pattem",
    description: "About of this porfolio of chaitanya's website",
  };

  return (
    <Layout headerTags={headerTags}>
      <PageWrapper>
        <h2 className="about-h2">About me</h2>
        <div className="about-content">
          <p>{selfIntro.para1}</p>
          <p>{selfIntro.para2}</p>
          <p>{selfIntro.para3}</p>
        </div>
        <h2 className="about-h2">Professionally Skills</h2>
        <div className="about-content">
          <ul className="paddingInlineStart">
            {professionallySkills.pointsToShow.slice(0, 2).map((item) => (
              <li>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <p
            style={{
              color: "red",
              opacity: 0.6,
              textDecoration: "underline",
              cursor: "pointer",
              marginTop: "-12px",
            }}
            onClick={() => setIsOpen(true)}
          >
            Read more
          </p>
          <ui>
            <h2 style={{ marginLeft: "-6px", paddingBottom: "8px" }}>
              Skills I know & used
            </h2>
            {Object.keys(professionallySkills.skills).map((item) => (
              <>
                <li style={{ paddingBottom: "6px" }}>{item}</li>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    paddingBottom: "8px",
                  }}
                >
                  {professionallySkills.skills[item].map((item) => (
                    <Chip displayName={item} />
                  ))}
                </div>
              </>
            ))}
          </ui>
        </div>
      </PageWrapper>
      <Footer path="/projects">
        <p className="link-p">Continue to Projects</p>
      </Footer>
      {isOpen && <ModalView setIsOpen={setIsOpen} />}
    </Layout>
  );
};

export default About;
