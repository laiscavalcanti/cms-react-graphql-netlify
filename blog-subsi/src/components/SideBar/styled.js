import styled from 'styled-components'

export const LayoutNav = styled.nav`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  min-height: 100px;
  background-color: #112432;
  padding-left: 20px;
  padding-right: 20px;
`
export const LayoutLogo = styled.h1`
  align-self: center;
  font-size: 20px;
  a{
    color: #d0d1d3;
  }
`
export const LayoutList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding-left: 30px;
  justify-content: space-around;
`
export const LayoutLink = styled.a`
  align-self: center;
  font-size: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  a{
    padding: 20px;
    color: #d0d1d3;
  }
  a:hover{
  color: #bababa;
}
`