document.addEventListener("DOMContentLoaded", function () {
  // Sample fruit data (replace with your actual data)
  const fruitsData = [
    { name: "Apple", price: "$1.99", description: "A crunchy and delicious fruit.", imageSrc: "images/apple.jfif" },
    { name: "Orange", price: "$1.49", description: "A sweet and citrusy fruit.", imageSrc: "images/orange.jfif" },
    { name: "Banana", price: "$0.99", description: "A nutritious and energy-packed fruit.", imageSrc: "images/banana.jfif" },
    // Add more fruit data as needed
  ];

  // Reference to the fruit-list container
  const fruitListContainer = document.getElementById("fruit-list");

  // Dynamically create fruit cards
  fruitsData.forEach(fruit => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "mb-4");

    card.innerHTML = `
      <div class="card h-100">
        <img class="card-img-top" src="${fruit.imageSrc}" alt="${fruit.name}">
        <div class="card-body">
          <h4 class="card-title">${fruit.name}</h4>
          <h5>${fruit.price}</h5>
          <p class="card-text">${fruit.description}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;

    fruitListContainer.appendChild(card);
  });
});
