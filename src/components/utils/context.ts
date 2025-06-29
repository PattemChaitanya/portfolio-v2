import { createContext } from 'react';
import ARTICLE_DATA from '../data/articles';
import LENS_DATA from '../data/len';
import PROJECTS_DATA from '../data/projects';

export interface IAppContext {
  theme: boolean;
  show: boolean;
  handleopen?: () => void;
  closeShow?: () => void;
}

const AppContext = createContext<IAppContext>({
  theme: false,
  show: false,
  handleopen: () => {},
  closeShow: () => {},
});
export const ArticleContext = createContext(ARTICLE_DATA);
export const LensContext = createContext(LENS_DATA);
export const ProjectsContext = createContext(PROJECTS_DATA);

export default AppContext;
