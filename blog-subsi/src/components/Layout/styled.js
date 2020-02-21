import styled from 'styled-components'

export const LayoutWrapper = styled.section `
  display: grid;
  width: 100%;
`
export const LayoutFooter = styled.footer`
  display: flex;
  background-color: yellow;
  width: 100%;
  justify-content: center;
  text-align: center;
`
export const LayoutNav = styled.nav`
  display: flex;
  min-height: 100px;
  align-content: center;
  background-color: pink;
  padding-left: 20px;
  padding-right: 20px;
`
export const LayoutLogo = styled.h1`
  display: flex;
  align-self: center;
  justify-content: start;
  font-size: 20px;
`
export const LayoutList = styled.a`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  font-size: 20px;
`
export const LayoutLink = styled.a`
  a:hover{
  color: red;
}
`

