document.addEventListener("DOMContentLoaded", function () {
    // Sample vegetable data (replace with your actual data)
    const vegetablesData = [
      { name: "Carrot", price: "$0.99", description: "A crunchy and nutritious vegetable.", imageSrc: "images/carrot.jfif" },
      { name: "Broccoli", price: "$1.49", description: "A green vegetable packed with vitamins.", imageSrc: "images/broccoli.jfif" },
      { name: "Spinach", price: "$1.99", description: "A leafy green with iron and antioxidants.", imageSrc: "images/spinach.jfif" },
      // Add more vegetable data as needed
    ];
  
    // Reference to the vegetable-list container
    const vegetableListContainer = document.getElementById("vegetable-list");
  
    // Dynamically create vegetable cards
    vegetablesData.forEach(vegetable => {
      const card = document.createElement("div");
      card.classList.add("col-lg-4", "col-md-6", "mb-4");
  
      card.innerHTML = `
        <div class="card h-100">
        <img class="card-img-top" src="${vegetable.imageSrc}" alt="${vegetable.name}">
          <div class="card-body">
            <h4 class="card-title">${vegetable.name}</h4>
            <h5>${vegetable.price}</h5>
            <p class="card-text">${vegetable.description}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      `;
  
      vegetableListContainer.appendChild(card);
    });
  });
  