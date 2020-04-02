import styled from 'styled-components'
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-direction: row;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  height: 8.5vh;
  padding-bottom: 0.5rem;
  margin:1rem  2rem 0rem 2rem ;
  background-color: white;
  border-bottom: 2px solid black;
`
export const LayoutList = styled.li`
  padding: 0px 1.5rem;
    .active{
      color: #bc8f8f;
    }
`
export const LayoutLink = styled(Link)`
  color: black;
  letter-spacing: 0.005rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Gotu', sans-serif;
  &:hover{
    opacity: 0.5;
    transition: opacity 0.5s, transform 0.3s;
    background: #ffffff;
}
`