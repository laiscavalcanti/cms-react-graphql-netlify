import styled from 'styled-components'

export const MenuBarWrapper = styled.aside`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 3.75rem;
    width: 100%;
    position: absolute;
    bottom: 11rem;
    right: 0;

`
export const MenuBarList = styled.div`
    display: flex;
    flex-direction: row;
`
export const MenuBarItem = styled.span`
    width: 30px;
    height: 30px;
    color: rgba(0,0,0,0.15);
    cursor: pointer;
    margin: 10px;
    &:last-child{
        width: 45px;
        height: 45px;
        margin-left: 10px;
    }
`