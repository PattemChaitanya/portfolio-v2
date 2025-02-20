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
        <h1 className="waviy">
          Hey, I'm <span style={{ "--i": 1 }}>Chaitanya</span>{" "}
          <span style={{ "--i": 2 }}>Pattem</span>
        </h1>
        <section className="home-page-container">
          <p id="home-role">
            Software Engineer | Web & IoT Developer | Tech Enthusiast
          </p>
          <p>
            I’m a frontend developer, UX architect, and JavaScript engineer who
            loves turning ideas into beautiful, functional web experiences.
            Whether it’s crafting sleek interfaces, scaling web apps, or merging
            software with hardware, I enjoy pushing the limits of what’s
            possible.
          </p>
          <p>
            At{" "}
            <Link
              id="home-link"
              target="_blank"
              to="https://www.futuristiclabs.io/"
            >
              Futuristic labs
            </Link>
            , I work on cutting-edge projects that blend creativity with
            technology. Some of my favorite work lives in my{" "}
            <Link id="home-link" to="/projects">
              Projects
            </Link>{" "}
            from interactive web applications to scalable IoT solutions. I also
            love sharing insights, so check out my Articles for thoughts on
            frontend development, UX, and emerging tech.
          </p>
          <p>
            When I’m not coding, you’ll probably find me exploring minimal
            design, geeking out over new tech, or vibing to Pop & Jazz.{" "}
            <Link id="home-link" to="/contact">
              Contact Me
            </Link>
            , let’s build something amazing together!
          </p>
        </section>
        <Footer path="/about">
          <p className="link-p">Exploring more about me</p>
        </Footer>
      </PageWrapper>
    </Layout>
  );
};

export default Home;
