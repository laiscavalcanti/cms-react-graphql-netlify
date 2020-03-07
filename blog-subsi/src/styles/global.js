import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `
*, 
*:after,
*:before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
    text-decoration: none;
}

body{
    font-size: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    list-style-type: none;
    background-color: #fff8dc;
}
`
export default GlobalStyles