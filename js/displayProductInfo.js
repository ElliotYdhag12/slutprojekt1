document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const leftImgBtn = document.getElementById('left-img-btn');
    const rightImgBtn = document.getElementById('right-img-btn');
    const numberOfItemsInput = document.getElementById('product-wrapper-bottom-bottom-input');
    const numberofItems = document.getElementById('product-wrapper-bottom-bottom-input').value;
    const buyButton = document.getElementById('buy-btn');

    const name = urlParams.get('name');
    const price = urlParams.get('price');
    const desc = urlParams.get('desc');
    const img = urlParams.get('img');

    document.getElementById('product-name').textContent = decodeURIComponent(name);
    document.getElementById('product-price').textContent = decodeURIComponent(price);
    document.getElementById('product-desc').textContent = decodeURIComponent(desc);

    //If images exists then displkay it and if multiple images then add them to an array.
    if (img) {
        const imgArray = JSON.parse(decodeURIComponent(img));
        let currentIndex = 0;

        const updateImage = () => {
            const imgElement = document.getElementById('product-img');
            imgElement.src = imgArray[currentIndex];
        };

        //array index changes based on what button you click

        leftImgBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
            updateImage();
        });

        rightImgBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % imgArray.length;
            updateImage();
        });

        updateImage();
    }

    
    buyButton.addEventListener('click', function () {
        event.preventDefault();
        const selectedItems = numberOfItemsInput.value;
        if(numberOfItemsInput.value === "" || numberOfItemsInput.value === "0" || numberOfItemsInput.value < 0) {
            alert("Please enter a valid number of items to buy.");
        }
        else {
            //Redirect user to next page with information about the product and amount of products to buy 
            const checkoutUrl = `checkout.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&quantity=${encodeURIComponent(selectedItems)}`;
            window.location.href = checkoutUrl;
        }
    });
    
    //Bug Checking Button
    numberOfItemsInput.addEventListener('input', function () {
        const numItems = numberOfItemsInput.value;
        
        if (numItems === "" || numItems === "0" || numItems < 0) {
            buyButton.innerText = `Buy 1 item`;
        } else if (numItems == 1) {
            buyButton.innerText = `Buy ${numItems} item`;
        } else {
            buyButton.innerText = `Buy ${numItems} items`;
        }
    });
});
