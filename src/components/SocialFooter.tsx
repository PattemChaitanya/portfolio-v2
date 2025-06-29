import styled from 'styled-components';
import { Linkedin, Github } from './icons';

const SocialMedia = styled.div`
  background: transparent;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  a {
    transition: all 1s ease;
    cursor: pointer;
    padding: 0 12px;
    &:first-child {
      padding-left: 0;
    }
  }
  svg {
    cursor: pointer;
    height: 15px;
    fill: var(--article-color);
    transition: all 1s ease;
    &:hover {
      stroke: var(--article-color);
      stroke-width: 1px;
      stroke-opacity: 0.8;
    }
  }
  @media (max-width: 992px) {
    position: fixed;
    backdrop-filter: blur(6px) saturate(2.5);
    background: var(--gray-alpha) !important;
    width: 100% !important;
    display: flex;
    padding: 0 !important;
    right: 0;
    z-index: 999;
    flex-direction: row !important;
    height: 60px !important;
    bottom: 0px !important;
    align-items: center;
    justify-content: center;
  }
`;

const SocialFooter = () => {
  return (
    <SocialMedia>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/chaitanya-pattem-6742b8139/"
        aria-label="Go To Chaitanya Pattem Linkedin Page"
        title="Linkedin Page"
      >
        <Linkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/PattemChaitanya"
        aria-label="Go To Chaitanya Pattem Github Page"
        title="Github Page"
      >
        <Github />
      </a>
    </SocialMedia>
  );
};

export default SocialFooter;
