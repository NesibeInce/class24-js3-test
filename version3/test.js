// Version 3

// 1.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript)

function fetchJSON(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Error ${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}

async function renderDetails() {
  const mainBody = document.getElementsByTagName('body')[0];
  const list = document.createElement('ul');
  mainBody.appendChild(list);
  try {
    const data = await fetchJSON('https://jsonplaceholder.typicode.com/users');
    const detailsArr = [data[0].name, data[0].email, data[0].address.city];
    detailsArr.map(elem => {
      const listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.innerHTML = elem;
    })
  } catch (error) {
    const divError = document.createElement('div');
    mainBody.appendChild(divError);
    divError.innerHTML = error.message;

  }
}

renderDetails();


// 2.
// Write a function that:
// - Takes in an array of strings:
const fruits = ["Strawberry", "Apple", "Papaya", "Banana", "Apricot", "Pear"];
// - Returns an array with the fruits that start with the letter "P"

function giveLetterPFor(arr) {
  let pLetter = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) === 'P') {
      pLetter.push(arr[i])
    }
  }
  return pLetter;
}



// 3.
// Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
// - Creates a button element (with text "click me!")
// - Creates an empty image element and add it to the document.
// - Inserts an image URL into the <img> tag, when the button is clicked
// - Removes the button after the click
// - Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png

function displayImage(url) {
  const mainBody = document.getElementsByTagName('body')[0];
  const clickButton = document.createElement('button');
  mainBody.appendChild(clickButton);
  clickButton.innerHTML = 'click me!';

  const image = document.createElement('img');
  mainBody.appendChild(image);

  clickButton.addEventListener('click', insertImage);

  function insertImage() {
    image.setAttribute('src', url);
    mainBody.removeChild(clickButton);
  }
}
link = 'https://pbs.twimg.com/media/EFJI2cAXoAUZZD5.jpg';
// link is not found, but function works.

displayImage(link);