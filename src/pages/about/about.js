import React, { useState } from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import { timelineData } from "../../app-data/about-page";
import ModalView from "../../component/modal/modal";
import PageWrapper from "../../component/page-wrapper/page-wrapper";
import { motion } from "framer-motion";
import HeaderTitle from "../../component/page-header/header-title";

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
        <HeaderTitle headerTitle="About me." />
        <div className="timeline-container">
          {timelineData.map((timeline, index) => (
            <div className="timeline">
              {timeline.map((event, index) => (
                <article className="timeline-item">
                  <div className="timeline-dot" />
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="timeline-content">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                    </div>
                  </motion.div>
                </article>
              ))}
            </div>
          ))}
        </div>
        <Footer path="/projects">
          <p className="link-p">Checkout my work</p>
        </Footer>
      </PageWrapper>
      {isOpen && <ModalView setIsOpen={setIsOpen} />}
    </Layout>
  );
};

export default About;
