document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-view-card");

    productCards.forEach(card => {
        const productBottom = card.querySelector(".product-view-card-bottom");

        if (productBottom) {
            const name = productBottom.getAttribute("data-name") || "";
            const price = productBottom.getAttribute("data-price") || "";
            const desc = productBottom.getAttribute("data-desc") || "";
            const img = productBottom.getAttribute("data-img") || "";

            card.querySelector("h1").textContent = name;
            card.querySelector("h4").textContent = price;
            card.querySelector("p").textContent = desc;

            let imgArray = [];
            if (img.includes(",")) {
                imgArray = img.split(",");
            } else {
                imgArray.push(img);
            }
            
            const imgString = encodeURIComponent(JSON.stringify(imgArray));

            card.addEventListener("click", function () {
                window.location.href = `product.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&desc=${encodeURIComponent(desc)}&img=${imgString}`;
            });
        } else {
            console.error("No product details found for this card.");
        }
    });
});

