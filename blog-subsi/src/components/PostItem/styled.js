import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled.section`
    display: flex;
    &:hover{
    opacity: 0.5;
    transition: opacity 0.5s, transform 0.3s;
    background: #fff8dc;
  }
`
export const PostItemWrapper = styled(Link)`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem 3rem;
    margin: 10px;
    background-color: lightgreen;
    color: white;
    
`
export const PostItemTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    background: ${props => props.background ? props.background : 'pink'};
`
export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightskyblue;
`
export const PostItemDate = styled.div`
    background-color: tomato;
`
export const PostItemTitle = styled.h1`
    background-color: lightpink;
`
export const PostItemDescription = styled.p`
    
    background-color:lightsteelblue;
`