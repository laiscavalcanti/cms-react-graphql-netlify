import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
`
export const PostItemWrapper = styled.section`
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
    min-height: 10rem;
    padding: 1rem 3rem;
    color: white;
    border: none;
    background-color: lightgreen;
    padding: 2rem 1 rem;    
`
/*export const PostItemImg = styled(Img)`
    display: flex;
`*/
/*export const PostItemTag = styled.div`
    display:flex;
    justify-content: flex-start;
    color: blue;
    background: ${props => props.background ? props.background : 'pink'};
`
export const PostItemInfo = styled.div`
    background-color: lightskyblue;
`
export const PostItemDate = styled.div`
    display:flex;
    justify-content: flex-end;
    background-color: tomato;
`*/
export const PostItemTitle = styled.h1`
    margin: 0 auto;
    margin-top: 1rem;
    background-color: lightpink;   
`
export const PostItemDescription = styled.p`
    margin: 0 auto;
    margin-top: 1rem;
    background-color:lightsteelblue;
`