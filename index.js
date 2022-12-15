const wordToAscii = document.querySelector('#wordToAscii');
const submitButton = document.querySelector("#convertWord");
const displayArea = document.querySelector('#displayValue');

convertAndSumWord = (word) => {
  let baseValue = 0;
  
  word.split('').forEach(char => baseValue += char.charCodeAt(0))
  return baseValue;
}

displayNode = (nodeValue) => {
  const htmlNode = document.createElement('div');
  const htmlNodeInnerText = document.createElement('p');
  
  htmlNodeInnerText.innerText = nodeValue.toString();

  htmlNode.appendChild(htmlNodeInnerText);
  
  return htmlNode;
}

submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  const summationValue = convertAndSumWord(wordToAscii.value);

  const htmlNode = displayNode(summationValue);

  displayArea.append(htmlNode);
})
