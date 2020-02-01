// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import poll controller
var pollController = require('./poll_controller');// poll routes
router.route('/polls')
    .get(pollController.index)
    .post(pollController.new);

// router.route('/polls/:poll_id')
//     .get(pollController.view)
//     .patch(pollController.update)
//     .put(pollController.update)
//     .delete(pollController.delete);

// Export API routes
module.exports = router;