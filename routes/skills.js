import { Router } from 'express'
import * as skillDb from "../data/skill-db.js"
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})

export {
  router
}
