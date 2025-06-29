import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IconRight } from './icons';

interface INextPageLink {
  children: string | React.ReactNode;
  goto?: string;
}

const NextPageLink: React.FC<
  INextPageLink & React.AnchorHTMLAttributes<HTMLParagraphElement>
> = ({ children, goto, ...rest }) => {
  return (
    <FooterStyle>
      <Link to={`${goto}`}>
        <p {...rest}>
          {children}
          <IconRight />
        </p>
      </Link>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;

    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default NextPageLink;
