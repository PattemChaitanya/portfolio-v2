import { useContext } from 'react';

import Layout, { PageWrapper } from '../components/Layout';
import NextPageLink from '../components/footer';
import SocialFooter from '../components/SocialFooter';

import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { LensContext } from '../components/utils/context';
import { PageSection } from './projects';

const LensPage = () => {
  const lens = useContext(LensContext);
  return (
    <Layout title="Lens">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Lens.</h1> <br />
          <Tabs>
            <TabItems label="All">
              <MansoryLayout>
                {lens.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Ray Ban">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('ray-ban') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Persol">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('persol') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="EdBlue">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('Edblue') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Sight Relax">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('sight-relax') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <NextPageLink goto="/projects" className="mt-3 mb-5">
          Lets Go To My Projects.
        </NextPageLink>
        <SocialFooter />
        <br />
      </PageWrapper>
    </Layout>
  );
};

export default LensPage;
