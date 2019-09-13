import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const Contenedor = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.08rem;
`
const Title = styled.h1`
  margin: 0;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Contenedor>
      <Title style={{ margin: 0 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
    </Contenedor>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `CaT`,
}

export default Header
