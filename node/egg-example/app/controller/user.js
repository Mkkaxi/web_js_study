'use strick';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = [
      { name: 'jin' },
      { name: 'pi' }
    ]
  }
}

module.exports = UserController
