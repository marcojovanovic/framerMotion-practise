import React from 'react'
import {createGlobalStyle} from 'styled-components'

function GlobalStyle() {


  return (
    <div>
      
    </div>
  )
}


export const GlobalStyled = createGlobalStyle`
  body {
    background: ${props => (props.whiteColor ? 'white' : '#333')};
    margin:0;
    padding:0;
    box-sizing:border-box;
    overflow:hidden;
    z-index:-3;
  }
`


export default GlobalStyle
