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
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(result => {
      console.log(result.joke);
      paragraph.innerHTML = result.joke;
      paragraph.style.display = 'block';
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

const loadOtherJokes = () => {
  const myHeaders = new Headers();
  myHeaders.append("Cookie", "__cfduid=dc712fa911ce61a02106d1e68184ee75f1614189075");

  const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  fetch("https://api.chucknorris.io/jokes/random", requestOptions)
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(result => {
      console.log(result.value);
      paragraph.innerHTML = result.value;
      paragraph.style.display = 'block';
    })
    .catch(error => console.log('error', error));
}

btn.addEventListener('click', () => {
  let number = Math.floor(Math.random() * 10);
  console.log(number);
  number % 2 === 0 ? loadJokes() : loadOtherJokes();
});

loadWeather();
