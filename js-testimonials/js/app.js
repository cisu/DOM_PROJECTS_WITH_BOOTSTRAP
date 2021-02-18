(function () {
  // customers
  let customers = [];
  let index = 0;

  // object constructor functions

  function Customer(name, img, text) {
    this.name = name;
    this.img = img;
    this.text = text;
  }
  //   create customer functions
  function createCustomer(name, img, text) {
    // full img
    let fullImg = `./img/customer-${img}.jpg`;

    // create a new customer instance
    const customer = new Customer(name, fullImg, text);

    // add to all customers
    customers.push(customer);
  }

  createCustomer(
    'john',
    1,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  );
  createCustomer(
    'bob',
    2,
    `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  );
  createCustomer(
    'george',
    3,
    `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
  );
  createCustomer(
    'tiririkos',
    4,
    `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  );

  //   console.log(customers);

  document.querySelectorAll('.btn').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      //  console.log(e.target);
      if (e.target.parentElement.classList.contains('prevBtn')) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        document.querySelector('#customer-img').src = customers[index].img;
        document.querySelector('#customer-name').textContent =
          customers[index].name;
        document.querySelector('#customer-text').textContent =
          customers[index].text;
      }

      if (e.target.parentElement.classList.contains('nextBtn')) {
        if (index === customers.length - 1) {
          index = -1;
        }
        index++;
        document.querySelector('#customer-img').src = customers[index].img;
        document.querySelector('#customer-name').textContent =
          customers[index].name;
        document.querySelector('#customer-text').textContent =
          customers[index].text;
      }
    });
  });
})();
