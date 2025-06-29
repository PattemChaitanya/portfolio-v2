import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Layout, { PageWrapper } from '../components/Layout';
import NextPageLink from '../components/footer';
import SocialFooter from '../components/SocialFooter';

import { Date } from '../components/icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/PattemChaitanya"
                >
                  Engineering
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/PattemChaitanya"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  First impressions are powerful, and an exceptional website is
                  instrumental in making them impactful. Effective web design
                  goes beyond visual appeal—it integrates seamless functionality
                  and intuitive navigation to create a compelling user
                  experience. With a solid background as an experienced
                  programmer, I bring a unique combination of technical
                  expertise and design sensibility to every project. My ability
                  to solve complex technical challenges is matched by a
                  commitment to aesthetic excellence. Furthermore, my deep
                  understanding of established industry standards, coupled with
                  proficiency in modern development methodologies, ensures that
                  each website I create is both meticulously engineered and
                  visually refined.
                </p>
              </li>
              <li>
                <Link to="/projects" aria-label="Open Products Page">
                  Product
                </Link>
                <p>
                  I may not wear the typical product manager hat, but my
                  background in research, product design, and coordination gives
                  me a unique edge in turning bold ideas into real, working
                  products. I thrive on bringing clarity to complexity—shaping
                  concepts, aligning teams, and building momentum from the
                  ground up. With a sharp analytical mindset and a knack for
                  connecting the dots between vision and execution, I help
                  products stay true to their purpose while adapting to the real
                  world. From the spark of an idea to a fully launched
                  experience, I'm all in—contributing, collaborating, and
                  constantly pushing the boundaries of what's possible.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
        <PageWrapper aria-label="You are now in experince section">
          <article>
            <h4>My Experience Lens.</h4>
            <ul className="timeline">
              <li>
                <Link to="/resume">My Futuristic Experience </Link>
                <Link to="/resume" className="float-right" id="cardHover">
                  Sep 22 - Present
                </Link>
                <p>
                  Built and led end-to-end development of impactful full-stack
                  projects, from a dynamic recipe blog platform (klynk.recipes)
                  with SSR, Firebase, and personalized subdomains, to a
                  real-time IoT desktop app powered by Electron and React.
                  Engineered blazing-fast WebSocket communication and smart
                  CI/CD pipelines with GitHub Actions to speed up deployments.
                  Streamlined backend architecture with scalable APIs and clean
                  data models, slashing duplication by 60%. Along the way, I
                  mentored teammates and ran sprints that turned ideas into
                  polished, high-performing products.{' '}
                  <strong>
                    Tech stack: React, Next.js, Node.js, Firebase, Electron,
                    Google Cloud.
                  </strong>
                </p>
              </li>
              <li>
                <Link to="/resume">My Freelance Experience</Link>
                <Link to="/resume" className="float-right" id="cardHover">
                  Apr 21 - May 22
                </Link>
                <p>
                  Developed responsive landing pages, portfolios, and a
                  real-time chat app using React.js. Built clean, reusable
                  components to enhance maintainability and speed up
                  development. Integrated MongoDB for storing user and message
                  data, enabling seamless backend communication and reliable
                  performance across applications. Focused on delivering
                  efficient, user-friendly web experiences.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
        <PageWrapper aria-label="You are now in my read section">
          <article>
            <h4>My Reads.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Google Developer Initiatives"
                  href="https://web.dev/"
                >
                  Fueling Growth with Google Developer Initiatives{' '}
                  <small>web.dev</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2021 - present</b>
                </a>
                <p>
                  An engaged participant in Google Developer Learning
                  Initiatives, continuously honing my skills with cutting-edge
                  technologies. I thrive in a dynamic community, tackling
                  hands-on projects and pushing my growth as a developer through
                  real-world, collaborative learning experiences.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <NextPageLink goto="/projects" className="mt-1 mb-5">
          Lets Continue To Projects
        </NextPageLink>
        <SocialFooter />
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 2.5rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
    .intro__text {
      margin: 1rem 0 0.5rem;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
