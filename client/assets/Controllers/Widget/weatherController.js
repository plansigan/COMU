
app.controller('weatherController', function($scope, $http){
    //modal initialization

    // GEOLOCATION OF USER
    $scope.geoLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition($scope.getWeather);
        } else {
            $scope.weather = "Geolocation is not supported by this browser.";
        }
    }
    $scope.getWeather = (position) => {
        if (typeof (position) !== 'undefined') {
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyD07FW0pXTvfMXHnIB4f7tiMAjKouUM4Z0').then((response) => {
                var city = response.data.results[0].address_components[2].long_name + ' city';
                $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=86f16c14b09b6c20edf91ddd790a51e5').then((response) => {
                    $scope.city = city;
                    $scope.weather = response.data.weather[0].description;
                });
            });
        }
    };

    //runs the code every 2 mins after the initial run
    setInterval(() => {
        $scope.geoLocation()
    }, 12000);

});