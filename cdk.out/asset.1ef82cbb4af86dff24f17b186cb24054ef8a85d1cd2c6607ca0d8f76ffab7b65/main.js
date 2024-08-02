fetch('./config.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.api_url) {
      fetch(data.api_url + 'hello')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
