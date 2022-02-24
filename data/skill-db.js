const skills = [
  {text: 'HTML', done: true, _id: 125223},
  {text: 'CSS', done: true, _id: 127904},
  {text: 'Vanilla JS', done: true, _id: 139608},
  {text: 'Node', done: false, _id: 198956},
  {text: 'Express', done: false, _id: 197492},
  {text: 'MongoDB', done: false, _id: 194723},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export { 
	find,
  findById
}