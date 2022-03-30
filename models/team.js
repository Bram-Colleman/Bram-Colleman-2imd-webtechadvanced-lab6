const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name:  String,
    score: String
});

teamSchema.statics.findAll = async function() {
return {
        status: "success",
        message: "GETTING teams",
        data: {
            teams: await this.find({})
        }
    }
};

teamSchema.statics.getByTeam = async function(team) {
    return {
        status: "success",
        message: "GETTING score for team " + team,
        data: {
            teams: await this.find({ name: team })
        }
    }
  };

teamSchema.statics.getSize = async function() {
    const res = await this.findAll();
    return Object.keys(res.data.teams).length;
};

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;