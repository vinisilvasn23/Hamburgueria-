import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 18.75rem;
  height: 21.625rem;

  border: 2px solid var(--color-grey-100);
  border-radius: 0.3125rem;

  img {
    height: 9.375rem;
    object-fit: contain;
    background-color: var(--color-grey-0);
  }

  .content__information {
    margin: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }
  .content__information > p {
    color: var(--color-color-primary);
  }

  :hover {
    border: 2px solid var(--color-color-primary);
  }
`;
