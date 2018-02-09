class Weather {
  constructor(city, country) {
    this.apiKey = "46419ea6b062d45b";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${
        this.country
      }/${this.city}.json`
    );

    const responseData = await response.json();

    return responseData.current_observation;
  }
  // Change Weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
