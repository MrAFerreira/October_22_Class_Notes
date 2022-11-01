const axios = require('axios');

/* axios.get("https://ih-crud-api.herokuapp.com/characters")
this.api.get("/characters") */

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-crud-api.herokuapp.com',
    });
  }

  getCharacters() {
    return this.api.get('/characters');
    //return axios.get("https://ih-crud-api.herokuapp.com/characters")
  }

  getOneCharacter(id) {
    return this.api.get(`/characters/${id}`);
  }

  createCharacter(body) {
    // body = {name: "Pikachu", occupation: "Awesome", weapon: "Sub-machine gun"}
    return this.api.post('/characters', body);
  }

  updateCharacter(id, body) {
    return this.api.put(`/characters/${id}`, body);
  }

  deleteCharacter(id) {
    return this.api.delete(`/characters/${id}`);
  }
}

module.exports = ApiService;
