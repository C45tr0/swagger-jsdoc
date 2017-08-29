'use strict';

/* istanbul ignore next */
// This file is an example, it's not functionally used by the module.

module.exports.setup = function(app) {
  /**
   * @openapi
   * /hello:
   *   get:
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: hello world
   */
  app.get('/hello', function(req, res) {
    res.send('Hello World (Version 2)!');
  });
};
