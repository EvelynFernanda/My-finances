import { Sumary } from "../Sumary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashboard = (): JSX.Element => {
  return (
    <Container>
      <Sumary />
      <TransactionsTable />
    </Container>
  );
};
