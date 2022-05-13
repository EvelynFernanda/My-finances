import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const LogoContainer = styled.div`
  display: flex;

  align-items: center;
  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    padding-left: 0.3rem;
    padding-right: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
