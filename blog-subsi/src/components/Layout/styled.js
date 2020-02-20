import styled from 'styled-components'

export const LayoutWrapper = styled.section `
  display: grid;
  width: 100%;
`
export const LayoutFooter = styled.footer`
  display: grid;
  background-color: yellow;
  width: 100%;
  text-align: center;
`
export const LayoutNav = styled.nav`
  display: grid;
  min-height: 50px;
  grid-auto-flow: column;
  background-color: pink;
  text-decoration: none;
  grid-gap: 40px;
  padding-left: 20px;
  padding-right: 20px;
`
export const LayoutLogo = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  text-decoration: none;
`
export const LayoutA = styled.a`
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  align-content: center;
`