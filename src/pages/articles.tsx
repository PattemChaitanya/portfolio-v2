import { useContext } from 'react';

import Layout, { PageWrapper } from '../components/Layout';
import NextPageLink from '../components/footer';
import Tabs, { TabItems } from '../components/Tabs';
import SocialFooter from '../components/SocialFooter';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ArticleContext } from '../components/utils/context';
import { PageSection } from './projects';

const Articles = () => {
  const articles = useContext(ArticleContext);
  return (
    <Layout title="Articles">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Reads.</h1> <br />
          <Tabs>
            <TabItems label="All">
              <MansoryLayout>
                {articles.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Articles">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('article') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Readings">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('reading') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Videos">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('video') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <NextPageLink goto="/contact" className="mt-3 mb-5">
          Lets Continue To Contact
        </NextPageLink>
        <SocialFooter />
        <br />
      </PageWrapper>
    </Layout>
  );
};

export default Articles;
