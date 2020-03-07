import styled from 'styled-components'

export const LayoutNav = styled.nav`
  display: flex;
  left: 0;
  right: 0;
  z-index: 1;
  min-height: 100px;
  background-color: #fff8dc;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 1px 12px 5px -10px rgba(0,0,0,0.15);
`
export const LayoutLogo = styled.h1`
  align-self: center;
  font-size: 20px;
  a{
    color: #000723;
  }
`
export const LayoutList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding-right: 5vw;
  justify-content: flex-end;
`
export const LayoutLink = styled.a`
  align-self: center;
  letter-spacing: 1.5px;
  text-shadow: 0 0 1px rgba(255,255,255,0.4);
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', sans-serif;
  a{
    padding: 20px;
    color: #000723;
  }
  a:hover{
    opacity: 0.5;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(10px);
    background: #fff8dc;
  /*color: #bababa;*/
}
`