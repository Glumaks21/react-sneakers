import axios from 'axios';

const baseUrl = 'https://65e088acd3db23f7624986b4.mockapi.io/api/v1/users';
export default class UserApi {
  static async getAllFavorites(userId) {
    //Requesting /api/v1/users/:userId/favorites with attribute X-Auth-token = :authToken
    const response = await axios.get(`${baseUrl}/${userId}/favorites`);
    return response.data;
  }

  static async addFavorite(userId, authToken, itemId) {
    //Requesting /api/v1/users/:userId/favorites with attribute X-Auth-token = :authToken
    const response = await axios.post(`${baseUrl}/${userId}/favorite`, {
      id: itemId,
    });
    return response.data;
  }

  static async deleteFavorite(userId, authToken, favoriteId) {
    const response = await axios.delete(`${baseUrl}/${userId}/favorites/${favoriteId}`);
    return response.data;
  }
}
