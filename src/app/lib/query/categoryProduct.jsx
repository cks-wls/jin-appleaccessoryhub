async function categoryProduct({ category }) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const data = await response.json();
  const products = data.products.map(({ id, title, price, images }) => ({
    id,
    title,
    price,
    images,
  }));
  return products;
}

export default categoryProduct;
