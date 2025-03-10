import styled from 'styled-components'

export const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    ${VagaLink} {
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  font-family: Lato, sans-serif;
  margin-bottom: 16px;
`

export const VagaDetalhes = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    font-family: Lato, sans-serif;
  }
`
