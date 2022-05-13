import logoImg from "../../assets/logo.svg";
import { Container, Content, LogoContainer } from "./styles";

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <p>My finances</p>
          <img src={logoImg} alt="dt Money" />
        </LogoContainer>

        <button>Nova transação</button>
      </Content>
    </Container>
  );
};
