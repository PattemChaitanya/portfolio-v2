import React, { PropsWithChildren, useContext } from 'react';

import Navbar from '../navbar';
import AppContext, { IAppContext } from '../utils/context';
import Cursor from '../cursor';
import SkipToMain from '../skip-to-main';

import { BodyStyling, Main } from './style';
import { Helmet } from 'react-helmet';

const Layout: React.FC<
  PropsWithChildren<{
    title?: string;
  }>
> = ({ children, title = 'Home' }) => {
  const { theme, show } = useContext<IAppContext>(AppContext);

  return (
    <Main>
      <BodyStyling theme={theme} />
      <Helmet>
        <title>{`${title} | Chaitanya Pattem`}</title>
        <meta
          name="msapplication-TileColor"
          content={`${theme ? '#000000' : '#FFFFFF'}`}
        />
        <meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`} />
      </Helmet>
      <SkipToMain content="main-content" />
      <Navbar />
      <Cursor />
      {!show && <>{children}</>}
    </Main>
  );
};

export const PageWrapper: React.FC<
  PropsWithChildren<object> & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className = '', ...rest }) => {
  return (
    <section {...rest} id="main-content">
      <div className={`container ${className}`}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
