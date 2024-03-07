import { useState } from "react";
import Input from "./InputSearch";
import logo from "../../assets/img/logo-burguer.png";
import cart from "../../assets/img/cart.png";
import searchIcon from "../../assets/img/lupa.png";
import { StyledHeader } from "./style";
import ModalCart from "../CartModal";
import { StyledButtonSearch } from "../../styles/button";

function Header({ callback, cartProducts, removeFromCart, removeAllFromCart }) {
  const [inputSearch, setInputSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
    callback(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    callback(inputSearch);
  };

  return (
    <StyledHeader>
      <div className="content__logo">
        <img className="logo__burguer" src={logo} alt="logo_burguer" />
      </div>

      <div className="content__cart">
        <img src={cart} alt="icon cart" onClick={() => setIsOpen(true)} />
        <span className="count__cart">{cartProducts.length}</span>
        {isOpen ? (
          <ModalCart
            setIsOpen={setIsOpen}
            cartProducts={cartProducts}
            removeFromCart={removeFromCart}
            removeAllFromCart={removeAllFromCart}
          />
        ) : null}
      </div>
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Digitar Pesquisa"
          value={inputSearch}
          onChange={handleInputChange}
        />
        <StyledButtonSearch type="submit">
          <img src={searchIcon} alt="icon-search" />
        </StyledButtonSearch>
      </form>
    </StyledHeader>
  );
}

export default Header;
