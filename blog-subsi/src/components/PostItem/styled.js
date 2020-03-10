import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
    display: flex;
    background-color: red;
    position: absolute;
    justify-content: center;
    align-items: center;
    right: auto;
    bottom: 0;
`
export const PostItemWrapper = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem;
    background-color: pink;
`
export const PostItemTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: black;
    background: lightsalmon;
`
   
export const PostItemInfo = styled.div``

export const PostItemDate = styled.time``

export const PostItemTitle = styled.h1``

export const PostItemDescription = styled.p``