import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e o texto React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Desctiption>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Desctiption>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com um código."
    />
  </S.Wrapper>
)

export default Main
