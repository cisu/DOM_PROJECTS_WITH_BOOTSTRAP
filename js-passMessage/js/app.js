(function () {
  const msgForm = document.querySelector('#message-form');
  const message = document.querySelector('#message');
  const changeMsg = document.querySelector('.message-content');
  const feedback = document.querySelector('.feedback');

  msgForm.addEventListener('submit', function (e) {
    // prevent default action
    e.preventDefault();
    //  getting a value
    const value = message.value;
    // console.log(value);

    // check for empty value

    if (value === '') {
      // console.log('empty value');
      feedback.classList.add('show');
      setTimeout(function () {
        feedback.classList.remove('show');
      }, 2000);
    }

    // change value
    changeMsg.textContent = value;
    message.value = '';
  });
})();
