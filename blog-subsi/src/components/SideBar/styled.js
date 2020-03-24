import styled from 'styled-components'
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  width: 100%;
  top: 0;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #fff8dc;
  box-shadow: 1px 12px 5px -10px rgba(0,0,0,0.15);
  &:hover{
    opacity: 0.5;
    transition: opacity 0.5s, transform 0.3s;
    background: #fff8dc;
  }
`

export const LayoutList = styled.li`
    padding: 0px 20px;
    margin: 5px;
    .active{
      color: #bc8f8f;
    }
`
export const LayoutLink = styled(Link)`
  color: #000723;
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover{
    opacity: 0.5;
    transition: opacity 0.5s, transform 0.3s;
    background: #fff8dc;
}
`