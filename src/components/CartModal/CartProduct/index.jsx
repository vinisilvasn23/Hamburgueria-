import { StyledCartProduct } from "./style";
import iconRemove from "../../../assets/img/lixeira.png";

function CartProduct({ img, name, id, quantity, removeFromCart }) {
  function handleRemoveFromCart() {
    removeFromCart(id);
  }

  return (
    <StyledCartProduct>
      <div className="content__cart">
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="content__remove">
        <button onClick={handleRemoveFromCart}>
          <img src={iconRemove} alt="remover item" />
        </button>
        <p>{quantity}x</p>
      </div>
    </StyledCartProduct>
  );
}

export default CartProduct;
