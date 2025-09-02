async function categoryName() {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const data = await response.json();
  return data;
}

export default categoryName;
