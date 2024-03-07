import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 3.75rem;
  background-color: var(--color-white);
  border: none;
  outline: none;
  border-radius: 0.5rem;

  padding: 0 1.25rem;
  ::placeholder {
    color: var(--color-grey-100);
  }

  :focus {
    background-color: var(--color-white);
  }
`;
