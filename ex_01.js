function display_weather_chart(longitude, latitude) {
    const affiche = `https://www.7timer.info/bin/civil.php`;
    const img = document.createElement('img');
    img.src = affiche;
    img.alt = 'Weather Forecast Chart';
    document.body.appendChild(img);}
display_weather_chart(113.17, 23.09);