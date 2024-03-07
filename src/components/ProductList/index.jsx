import Product from "./Product";
import { StyledContainerList } from "./style";

function ProductList({ products, addToCart }) {
  return (
    <StyledContainerList>
      <ul>
        {products.map((product) => (
          <Product key={product.id} {...product} addToCart={addToCart} />
        ))}
      </ul>
    </StyledContainerList>
  );
}

export default ProductList;
