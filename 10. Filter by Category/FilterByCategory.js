function filterByCategory(products) {
    return function(category) {
      return products.filter(function(product) {
        return product.category === category;
      });
    }
  }
  
  var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  
  var clothingProducts = filterByCategory(products)("Clothing");
  
  console.log(clothingProducts);
  // Output: [{name: "Shirt", category: "Clothing"}, {name: "Pants", category: "Clothing"}]
  