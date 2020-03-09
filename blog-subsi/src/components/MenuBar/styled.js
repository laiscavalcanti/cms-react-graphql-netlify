import styled from 'styled-components'

export const MenuBarWrapper = styled.aside`
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    flex-direction: row;
    justify-content: center;
    position: fixed;
    height: 3.75rem;
`
export const MenuBarList = styled.div`
    display: flex;
    flex-direction: row;
`
export const MenuBarItem = styled.span`
    position: relative;
    width: 30px;
    height: 30px;
    color: rgba(0,0,0,0.15);
    cursor: pointer;
    margin: 10px;
    &:last-child{
        width: 40px;
        height: 40px;
        margin-left: 10px;
    }
`