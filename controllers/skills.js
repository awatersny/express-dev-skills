import * as skillDb from "../data/skill-db.js"

function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, (error, skill)=>{
    res.render("skills/show", {
      skill: skill,
      error: error
    });
  });
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  skillDb.create(req.body, (error, skill)=>{
    res.redirect("/skills");
  });
}

function deleteSkill(req, res) {
  console.log(req.params.id);
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete
}