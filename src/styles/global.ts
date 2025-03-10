import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5e7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
     background-color: #f5f5f5;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
