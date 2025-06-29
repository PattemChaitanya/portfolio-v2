import { useContext } from 'react';
import styled from 'styled-components';

import Layout, { PageWrapper } from '../components/Layout';
import NextPageLink from '../components/footer';
import Tabs, { TabItems } from '../components/Tabs';
import SocialFooter from '../components/SocialFooter';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/utils/context';

const Projects = () => {
  const projectsData = useContext(ProjectsContext);

  return (
    <Layout title="Project">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Projects.</h1> <br />
          <Tabs>
            <TabItems label="All">
              <MansoryLayout>
                {projectsData.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Projects">
              <MansoryLayout>
                {projectsData.map(
                  (item, index) =>
                    item.type.includes('project') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="NPM Libraries">
              <MansoryLayout>
                {projectsData.map(
                  (item, index) =>
                    item.type.includes('library') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Others">
              <MansoryLayout>
                {projectsData.map(
                  (item, index) =>
                    item.type.includes('others') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <NextPageLink goto="/resume" className="mt-1 mb-5">
          Lets Go To My Resume.
        </NextPageLink>
        <SocialFooter />
        <br />
      </PageWrapper>
    </Layout>
  );
};
export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 2.5rem 0rem 1.5rem;
    position: relative;
  }
  button {
    font-size: calc(var(--font-sm) + 1.5px);
    background: var(--mark);
    border: none;
    border-radius: 5px;
    padding: 0px 9px;
  }
  @media (max-width: 585px) {
    .intro__text {
      margin: 1rem 0 0.5rem;
    }
  }
`;

export default Projects;
