const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const message = 'Nu stim ce browser foloseste';

if (userAgentString.includes('chrome')) {
  message = 'Navighez folosind chrome';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);
