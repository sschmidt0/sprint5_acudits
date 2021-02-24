const btn = document.getElementById('btn');

const loadJokes = () => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://icanhazdadjoke.com/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result.joke))
    .catch(error => console.log('error', error));
}

btn.addEventListener('click', loadJokes);
