import { StyledParagraph } from "../../../styles/tipography";
import { StyledCartTotal } from "./style";

function CartTotal({ cartProducts }) {
  function calculateTotalPrice() {
    const totalPrice = cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    const valueBrl = totalPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return valueBrl;
  }

  return (
    <StyledCartTotal>
      <StyledParagraph>Total</StyledParagraph>
      <span>{calculateTotalPrice()}</span>
    </StyledCartTotal>
  );
}
export default CartTotal;
