const auth = require('../controllers/user');
const router = require('koa-router')();

router
  .get('/user/:id', auth.getUserInfo)
  .post('/user', auth.postUserAuth)

module.exports = router;