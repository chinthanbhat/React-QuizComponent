// pollController.js// Import poll model
Poll = require('../models/pollModel');// Handle index actions
exports.index = function (req, res) {
    Poll.get(function (err, polls) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
            res.json({
                status: "success",
                message: "Polls retrieved successfully",
                data: polls
            });

        }
    });
};// Handle create poll actions
exports.new = function (req, res) {
    var poll = new Poll();
    poll.poll_subject = req.body.poll_subject ? req.body.poll_subject : poll.poll_subject;
    poll.poll_questions_id = req.body.poll_questions_id;
    poll.save(function (err) {
        if (err){
            console.log("Entered into save cb error")
            console.log(err)
        }
        else{
            res.json({
                message: 'New poll created!',
                data: poll
            });
            
        }    
    });
};
    // Handle view poll info
// exports.view = function (req, res) {
//     Poll.findById(req.params.poll_id, function (err, poll) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Poll details loading..',
//             data: poll
//         });
//     });
// };
// Handle update poll info
// exports.update = function (req, res) {Poll.findById(req.params.poll_id, function (err, poll) {
//         if (err)
//             res.send(err);poll.name = req.body.name ? req.body.name : poll.name;
//         poll.gender = req.body.gender;
//         poll.email = req.body.email;
//         poll.phone = req.body.phone;// save the poll and check for errors
//         poll.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Poll Info updated',
//                 data: poll
//             });
//         });
//     });
// };// Handle delete poll
// exports.delete = function (req, res) {
//     Poll.remove({
//         _id: req.params.poll_id
//     }, function (err, poll) {
//         if (err)
//             res.send(err);res.json({
//             status: "success",
//             message: 'Poll deleted'
//         });
//     });
// };
