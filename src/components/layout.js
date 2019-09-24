import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledBody = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 0;
`;

const Layout = ({ children, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return (
    <>
      <Helmet
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      />
      <Header siteTitle={site.siteMetadata.title} />
      <StyledBody>
        <StyledMain>
          {children}
        </StyledMain>
      </StyledBody>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,

};

export default Layout;
