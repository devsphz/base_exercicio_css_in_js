import React, { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import FormVagas from './components/FormVagas'
import ListaVagas from './components/ListaVagas'
import { GlobalStyle, Container } from './styles/global' // Importando o Container

function App() {
  const [filtro, setFiltro] = useState<string>('')

  const aoPesquisar = (termo: string) => {
    setFiltro(termo)
  }

  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Container>
        <FormVagas aoPesquisar={aoPesquisar} />
        <ListaVagas filtro={filtro} />
      </Container>
    </>
  )
}

export default App
