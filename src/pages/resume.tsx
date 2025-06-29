import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Layout, { PageWrapper } from '../components/Layout';
import NextPageLink from '../components/footer';
import SocialFooter from '../components/SocialFooter';

const Resume = () => {
  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
          <article>
            <h1 className="intro__text">Resume.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <Link to="/contact">contact page</Link>
              </b>{' '}
              .{' '}
              <b>
                <a
                  href={
                    'https://firebasestorage.googleapis.com/v0/b/portfolio-app-49a39.appspot.com/o/Pattem_Chaitanya.pdf?alt=media&token=25bc76e2-28b1-40a1-a8d0-7d8a5b6296cb'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page and Download Resumé"
                >
                  view & download
                </a>
              </b>{' '}
              the resume{' '}
            </p>
          </article>
          <br />
          <object
            data="https://firebasestorage.googleapis.com/v0/b/portfolio-app-49a39.appspot.com/o/Pattem_Chaitanya.pdf?alt=media&token=25bc76e2-28b1-40a1-a8d0-7d8a5b6296cb"
            type="application/pdf"
            width="100%"
            height="780"
          >
            <p>
              This browser does not support PDFs. Please download the PDF to
              view it:
              <a
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-app-49a39.appspot.com/o/Pattem_Chaitanya.pdf?alt=media&token=25bc76e2-28b1-40a1-a8d0-7d8a5b6296cb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </p>
          </object>
        </PageSection>
        <br />
        <br />
        <NextPageLink goto="/contact" className="mt-3 mb-5">
          Are you convinced to contact me now ?
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
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
  @media (max-width: 585px) {
    .intro__text {
      margin: 1rem 0 0.5rem;
    }
  }
`;
export default Resume;
