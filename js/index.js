const btn = document.getElementById('btn');
const paragraph = document.getElementById('jokes');
const summary = document.getElementById('summary');

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
    .then(result => {
      console.log(result.joke);
      paragraph.innerHTML = result.joke;
    })
    .catch(error => console.log('error', error));
}

const loadWeather = () => {
  const url = "https://dark-sky.p.rapidapi.com/41.43734803122302,2.1829782495544583?lang=es&units=auto";
  fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "30d40c3001msh527354931e78864p172a86jsn02a0d70e4f72",
   		"x-rapidapi-host": "dark-sky.p.rapidapi.com"
    }
  })
  .then(response => {
    if (response.ok) return response.json();
  })
  .then(data => {
    console.log(data.currently.summary);
    summary.innerHTML = data.currently.summary;
  })
  .catch(err => {
    console.error(err);
  });
}

btn.addEventListener('click', loadJokes);

loadWeather();

