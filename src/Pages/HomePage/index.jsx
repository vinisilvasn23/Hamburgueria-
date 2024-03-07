import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import ProductList from "../../components/ProductList";
import { StyledLoad } from "./styles";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product) {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCartProducts = cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartProducts(updatedCartProducts);
    } else {
      const updatedProduct = { ...product, quantity: 1 };
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        updatedProduct,
      ]);
    }
  }

  function removeFromCart(productId) {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.reduce((updatedProducts, product) => {
        if (product.id === productId) {
          if (product.quantity > 1) {
            updatedProducts.push({
              ...product,
              quantity: product.quantity - 1,
            });
          }
        } else {
          updatedProducts.push(product);
        }
        return updatedProducts;
      }, []);
    });
  }

  function removeAllFromCart() {
    setCartProducts([]);
  }

  const filteredProducts = products.filter((product) =>
    product.name.toUpperCase().includes(inputSearch.toUpperCase())
  );

  useEffect(() => {
    setIsLoading(true);

    const getProducts = async () => {
      try {
        const response = await api.get("/products", {});

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  function handleForm(inputSearchName) {
    setInputSearch(inputSearchName);
  }

  if (isLoading) {
    return (
      <StyledLoad>
        <div class="load">
          <p>Carregando...</p>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </StyledLoad>
    );
  }

  return (
    <>
      <Header
        callback={handleForm}
        cartProducts={cartProducts}
        removeFromCart={removeFromCart}
        removeAllFromCart={removeAllFromCart}
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </>
  );
}

export default HomePage;
