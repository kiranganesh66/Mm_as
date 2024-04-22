document.addEventListener("DOMContentLoaded", function () {
  let sidePar = document.getElementById("sidePar");

  function getValues(search_rs) {
    let { product } = search_rs;
    let { images, options } = product;

    let hed = document.createElement("h1");
    hed.textContent = product.vendor;
    hed.classList.add("vendorName");
    sidePar.appendChild(hed);

    let title = document.createElement("h1");
    title.textContent = product.title;
    title.classList.add("TitleName");
    sidePar.appendChild(title);

    let hrLi = document.createElement("hr");
    hrLi.classList.add("hr");
    sidePar.appendChild(hrLi);

    let subDiv = document.createElement("div");
    subDiv.classList.add("priceCont");
    sidePar.appendChild(subDiv);

    let price = document.createElement("h1");
    price.textContent = `${product.price}.00`;
    price.classList.add("price");
    subDiv.appendChild(price);

    let percentageCalu = product.price.slice(1);
    let originalprice = product.compare_at_price.slice(1);
    let min = originalprice - percentageCalu;
    let j = (min / originalprice) * 100;
    let percentageOfPrice = Math.floor(j);

    let perctOfprice = document.createElement("span");
    perctOfprice.classList.add("percentage");
    perctOfprice.textContent = `${percentageOfPrice}%`;
    subDiv.appendChild(perctOfprice);

    let originalPrice = document.createElement("h1");
    originalPrice.classList.add("originalPrice");
    originalPrice.textContent = `${product.compare_at_price}.00`;
    sidePar.appendChild(originalPrice);

    let hrLi2 = document.createElement("hr");
    hrLi2.classList.add("hr");
    sidePar.appendChild(hrLi2);

    let colorChoose = document.createElement("p");
    colorChoose.textContent = "Choose a Color";
    colorChoose.classList.add("colorCh");
    sidePar.appendChild(colorChoose);

    let colorDiv = document.createElement("div");
    colorDiv.classList.add("colorBoxDiv");
    sidePar.appendChild(colorDiv);

    let colorBox1 = document.createElement("input");
    colorBox1.classList.add("colorBox");
    colorBox1.setAttribute("name", "color");
    colorBox1.setAttribute("id", "colorRed");
    colorBox1.style.backgroundColor = `${options[0].values[0].Yellow}`;
    colorBox1.checked = true;
    // colorBox1.setAttribute("type", "radio");
    colorDiv.appendChild(colorBox1);

    let colorBox2 = document.createElement("input");
    colorBox2.classList.add("colorBox");
    colorBox2.setAttribute("name", "color");
    colorBox2.setAttribute("id", "colorBlue");
    colorBox2.style.backgroundColor = `${options[0].values[1].Green}`;
    // colorBox2.setAttribute("type", "radio");
    colorDiv.appendChild(colorBox2);

    let colorBox3 = document.createElement("input");
    colorBox3.classList.add("colorBox");
    colorBox3.setAttribute("name", "color");
    colorBox3.setAttribute("id", "colorGreen");
    colorBox3.style.backgroundColor = `${options[0].values[2].Blue}`;
    // colorBox3.setAttribute("type", "radio");
    colorDiv.appendChild(colorBox3);

    let colorBox4 = document.createElement("input");
    colorBox4.classList.add("colorBox");
    colorBox4.setAttribute("name", "color");
    colorBox4.setAttribute("id", "colorPink");
    // colorBox4.setAttribute("type", "radio");
    colorBox4.style.backgroundColor = `${options[0].values[3].Pink}`;
    colorDiv.appendChild(colorBox4);

    let hrLi3 = document.createElement("hr");
    hrLi3.classList.add("hr");
    sidePar.appendChild(hrLi3);

    let sizeChoose = document.createElement("p");
    sizeChoose.textContent = "Choose a Size";
    sizeChoose.classList.add("colorCh");
    sidePar.appendChild(sizeChoose);

    let img1 = document.getElementById("img1");
    img1.setAttribute(
      "src",
      "https://s3-alpha-sig.figma.com/img/7f07/20f0/38539658df252c621f52c64231e8986a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkYANVwb0N6zY3AwWqcq5lB84n2FDEm9hgUlSkqAykc6zFnKgTgDfvxHru3z2qC8gzmNxEsQPFUg43zqg4ZG2TURdpX6z1k7LcrcQtESCGmxI8aMf6b~RRjJ56b~JcOxnEJz2hCfqA~5SpgXSsvGIawgHehsAI8aLD1iNucIcAu7bvQ944UUbKlBV5tU50C4AH4aXUtBpq49h6V1q35oUUVwai39ZNWUBdDzuoYQF1jlLiXg3hPrWCgI-56lt00gQi1LIPbCAsZMuC2uQ5GKAPKJlJeKoAaZO-aEQ672wchWkNycBkidn9SRg9vWJ9olIv6BV6iX5U5kuBsE9eKmjw__"
    );
    img1.setAttribute("alt", "img");
    img1.classList.add("imgSc");

    let img2 = document.getElementById("img2");
    img2.setAttribute(
      "src",
      "https://s3-alpha-sig.figma.com/img/8a12/5fd1/8ad1df2ca3d3367baa54e79cf0caeff1?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jee39xSK-TesGDdB4ikB7AeAzHgVZEFSLCPmpsdWiDKF7tlLYIki12B8egIzHvHJFiDrlZ77yO6xeARgsawZtAhN3Dai82rxuDiqaFhuJqgB9qGnRKL~y7bKBGbmFbEnUQKoNp29mcaNh2HegzYJrqCCWaGrjD9HFou9fbFikeJeC1MifBEmFtlCpI~z0bqSKy45yEt7uAjCxGCorYJ~tNIOJ2ydgJ2qkXXLfWWfyye1Ukc1D1tEWSil8eicHE122yrDud89gKQ9VjwqNTx-3LlrY8LlrpT9GRUoB3yHbjN6PXD2AeqQ0NeTG5SvvMPV5fNbJJJmX31UN5Hmd178Bw__"
    );
    img2.setAttribute("alt", "img");
    img2.classList.add("imgSc");

    let img3 = document.getElementById("img3");
    img3.setAttribute(
      "src",
      "https://s3-alpha-sig.figma.com/img/2b85/4ec0/815f49c8ce3ddd231e2da63ce0596dc4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYg4oxHEv20diWN5kTt8pX0I6HqtzpJ9mhTSnw4Fk5vABxzbEWcuEMANZf6WYqs5CdBVuV~8TDeo7PTCANU1wq~79tHkkXTEREqNeWkI3n~C-33oQ9K5CBlk06xjxxGr1z0Vo6eeOvaEoSDU0v1SNM0SbadFyOBPRyGIkZ5IIdoJ-nMBNDH-3r6xo5u7JIhppuKPnYUwjtWdrfs2w7oghrK~PnL1tZcGZs7cD0RJNn8~YzdaCKdoLySRw0pu03wIiQTXLOnDUEWLiCCD2WAhGtIlVUKhMT~q8vEr2z1COlWERsX3DFWYbbGI9JWCtAmgPJW-2lDdAgboi5DrZMN5vA__"
    );
    img3.setAttribute("alt", "img");
    img3.classList.add("imgSc");

    let img4 = document.getElementById("img4");
    img4.setAttribute(
      "src",
      "https://s3-alpha-sig.figma.com/img/2b85/4ec0/815f49c8ce3ddd231e2da63ce0596dc4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYg4oxHEv20diWN5kTt8pX0I6HqtzpJ9mhTSnw4Fk5vABxzbEWcuEMANZf6WYqs5CdBVuV~8TDeo7PTCANU1wq~79tHkkXTEREqNeWkI3n~C-33oQ9K5CBlk06xjxxGr1z0Vo6eeOvaEoSDU0v1SNM0SbadFyOBPRyGIkZ5IIdoJ-nMBNDH-3r6xo5u7JIhppuKPnYUwjtWdrfs2w7oghrK~PnL1tZcGZs7cD0RJNn8~YzdaCKdoLySRw0pu03wIiQTXLOnDUEWLiCCD2WAhGtIlVUKhMT~q8vEr2z1COlWERsX3DFWYbbGI9JWCtAmgPJW-2lDdAgboi5DrZMN5vA__"
    );
    img4.setAttribute("alt", "img");
    img4.classList.add("imgSc");

    let sizeDiv = document.createElement("div");
    sizeDiv.classList.add("sizeBoxDiv");
    sidePar.appendChild(sizeDiv);

    ["Small", "Medium", "Large", "Extra large", "XXL"].forEach(
      (size, index) => {
        let ar = ["Small", "Medium", "Large", "Extra large", "XXL"];
        let sizeInput = document.createElement("input");
        sizeInput.type = "radio";
        sizeInput.setAttribute("id", ar[index]);
        sizeInput.name = "size";
        sizeInput.value = size.toLowerCase();

        let sizeLabel = document.createElement("label");
        sizeLabel.textContent = size;
        sizeLabel.htmlFor = ar[index];
        sizeLabel.classList.add("sizeLable");
        sizeDiv.appendChild(sizeInput);
        sizeDiv.appendChild(sizeLabel);
      }
    );

    //////

    let addbtnDiv = document.createElement("div");
    addbtnDiv.classList.add("addbtnDiv");
    sidePar.appendChild(addbtnDiv);

    let incbtnDiv = document.createElement("div");
    incbtnDiv.classList.add("incbtnDiv");
    addbtnDiv.appendChild(incbtnDiv);

    // Create "Decr Item Count" button

    let decreaseItemCountBtn = document.createElement("button");
    decreaseItemCountBtn.textContent = "-";
    decreaseItemCountBtn.id = "decreaseItemCountBtn";
    decreaseItemCountBtn.classList.add("btn");
    decreaseItemCountBtn.classList.add("btn-secondary");
    incbtnDiv.appendChild(decreaseItemCountBtn);

    // Create item count display
    let itemCountDisplay = document.createElement("span");
    itemCountDisplay.textContent = "0";
    itemCountDisplay.style.paddingTop = "8px";
    itemCountDisplay.style.textAlign = "center";
    itemCountDisplay.id = "itemCountDisplay";
    incbtnDiv.appendChild(itemCountDisplay);

    // Create "Incr Item Count" button

    let increaseItemCountBtn = document.createElement("button");
    increaseItemCountBtn.textContent = "+";
    increaseItemCountBtn.id = "increaseItemCountBtn";
    increaseItemCountBtn.classList.add("btn");
    increaseItemCountBtn.classList.add("btn-secondary");
    incbtnDiv.appendChild(increaseItemCountBtn);

    let addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.id = "addToCartBtn";
    addToCartBtn.classList.add("btn");
    addToCartBtn.classList.add("btn-primary");
    addbtnDiv.appendChild(addToCartBtn);
    // Add event listener for "Add to Cart" button
    addToCartBtn.addEventListener("click", function () {
      // Logic to add item to cart
      console.log("Item added to cart!");
    });

    // Add event listener for "Increase Item Count" button
    increaseItemCountBtn.addEventListener("click", function () {
      let count = parseInt(itemCountDisplay.textContent);
      count++;
      itemCountDisplay.textContent = count;
    });

    // Add event listener for "Decrease Item Count" button
    decreaseItemCountBtn.addEventListener("click", function () {
      let count = parseInt(itemCountDisplay.textContent);
      if (count > 0) {
        count--;
        itemCountDisplay.textContent = count;
      }
    });

    let hrLi4 = document.createElement("hr");
    hrLi4.classList.add("hr");
    sidePar.appendChild(hrLi4);

    let para = document.createElement("p");
    let parag = product.description.replace('<p data-mce-fragment="1">', "");
    let parag1 = parag.replace("</p>", "");
    para.textContent = parag1;
    para.classList.add("lowDes");
    sidePar.appendChild(para);
  }

  function hello() {
    let options = {
      method: "GET",
    };

    fetch(
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json",
      options
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.product.options[0].values);

        getValues(data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  hello();
});
