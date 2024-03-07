import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--color-grey-0);
  display: flex;
  padding: 1.25rem 0;
  padding-left: clamp(0.5rem, 5%, 6rem);
  padding-right: clamp(0.5rem, 5%, 6rem);
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.125rem;

  .content__logo {
    width: 60%;
  }

  .logo__burguer {
    max-width: 9.875rem;
    height: auto;
    object-fit: contain;
  }

  .content__cart {
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    padding-right: 10px;
  }

  .content__cart > img {
    height: 1.5625rem;
    object-fit: contain;
  }

  .count__cart {
    width: 1.25rem;
    height: 1.5rem;
    background-color: var(--color-color-primary);
    color: var(--color-white);
    font-size: var(--font-size-14);
    font-weight: 700;
    border-radius: 0.4375rem;
    padding: 3px;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
  }

  form {
    width: clamp(0.5rem, 100%, 22.8rem);
    display: flex;
    position: relative;
  }
`;
