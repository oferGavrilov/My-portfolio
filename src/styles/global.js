import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    scroll-behavior: smooth !important;
    scrollbar-width: thin;
    scrollbar-color: #878787 #D9D9D9;
  
    &::-webkit-scrollbar {
        width: 8px;
        cursor: pointer;
    }
  
    &::-webkit-scrollbar-track {
        background: #D9D9D9;
    }
  
    &::-webkit-scrollbar-thumb {
        border-radius: 25px;
        background-color: #A6A5A5;
        cursor: pointer;
    }
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`
export default GlobalStyles
