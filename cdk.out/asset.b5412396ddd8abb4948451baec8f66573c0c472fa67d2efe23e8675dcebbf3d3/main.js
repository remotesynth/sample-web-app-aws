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
          // this is a hack to deal with potential URL differences in the output
          const fixed = data.api_url.split('.').toSpliced(2, 1).join('.');
          console.log('fixed the local url:', fixed);
          fetch(fixed + 'hello')
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        });
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
