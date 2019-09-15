import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #eaecee;
  margin-bottom: 1rem;
  color: #273746;
  letter-spacing: 2px;
`;
const Contenedor = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.08rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem 0.8rem;
    flex-wrap: wrap;
  }
`;
const Title = styled.h1`
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
  }
`;
const StyledLink = styled((props) => <Link {...props} />)`
  color: #273746;
  text-decoration: none;
`;

const StyledMenu = styled.ul`
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const StyledMenuItem = styled((props) => <Link {...props} />)`
  color: #273746;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
  &:hover {
    margin-bottom: 2px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Contenedor>
      <Title style={{ margin: 0 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
      <StyledMenu>
        <StyledMenuItem to="/qsoft">QSOFT</StyledMenuItem>
        <StyledMenuItem to="/qsoft2">QSOFT2</StyledMenuItem>
        <StyledMenuItem to="/srp">SRP</StyledMenuItem>
      </StyledMenu>
    </Contenedor>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'CaT',
};

export default Header;
