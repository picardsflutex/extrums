const Router = require("express")
const {check, validationResult} = require("express-validator")
const router = new Router()
const {task} = require("./models/Task")

router.route('/getTask').get((req, res) => {
  task.find({condition: req.body.condition},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
  })
})

router.post('/createTask',[
  check('name', "Uncorrect name").isLength({min:8, max: 30}),
  check('description', "Uncorrect description").isLength({min:10, max: 150}),
  check('term', "Uncorrect term").isLength({min:5, max: 30}),
], async (req, res) => {
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.json({message: 'Uncorrect request'})
    }
    const newTask = await task.create(req.body);
    res.json("Task is created");
  } catch (e){
    res.json({message: 'Uncorrect request'})
  }
})

router.route('/getNumberObjectsWhitOneTheme').get((req, res) => {
  task.find({theme: req.body.theme},(error, data) => {
    if (error) {
      return next(error)
    } else {
      const results = data.toArray();
      res.json(results.length)
    }
  })
})

router.post('/createTask', async (req, res) => {
  try{
    const updateTask = await task.updateOne({ number: req.body.number },{ $set: req.body.condition },);
    res.json("Task is updated");
  } catch (e){
    res.json({message: 'Uncorrect request'})
  }
})

module.exports = router