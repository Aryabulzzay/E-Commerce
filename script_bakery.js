document.addEventListener("DOMContentLoaded", function () {
    
    const bakeryData = [
      { name: "Bread", price: "$2.99", description: "Freshly baked and delicious bread.", imageSrc: "images/bread.jfif" },
      { name: "Croissant", price: "$1.79", description: "Flaky and buttery croissants.", imageSrc: "images/croissant.jfif" },
      { name: "Muffins", price: "$2.49", description: "Assorted muffins for a sweet treat.", imageSrc: "images/muffins.jfif" },
      
    ];
  
    // Reference to the bakery-list container
    const bakeryListContainer = document.getElementById("bakery-list");
  
    //  create bakery cards
    bakeryData.forEach(bakery => {
      const card = document.createElement("div");
      card.classList.add("col-lg-4", "col-md-6", "mb-4");
  
      card.innerHTML = `
        <div class="card h-100">
        <img class="card-img-top" src="${bakery.imageSrc}" alt="${bakery.name}">
        <div class="card-body">
          <div class="card-body">
            <h4 class="card-title">${bakery.name}</h4>
            <h5>${bakery.price}</h5>
            <p class="card-text">${bakery.description}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      `;
  
      bakeryListContainer.appendChild(card);
    });
  });
  
