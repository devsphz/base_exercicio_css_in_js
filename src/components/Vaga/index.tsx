import React from 'react'
import { VagaContainer, VagaTitulo, VagaDetalhes, VagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>
    <VagaDetalhes>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </VagaDetalhes>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga
