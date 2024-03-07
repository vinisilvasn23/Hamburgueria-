import styled from "styled-components";

export const StyledContainerList = styled.div`
  display: flex;
  padding: 2rem clamp(1rem, 6%, 8rem);
  margin-bottom: 4rem;
  width: 100%;

  ul {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    align-content: flex-start;
    align-items: flex-start;
  }

  @media (min-width: 740px) {
    ul {
      flex-wrap: wrap;
      gap: 3rem;
      justify-content: center;
    }
  }
`;
