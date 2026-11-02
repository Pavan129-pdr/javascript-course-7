
// ======================================================
// JAVASCRIPT DOM + FETCH API
// 20 PRODUCT DISPLAY PRACTICE TASKS
// ======================================================

// Wait until HTML is loaded
document.addEventListener("DOMContentLoaded", () => {

    // Select HTML elements only once
    const api = document.querySelector(".api");
    const status = document.querySelector(".status");

    // Check whether elements exist
    if (!api || !status) {
        console.error("HTML elements .api or .status not found!");
        return;
    }

    // 19. Display Loading message
    api.innerHTML = "<h2>Loading...</h2>";
    status.textContent = "";

    // Fetch API
    fetch("https://fakestoreapi.com/products")

        .then((res) => {

            if (!res.ok) {
                throw new Error(`API request failed: ${res.status}`);
            }

            return res.json();
        })

        .then((data) => {

            console.log("API Data:", data);

            // Clear loading message
            api.innerHTML = "";

            // 18. Success message
            const success = document.createElement("h2");
            success.textContent = "Products loaded successfully!";
            api.appendChild(success);

            // 11. First 5 products
            const firstFive = document.createElement("section");
            firstFive.style.gridColumn = "1 / -1";

            const firstFiveHeading = document.createElement("h2");
            firstFiveHeading.textContent = "First 5 Products";
            firstFive.appendChild(firstFiveHeading);

            data.slice(0, 5).forEach((product) => {

                const item = document.createElement("div");
                item.className = "card";

                const heading = document.createElement("h2");
                heading.textContent = `ID: ${product.id} - ${product.title}`;

                const price = document.createElement("p");
                price.textContent = `Price: $${product.price}`;

                item.append(heading, price);
                firstFive.appendChild(item);
            });

            api.appendChild(firstFive);

            // Section for all products
            const allProducts = document.createElement("section");
            allProducts.style.gridColumn = "1 / -1";

            const allHeading = document.createElement("h2");
            allHeading.textContent = "All Products";
            allProducts.appendChild(allHeading);

            const productContainer = document.createElement("div");
            productContainer.className = "product-container";

            productContainer.style.display = "grid";
            productContainer.style.gridTemplateColumns =
                "repeat(auto-fit, minmax(280px, 1fr))";
            productContainer.style.gap = "20px";

            // Loop through all products
            data.forEach((product) => {

                // 14. Separate card for each product
                const card = document.createElement("div");
                card.className = "card";

                // 1. Product title in h1
                const title = document.createElement("h1");
                title.textContent = product.title;

                // 2. Product ID and title in h2
                const idTitle = document.createElement("h2");
                idTitle.textContent =
                    `ID: ${product.id} - ${product.title}`;

                // 3. First 30 characters of title
                const shortTitle = document.createElement("p");
                shortTitle.textContent =
                    product.title.slice(0, 30);

                // 4. First 100 characters of description
                const shortDescription = document.createElement("p");
                shortDescription.textContent =
                    product.description.slice(0, 100);

                // 5. Image inside a div
                const imageDiv = document.createElement("div");

                const image = document.createElement("img");
                image.src = product.image;
                image.alt = product.title;
                image.loading = "lazy";

                imageDiv.appendChild(image);

                // 6. Title, description and image in one div
                const productDetails = document.createElement("div");

                const detailTitle = document.createElement("h3");
                detailTitle.textContent = product.title;

                const detailDescription = document.createElement("p");
                detailDescription.textContent = product.description;

                const detailImage = image.cloneNode(true);

                productDetails.append(
                    detailTitle,
                    detailDescription,
                    detailImage
                );

                // 7. Price inside p
                const price = document.createElement("p");
                price.textContent = `Price: $${product.price}`;

                // 8. Category inside h3
                const category = document.createElement("h3");
                category.textContent = product.category;

                // 9. Title in uppercase
                const upperTitle = document.createElement("p");
                upperTitle.textContent =
                    product.title.toUpperCase();

                // 10. Title and character count
                const characterCount = document.createElement("p");
                characterCount.textContent =
                    `${product.title} - ${product.title.length} characters`;

                // 12. ID, title and price
                const productInfo = document.createElement("p");
                productInfo.textContent =
                    `ID: ${product.id} | ${product.title} | $${product.price}`;

                // 13. Image width 200px
                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.style.width = "200px";
                productImage.style.height = "200px";
                productImage.style.objectFit = "contain";

                // 15. Title and first 50 description characters
                const limitedDescription = document.createElement("p");
                limitedDescription.textContent =
                    `${product.title} - ${product.description.slice(0, 50)}`;

                // 16. Titles in console and webpage
                console.log("Product Title:", product.title);

                const webpageTitle = document.createElement("p");
                webpageTitle.textContent = product.title;

                // 17. Title and category in same div
                const titleCategory = document.createElement("div");

                const categoryTitle = document.createElement("p");
                categoryTitle.textContent = `Title: ${product.title}`;

                const categoryText = document.createElement("p");
                categoryText.textContent = `Category: ${product.category}`;

                titleCategory.append(categoryTitle, categoryText);

                // Add all practice elements to card
                card.append(
                    title,
                    idTitle,
                    shortTitle,
                    shortDescription,
                    imageDiv,
                    productDetails,
                    price,
                    category,
                    upperTitle,
                    characterCount,
                    productInfo,
                    productImage,
                    limitedDescription,
                    webpageTitle,
                    titleCategory
                );

                productContainer.appendChild(card);
            });

            allProducts.appendChild(productContainer);
            api.appendChild(allProducts);

            status.textContent =
                "All product data displayed successfully!";
        })

        // Handle errors
        .catch((error) => {

            console.warn("API Error:", error.message);

            api.innerHTML = "";

            const errorHeading = document.createElement("h2");
            errorHeading.textContent = "Something went wrong!";

            const errorText = document.createElement("p");
            errorText.textContent = error.message;

            api.append(errorHeading, errorText);
            status.textContent = "Unable to load products.";
        })

        // 20. Always execute after request settles
        .finally(() => {

            console.log("API request completed");

            const completedMessage = document.createElement("p");
            completedMessage.textContent = "API request completed";

            status.appendChild(completedMessage);
        });

});
