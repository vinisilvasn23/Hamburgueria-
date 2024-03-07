import { StyledInput } from "./style";

function Input({ type, onChange, placeholder }) {
  return (
    <>
      <StyledInput type={type} onChange={onChange} placeholder={placeholder} />
    </>
  );
}

export default Input;
