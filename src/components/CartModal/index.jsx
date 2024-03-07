import { useEffect, useRef } from "react";
import { StyledModal } from "./style";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import { StyledTitle } from "../../styles/tipography";

function ModalCart({
  setIsOpen,
  cartProducts,
  removeFromCart,
  removeAllFromCart,
}) {
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  function handleKeydown(event) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  function handleRemoveAll() {
    const confirmed = window.confirm(
      "Tem certeza que deseja remover todos os itens do carrinho?"
    );

    if (confirmed) {
      removeAllFromCart();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    const handleOutclick = (event) => {
      if (
        !buttonRef.current?.contains(event.target) &&
        !modalRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return (
    <StyledModal role="dialog">
      <div className="modalBox" ref={modalRef}>
        <StyledTitle>Carrinho de compras</StyledTitle>
        <ul>
          {cartProducts.length === 0 ? (
            <div className="not__itens-message">
              Você ainda não adicionou itens ao carrinho
            </div>
          ) : (
            cartProducts.map((product) => (
              <CartProduct
                key={product.id}
                {...product}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </ul>

        <button
          className="close__button"
          ref={buttonRef}
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        <CartTotal cartProducts={cartProducts} />
        {cartProducts.length > 0 && (
          <button className="remove__all-button" onClick={handleRemoveAll}>
            Remover Todos
          </button>
        )}
      </div>
    </StyledModal>
  );
}

export default ModalCart;
