import styled from 'styled-components'

export const LayoutNav = styled.nav`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-content: center;
  background-color: pink;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`
export const LayoutLogo = styled.h1`
  align-self: center;
  font-size: 20px;
`
export const LayoutList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: flex-end;
`
export const LayoutLink = styled.a`
  align-self: center;
  font-size: 20px;
  a:hover{
  color: red;
}
`