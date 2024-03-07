import styled from "styled-components";

export const StyledButton = styled.button`
  background: var(--color-grey-300);
  width: 6.625rem;
  height: 2.5rem;
  color: var(--color-white);
  border-radius: 0.5rem;
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-600);

  :hover {
    background: var(--color-color-primary);
  }
`;

export const StyledButtonSearch = styled.button`
    background-color: var(--color-color-primary);
    width: 3.3125rem;
    height: 2.5rem;
    border-radius: 0.5rem;

    position: absolute;
    right: 3%;
    top: 18%;
`