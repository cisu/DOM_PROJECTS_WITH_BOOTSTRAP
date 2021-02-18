(function () {
  let counterValue = 0;
  const counter = document.querySelector('#counter');
  const button = document.querySelectorAll('.counterBtn');

  button.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // element that we clicked
      const value = e.target;
      //   console.log(value);

      if (value.classList.contains('prevBtn')) {
        counterValue--;
      } else if (value.classList.contains('nextBtn')) {
        counterValue++;
      }

      counter.textContent = counterValue;

      //   change color
      if (counterValue === 0) {
        counter.style.color = '#333333';
      } else if (counterValue < 0) {
        counter.style.color = '#f3511d';
      } else if (counterValue > 0) {
        counter.style.color = '#7fb800';
      }
    });
  });
})();
