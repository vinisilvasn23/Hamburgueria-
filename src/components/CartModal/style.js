import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;

  .modalBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    max-width: 31.25rem;
    height: 26.5rem;

    background: #fff;
  }
  .modalBox > h2 {
    width: 100%;
    background-color: var(--color-color-primary);
    color: var(--color-white);
    padding: 1rem 0;
    text-align: center;
  }
  .modalBox > ul {
    width: 100%;
    height: 11.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1.25rem;
  }

  .close__button {
    position: absolute;
    top: 5%;
    right: 4%;
    color: var(--color-white);
    font-weight: var(--font-weight-600);
  }

  .remove__all-button {
    width: 92%;
    background-color: var(--color-grey-100);
    border-radius: 0.5rem;
    height: 3.75rem;
    margin-bottom: 1.25rem;
    color: var(--color-grey-400);
    font-size: var(--font-size-16);
    font-weight: var(--font-weight-600);
  }

  .remove__all-button:hover {
    background-color: var(--color-color-primary);
    color: var(--color-white);
  }

  .not__itens-message {
    color: var(--color-grey-400);
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-600);
  }
`;
