import * as skillDb from "../data/skill-db.js"

function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
}

function show(req, res) {
  console.log(1);
}

export {
  index,
  show
}