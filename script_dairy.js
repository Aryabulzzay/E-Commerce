document.addEventListener("DOMContentLoaded", function () {
    // Sample dairy product data (replace with your actual data)
    const dairyData = [
      { name: "Milk", price: "$2.49", description: "Fresh and nutritious cow's milk.", imageSrc: "images/milk.jfif" },
      { name: "Cheese", price: "$3.99", description: "Various types of delicious cheeses.", imageSrc: "images/cheese.jfif" },
      { name: "Yogurt", price: "$1.99", description: "Creamy and probiotic-rich yogurt.", imageSrc: "images/yogurt.jfif" },
      // Add more dairy data as needed
    ];
  
    // Reference to the dairy-list container
    const dairyListContainer = document.getElementById("dairy-list");
  
    // Dynamically create dairy cards
    dairyData.forEach(dairy => {
      const card = document.createElement("div");
      card.classList.add("col-lg-4", "col-md-6", "mb-4");
  
      card.innerHTML = `
        <div class="card h-100">
        <img class="card-img-top" src="${dairy.imageSrc}" alt="${dairy.name}">
          <div class="card-body">
            <h4 class="card-title">${dairy.name}</h4>
            <h5>${dairy.price}</h5>
            <p class="card-text">${dairy.description}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      `;
  
      dairyListContainer.appendChild(card);
    });
  });
  