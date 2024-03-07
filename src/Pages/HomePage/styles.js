import styled from "styled-components";

export const StyledLoad = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-align: center;
  background-color: var(--color-grey-100);

  .load p {
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-700);
    color: var(--color-grey-600);
    margin-bottom: 1rem;
  }

  .load .line {
  display: inline-block;
  width: 0.9375rem;
  height: 1.2rem;
  border-radius: 0.9375rem;
  background-color: var(--color-color-primary);
  animation: loading 1.5s infinite;
}

.load .line:nth-child(2) {
  animation-delay: 0.5s;
}

.load .line:nth-child(3) {
  animation-delay: 1s;
}

@keyframes loading {
  0% {
    width: 0.9375rem;
  }
  50% {
    width: 2.1875rem;
  }
  100% {
    width: 0.9375rem;
  }
}

`;
