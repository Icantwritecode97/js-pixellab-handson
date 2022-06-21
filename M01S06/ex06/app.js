function paragraphLog(message) {
  let logContainer = document.querySelector('.logs');
  const messageParagraph = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('Logs');

    document.body.append(logContainer);
  }

  messageparagraph.innerText = message;

  logContainer.append(messageParagraph);
}

// console.log = paragraphLog;

console.log('Apar in document');

console.donLog = paragraphLog;
