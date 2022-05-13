import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: -160px;

  div {
    background: var(--shape);
    color: var(--text-title);
    padding: 24px 32px;
    border-radius: 4px;
    margin-top: 1rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }
    &.highlight-background {
      background: var(--blue-light);
      color: #fff;
    }
  }
`;
