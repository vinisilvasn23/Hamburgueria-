import styled from "styled-components";

export const StyledCartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--color-grey-100);
  width: 92%;
  padding: 1.5625rem 0;
  margin-top: 1rem;

  span {
    color: var(--color-grey-400);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-600);
  }
`;
