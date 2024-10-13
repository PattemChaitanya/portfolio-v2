import React, { useEffect } from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/footer/footer";
import { Link } from "react-router-dom";
import PageWrapper from "../../component/page-wrapper/page-wrapper";
import { globalAnalytics } from "../../config/firebase-analytics";
import { getDeviceInfo } from "../../config/user-details";
import { firebaseCallingFunctions } from "../../config/firebase-functions";

const Home = () => {
  const headerTags = {
    title: "Home | Chaitanya Pattem",
    keywords: "Home",
    titleTemplate: "Home | Chaitanya Pattem",
    description: "Home of this porfolio of chaitanya's website",
  };

  const gettingDetails = async () => {
    const deviceInfo = await getDeviceInfo();
    firebaseCallingFunctions("post", deviceInfo);
    globalAnalytics({
      eventName: "viewer_home_page",
      type: "pageOnEnter",
    });
  };

  useEffect(() => {
    process.env.NODE_ENV !== "development" && gettingDetails();
  }, []);

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
          <h1 className="home-h1">I'm Chaitanya Pattem</h1>
          <p className="home-p1">
            I'm committed to continuous learning and innovation.
          </p>
          <p className="home-p2">
            I'm a software engineer specializing in building and scaling Web and
            IOT applications using modern frameworks like Node.js, Express.js,
            Electron.js and React.js. I have demonstrated ability to work within
            Agile teams to deliver high-quality software solutions at{" "}
            <Link
              target="_blank"
              to="https://www.futuristiclabs.io/"
              style={{ color: "#e15916" }}
            >
              Futuristic labs
            </Link>
          </p>
        </div>
      </PageWrapper>
      <Footer path="/about">
        <p className="link-p">Continue to About</p>
      </Footer>
    </Layout>
  );
};

export default Home;
