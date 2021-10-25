const teamSchema = require("../Models/team");
const userSchema = require("../Models/user")
const pool = require('../database');

function validateTeam(team)
{
    return result = teamSchema.validate(team);
}

function validateUser(user)
{
    return result = userSchema.validate(user);
}

async function validateUserAccessRight(id, user)
{
    const {rows} = await pool.query('SELECT created_by_user FROM teams WHERE ID=$1',[id]);
    if(rows[0]!=undefined)
        return (rows[0].created_by_user === user);
    return true;
}

module.exports = {validateTeam, validateUser, validateUserAccessRight};