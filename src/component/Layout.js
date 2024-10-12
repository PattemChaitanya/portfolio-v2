import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CursorFollower from "./cursor/cursor";
import TimeLapseTheme from "./time-lapse/theme-manager";
import Navbar from "./navbar/navbar";

function Layout(props) {
  const {
    headerTags: { title, description, keywords, titleTemplate },
    children,
  } = props;
  const [allTags, setAllTags] = useState([]);

  const getTitles = () => {
    const titles = [];
    if (title) {
      titles.push(<title key="head_title">{title}</title>);
      titles.push(<meta key="og_title" property="og:title" content={title} />);
      titles.push(
        <meta
          key="og_description"
          property="og:description"
          content={description}
        />
      );
      titles.push(
        <meta key="twitter_title" property="twitter:title" content={title} />
      );
    }
    return titles;
  };

  const getKeyWords = () => {
    const collection = [];
    if (keywords) {
      collection.push(
        <meta key="head_keywords" property="keywords" content={keywords} />
      );
    }
    return collection;
  };

  useEffect(() => {
    const titles = getTitles();
    const keyWords = getKeyWords();

    const tags = [...titles, ...keyWords];
    setAllTags(tags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, keywords]);

  return (
    <main>
      {allTags.length && (
        <Helmet titleTemplate={titleTemplate}>{allTags}</Helmet>
      )}
      <Navbar />
      <CursorFollower />
      <TimeLapseTheme />
      {children}
    </main>
  );
}

export default Layout;
