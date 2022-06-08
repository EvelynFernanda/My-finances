import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTranslationModalOpen(true);
  };
  const handleCloseNewTransactionModal = () => {
    setIsNewTranslationModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
};
