import express from 'express';
import Article from '../models/Article.js';

const router = express.Router();


// GET /tasks - returns list of all the tasks
// POST /tasks - create a new task. {"title": "foo", "isCompleted": true, "labels": [123, 321]}
// PUT /tasks/{id} - update the task {"title": "foo", "isCompleted": true, "labels": [123, 321]}
// DELETE /tasks/{id} - deletes a task

router.get('/', async (req, res) => {
    try {
        // query the database
        const query = Feedback.find({});
        const feedbacks = await query.exec();
        res.json(feedbacks);
    } catch(e) {
        res.json({error: true, message: e});
    }
});

router.post('/', async (req, res) => {
    const newFeedbackData = {
        title: req.body.title,
        user: req.body.user,
        labels: req.body.labels,
    };
    const feedback = new Feedback(newFeedbackData);
    try {
        const feedbackEntity = await feedback.save();
        res.json(feedbackEntity);
    } catch(e) {
        res.json({error: true, message: e});
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const query = Feedback.findById(id);
        const feedback = await query.exec();
        if (!feedback) {
            res.status(404).json({notFound: true});
            return;
        }

        // updates the ojbect proerties
        feedback.title = req.body.title;
        feedback.user = req.body.user;
        feedback.labels = req.body.labels;
        

        await feedback.save(); // triggers the save in the database
        
        res.json(feedback);
    } catch(e) {
        res.json({error: true, message: e});
    }
});

//router.delete('/:id', async (req, res) => {
//    const { id } = req.params;

 //   try {
  //      const query = Feedback.deleteOne({
  //          _id: id
  //      });
   //     await query.exec();
        
   //     res.json({success: true});
   // } catch(e) {
   //     res.json({error: true, message: e});
  //  }
//});

export default router;