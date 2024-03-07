import axios from 'axios';

const baseUrl = 'https://65e088acd3db23f7624986b4.mockapi.io/api/v1/items';

class SneakersApi {
  static async getAll({ query, signal }) {
    const response = await axios.get(baseUrl, { signal });
    let data = response.data;
    if (query) {
      data = data.filter((i) => i.title.toLowerCase().includes(query.toLocaleLowerCase()));
    }
    return data;
  }
}

export default SneakersApi;
