import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt Money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};
