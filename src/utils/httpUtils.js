export default function fetchData(url) {
    fetch('http://localhost:8081/login.json')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(JSON.stringify(responseJson));
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  }
  