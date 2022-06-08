import logoImg from "../../assets/logo.svg";

import { Container, Content, LogoContainer } from "./styles";

type HeaderPros = {
  onOpenNewTransactionModal: () => void;
};

export const Header = ({
  onOpenNewTransactionModal,
}: HeaderPros): JSX.Element => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <p>My finances</p>
          <img src={logoImg} alt="dt Money" />
        </LogoContainer>

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
