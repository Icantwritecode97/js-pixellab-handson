const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const eventListener = () => {
  alert('ai apasat butnul');
};

button.addEventListener('click', eventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', eventListener);
});