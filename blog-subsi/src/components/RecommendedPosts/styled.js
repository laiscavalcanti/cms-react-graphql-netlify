import styled from 'styled-components'
import { Link } from 'gatsby'

export const RecommendedWrapper = styled.section `
    display: flex;
    border-top: 1px solid yellow;
    border-bottom: 1px solid yellow;
   position: absolute;
`
export const RecommendedLink = styled(Link) `
  align-items: center;
  background: #192734;
  color: #1fa1f2;
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
    &:hover{
        background: lightsalmon;
    }
    &.previous{
        border-right: 1px solid pink;
        
    }
    &.next{
        justify-content: flex-end;
    }
    &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  } 
`