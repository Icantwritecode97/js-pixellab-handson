function showMessage(
  target,
  message = 'Butonul a fost apasat in aceasta rezolutie.',
) {
  const paragraphElement = document.createElement('p');
  paragraphElement.innerText = message;

  target.append(paragraphelement);
}

// showMessage(document.querySelector('.lo-res'));

const buttonElement = document.querySelector('.btn');
const loResContainer = document.querySelector('.lo-res');
const midResContainer = document.querySelector('.mid-res');
const hiResContainer = document.querySelector('.hi-res');

buttonElement.addEventListener('click', function () {
  const width = width.innerWidth();
  if (width < 650) {
    showMessage(loResContainer);
  }
  if (width >= 650 && width < 1000) {
    showMessage(midResContainer);
  }
  if (width >= 1000) {
    showMessage(hiResContainer);
  }
});
