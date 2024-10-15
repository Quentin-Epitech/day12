fetch('https://meowfacts.herokuapp.com/')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#random-word p').innerText = data.data[0];
  })
  .catch(error => {
    document.querySelector('#random-word p').innerText = 'Failed to load data.';
  });

fetch('https://api.coincap.io/v2/exchanges/kraken')
  .then(response => response.json())
  .then(data => {
    let exchangeInfo = data.data;
    document.querySelector('#random-coffee p').innerText = `Name: ${exchangeInfo.name}, Rank: ${exchangeInfo.rank}, Volume (USD): ${exchangeInfo.volumeUsd}`;})
  .catch(error => {
    document.querySelector('#random-coffee p').innerText = 'Failed to load data.';});

fetch('https://ergast.com/api/f1/drivers.json')
  .then(response => response.json())
  .then(data => {
    let driver = data.MRData.DriverTable.Drivers[0]; 
    document.querySelector('#f1-drivers p').innerText = `Driver: ${driver.givenName} ${driver.familyName}`;})
  .catch(error => {
    document.querySelector('#f1-drivers p').innerText = 'Failed to load data.';});

fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos')
  .then(response => response.json())
  .then(data => {
    let carInfo = data[0];
    document.querySelector('#car-info p').innerText = `Year: ${carInfo.nome}`;})
  .catch(error => {
    document.querySelector('#car-info p').innerText = 'Failed to load data.';});

fetch('https://api.coincap.io/v2/rates/bitcoin')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#bitcoin-rate p').innerText = `Rate: ${data.data.rateUsd} USD`;})
  .catch(error => {
    document.querySelector('#bitcoin-rate p').innerText = 'Failed to load data.';});
