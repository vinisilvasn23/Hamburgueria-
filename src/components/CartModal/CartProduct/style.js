import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: clamp(5rem, 80vw, 28.25rem);
  height: 5rem;

  display: flex;
  justify-content: space-between;

  .content__cart {
    width: 100%;
    height: 100%;
  }
  .content__cart > img {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;

    object-fit: contain;
    background-color: var(--color-grey-0);
    border-radius: 0.3125rem;
  }
  .content__cart > h2 {
    font-size: clamp(12px, 3vw, 18px);
    margin-left: 9px;
    margin-bottom: 50px;
  }

  .content__remove {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
