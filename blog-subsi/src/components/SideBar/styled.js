import styled from 'styled-components'
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  position: absolute;
  justify-content: flex-end;
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
export const LayoutList = styled.li`
    padding: 20px;
    .active{
      color: #bc8f8f;
    }
`
export const LayoutLink = styled(Link)`
  color: #000723;
  letter-spacing: 1.5px;
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover{
    opacity: 0.5;
    transition: opacity 0.5s, transform 0.3s;
    background: #fff8dc;
}
`