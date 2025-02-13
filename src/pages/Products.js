import Header from "../components/Header";

export default function Products() {
  return (
    <div>
      <Header />
      <div id="products">
        <div class="product">
          <button onClick={() => window.open("/product/product-1", "_self")}>
            Product 1
          </button>
        </div>
        <div id="product">
          <button onClick={() => window.open("/product/product-2", "_self")}>
            Product 2
          </button>
        </div>
        <div id="product">
          <button onClick={() => window.open("/product/product-3", "_self")}>
            Product 3
          </button>
        </div>
      </div>
    </div>
  );
}
