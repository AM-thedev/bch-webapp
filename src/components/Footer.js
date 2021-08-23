import React from 'react'
import styled from 'styled-components'


const FooterStyle = styled.footer`
  background: #0a365c;
  margin-top: auto;
`

const P = styled.p`
  color: #f1f8fd;
`

const A = styled.a`
color: #f1f8fd;
`

const Footer = () => {

  return (
    <FooterStyle>
      <P>Made in under 5 hours by <A target="_blank" href="https://github.com/AM-thedev">AM-thedev</A> with <A target="_blank" href="https://reactjs.org">React</A>, <A target="_blank" href="https://redux.js.org">Redux</A>, and <A target="_blank" href="https://www.styled-components.com">Styled-Components</A>.  BCH price api and news feed supplied by <A target="_blank" href="https://www.bitcoin.com">bitcoin.com</A>.</P>
    </FooterStyle>
  )
}

export default Footer