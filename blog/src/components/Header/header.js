import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from "styled-components"
import { H1 } from "../Heading"
import { Section } from "../Section"
//import { Search } from "styled-icons/feather"
//import { IconButton } from "../Button"
import { Flex } from "rebass"
import { SearchButton } from "../Button"

const Outer = styled.header`
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0px;
  //messed with header

  max-width: 99%;
  padding: 1.45rem 1.0875rem;
`
/*const H1 = styled.h1`
  margin: 0px;
`
*/

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: purple;
  }
  margin: 0 10px;
`
const Image = styled.img`
  margin: 0;
`
const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const Title = styled(H1)`
  flex: 4;
`
const MediaQuery = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`
const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Section flex>
        <Section
          width={1 / 12}
          flex
          flexDirection="colum"
          justifyContent="Center"
        >
          <ThemeConsumer>
            {theme => <Image src={theme.images.mainHeaderImage} />}
          </ThemeConsumer>
        </Section>
        <Section
          width={11 / 12}
          flex
          flexDirection="colum"
          justifyContent="Center"
        >
          <Nav>
            <Title>
              <StyledLink to="/">{siteTitle}</StyledLink>
            </Title>
            <MediaQuery>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </MediaQuery>
            <SearchButton variants="contrast" />
          </Nav>
        </Section>
      </Section>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
