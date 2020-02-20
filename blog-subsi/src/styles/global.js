import { createGlobalStyle } from 'styled-components'
//@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,600&display=swap')

const GlobalStyles = createGlobalStyle `
*, 
*:after,
*:before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body{
    font-size: 100%;
    font-family: 'Playfair Display', serif;
    text-decoration: none;
    list-style-type: none;
}
`
export default GlobalStyles