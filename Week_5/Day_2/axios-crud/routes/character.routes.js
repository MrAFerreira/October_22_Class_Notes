const router = require('express').Router();
//import the service
const ApiService = require('../services/api.service');
//instantiate
const api = new ApiService();

router.get('/list', async (req, res, next) => {
  try {
    const responseFromApi = await api.getCharacters();
    const characters = responseFromApi.data;

    res.render('character/list', { characters });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/create', (req, res, next) => res.render('character/create'));

router.post('/create', async (req, res, next) => {
  const { name, occupation, weapon } = req.body;

  try {
    await api.createCharacter({ name, occupation, weapon });
    res.redirect('/character/list');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.get('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await api.getOneCharacter(id);
    const character = response.data;

    res.render('character/edit', character);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/edit/:id', async (req, res, next) => {
  const { weapon, occupation, name } = req.body;
  const { id } = req.params;

  try {
    await api.updateCharacter(id, { name, occupation, weapon });
    res.redirect('/character/list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/delete/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await api.deleteCharacter(id);
    res.redirect('/character/list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
