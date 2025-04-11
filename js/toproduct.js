document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-view-card");

    // This Code Will Run On Every Card On The Home Page.
    productCards.forEach(card => {
        const productBottom = card.querySelector(".product-view-card-bottom");
        //Get the data variables from the html and send it to js.

        if (productBottom) {
            const name = productBottom.getAttribute("data-name") || "";
            const price = productBottom.getAttribute("data-price") || "";
            const desc = productBottom.getAttribute("data-desc") || "";
            const img = productBottom.getAttribute("data-img") || "";

            card.querySelector("h1").textContent = name;
            card.querySelector("h4").textContent = price;
            card.querySelector("p").textContent = desc;
            //Change The title, price and description on every card based on their values

            //If More than one image than store it as a single string split up by commas and then split the values in to an array here.
            let imgArray = [];
            if (img.includes(",")) {
                imgArray = img.split(",");
            } else {
                imgArray.push(img);
            }
            
            //For some reason json needs me to stringify my array probably because it is an array.
            const imgString = encodeURIComponent(JSON.stringify(imgArray));

            //redirect to next page and add the values to the url to be used later.
            card.addEventListener("click", function () {
                window.location.href = `product.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&desc=${encodeURIComponent(desc)}&img=${imgString}`;
            });
        } else {
            console.error("No product details found for this card.");
        }
    });
});

