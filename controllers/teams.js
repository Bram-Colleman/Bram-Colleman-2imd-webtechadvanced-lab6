const Team = require('../models/team');

//GET
const get = async (req, res) => {
  let response;
  response = await Team.findAll();


  // check if there are teams
  if (response.data.teams.length){
    res.render('index', { 
        team1: response.data.teams[0].name,
        team1score: response.data.teams[0].score,
        team2: response.data.teams[1].name,
        team2score: response.data.teams[1].score,
        team3: response.data.teams[2].name,
        team3score: response.data.teams[2].score
     });
  } else {
    res.send({
      status: "error",
      error: "No teams found"
    });
  }
}

//POST
const create = async (req, res) => {
  let team = req.body.team;
  let score = req.body.score;
  let t = new Team();
  t.name = team;
  t.score = score;
    console.log(t.name + " " + t.score);
  // check if score is empty
  if (t.score != ""){
    await t.save();
    res.send({
      status: "success",
      message: "Posting API message"
    });
  } 
  else {
    res.send({
      status: "error",
      error: "please provide a score"
    });
  }
}

//UPDATE
const update = async (req, res) => {
  const response = await Team.getByTeam(req.body.teams); 
  // check if team exists
  if(response.data.teams.length) {
    // check if score is empty
    if (req.body.score != "" && !(isNaN(req.body.score))){
      let t = response.data.teams[0];
      t.score = req.body.score;
      await t.save();
      res.render('updatestats');
    } else {
        res.render('updatestats', { errormsg : "Please fill in a valid score"});
    }
} else {
    res.render('updatestats', { errormsg : "Team not found"});
  }
}



module.exports.get = get;
module.exports.create = create;
module.exports.update = update;
