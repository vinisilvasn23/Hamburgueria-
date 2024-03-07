import { StyledButton } from "../../../styles/button";
import {
  StyledParagraph,
  StyledParagraphSmall,
  StyledTitle,
} from "../../../styles/tipography";
import { StyledCard } from "./style";

function Product({ img, name, category, price, id, addToCart }) {
  function handleAddToCart() {
    addToCart({ img, name, price, id });
  }
  const valueBrl = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledCard>
      <img src={img} alt={name} />

      <div className="content__information">
        <StyledTitle>{name}</StyledTitle>
        <StyledParagraphSmall>{category}</StyledParagraphSmall>
        <StyledParagraph>{valueBrl}</StyledParagraph>
        <StyledButton onClick={handleAddToCart}>Adicionar</StyledButton>
      </div>
    </StyledCard>
  );
}

export default Product;
