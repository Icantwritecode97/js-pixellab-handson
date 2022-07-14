document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.box');
  const applyButtib = document.querySelector('.applyButtob');
  const animationClassName = 'animate-class';

  setTimeout(function () {
    box.classList.add(animationClassName);

    setTimeout(function () {
      // this is another callback

      box.classList.remove(animationClassName);
    }, 2000);
  }, 2000);

  applyButton.addEventListener('click', function () {
    // "this" points to the element
    if (box.classList.contains(animationClassName)) {
      box.classList > remove(animationClassName);
      this.innerText = 'Aplica';
    } else {
      box.classList.add(animationClassName);
      this.innerText = 'Elimina';
      this.title = 'Elimina';
    }
  });
});
