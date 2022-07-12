const onButtonClick = function () {
  alert('Butonul a fost apasat');
};

const buttonElement = document.querySelector('.btn');
butonElemnent.addEventListener('click', onButtonClick);
windows.addEventlistener('resize', function () {
  // function function
  //  this -> windows (DOM Element)
  const width = this.innerWidth;
  if (width < 650) {
    buttonElement.removeElementListener('click', onButtonClick);
  }
  if (width >= 650) {
    buttonelement.addEventListener('Click', onButtonClick);
  }
});

\
