const buttons = document.querySelectorAll('.btn-box > button');
const changeDest = document.querySelector('.second-row');


async function loadDestination(index) {

  const url = '/data/data.json'

  try {
    const response = await fetch(url)
    const data = await response.json()
    const destination = data.destinations[index];
   
    renderDestination(destination)
  }
  catch (e) {
    console.log(e)
  }
};

buttons.forEach(button => {
  button.addEventListener('click', function() { 
    loadDestination(button.getAttribute('data-id')); 
  });
})

loadDestination(0)

function renderDestination(destination) {
   changeDest.innerHTML = `
      <div class="img-box">
        <img class="image" src="${destination.images.webp}">
      </div>

      <div class="description-box">
        <h1 class="name">${destination.name}</h1>

        <p class="description">${destination.description}</p>
      </div>`
};