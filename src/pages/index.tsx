import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { arrayRandomItem } from '../utils';
import { motion } from 'framer-motion';

import Layout, { PageWrapper } from '../components/Layout';
import NextPageLink from '../components/footer';
import SocialFooter from '../components/SocialFooter';

import { getTransitions } from '../components/utils';

const Home = () => {
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));

  return (
    <Layout>
      <PageSection color={color}>
        <PageWrapper>
          <article>
            <motion.h1
              data-text="Hey, I'm Chaitanya Pattem"
              className="intro__text"
              {...getTransitions(0.1)}
            >
              Hey, I&apos;m{' '}
              <span style={{ '--i': 1 } as React.CSSProperties}>Chaitanya</span>{' '}
              <span style={{ '--i': 2 } as React.CSSProperties}>Pattem</span>
            </motion.h1>
            <motion.p
              {...getTransitions(0.3)}
              style={{
                textDecoration: 'underline',
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              Senior Software Engineer | Web, Mobile & IoT Developer | Tech
              Enthusiast
            </motion.p>
            <motion.p {...getTransitions(0.3)}>
              I&apos;m a software developer, UX architect, and JavaScript
              engineer with a passion for turning bold ideas into elegant,
              high-performing web experiences. From crafting sleek interfaces to
              scaling complex web apps and even bridging software with hardware
              I love exploring the edge of what&apos;s possible in tech.
            </motion.p>
            <motion.p {...getTransitions(0.3)}>
              At{' '}
              <Link
                target="_blank"
                aria-label="Check out where I work"
                to="https://www.futuristiclabs.io/"
              >
                Futuristic labs
              </Link>
              , I dive into{' '}
              <Link to="/projects" aria-label="Check out my Projects">
                Projects
              </Link>{' '}
              where design meets innovation. Whether I&apos;m building
              interactive applications or architecting scalable IoT systems, I
              thrive on creating solutions that feel both intuitive and
              powerful.
            </motion.p>
            <motion.p {...getTransitions(0.5)}>
              I also enjoy writing about what I learn. My Articles are a
              collection of thoughts on frontend engineering, UX, and emerging
              technologies shaping the future of the web.
            </motion.p>
            <motion.p {...getTransitions(0.5)}>
              When I&apos;m not coding, you&apos;ll probably find me geeking out
              over the latest in tech, sketching out minimalist UI ideas, or
              vibing to a mix of Poticial and Business Podcasts.
            </motion.p>
            <motion.p {...getTransitions(0.5)}>
              Got an idea? Let&apos;s{' '}
              <Link to="/contact" aria-label="Go to Contact Page">
                Connect
              </Link>
              , I&apos;d love to help you bring it to life.
            </motion.p>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <NextPageLink goto="/about" className="mt-3 mb-5">
          Exploring more about me
        </NextPageLink>
        <SocialFooter />
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  min-height: calc(100dvh - 39vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .intro__text {
    font-size: 2.275em;
    font-weight: 500;
    margin: 2.5rem 0rem 1.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 9.9px;
    position: relative;
    -webkit-box-reflect: below -10px
      linear-gradient(transparent, rgba(0, 0, 0, 0.2));

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    & span {
      position: relative;
      display: inline-block;
      color: var(--color-tertiary);
      animation: waviy 1s infinite;
      animation-delay: calc(0.1s * var(--i));
    }
    @keyframes waviy {
      0%,
      40%,
      100% {
        transform: translateY(0);
      }

      20% {
        transform: translateY(-20px);
      }
    }
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;

    a,
    button {
      font-size: calc(var(--font-sm) + 0.9px);
      line-height: 20px;
      position: relative;
      border: none;
      font-weight: 800;
      background: transparent;
      text-transform: uppercase;
    }
  }
  /* button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${(props) => props.color};
      color: #fff;
    }
  } */
  @media (max-width: 585px) {
    margin: 2rem 0;
    display: block;
    min-height: 100%;
    .intro__text {
      margin: 1rem 0 0.5rem;
    }
  }
  @media (max-width: 989px) {
    margin: 2rem 0;
    display: block;
  }
  @media (max-width: 220px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (prefers-reduced-motion: reduce) {
    /* Stop the animation */

    .intro__text {
      animation: none;

      &::before,
      &::after {
        content: none;
      }
    }
  }
`;
export default Home;
