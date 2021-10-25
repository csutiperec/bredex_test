const pool = require('../database');
const validator = require('../Utils/validator');

const getAll = async(req, res) =>
{
    try
    {
        const {rows} = await pool.query('SELECT * FROM teams');
        res.send(rows);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('An error occured, details: '+err);
    }
};

const getOne = async(req, res) =>
{
    try
    {
        const {rows} = await pool.query('SELECT * FROM teams WHERE ID=$1',[req.params.id]);
        if(rows.length===0)
        {
            res.status(404).send('No team with that ID exists');
            return;
        }
        res.send(rows);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('An error occured, details: '+err);
    }
};

const addOne = async(req, res) =>
{
    try
    {
        const {error} = validator.validateTeam(req.body);
        if(error)
        {
            res.status(400).send(error);
            return;
        }
        const {rows} = await pool.query("INSERT INTO teams(name_, founded, win_nr, paid, created_by_user) VALUES($1, $2, $3, $4, $5) RETURNING *", 
        [req.body.name, req.body.founded, req.body.win_nr, req.body.paid, req.user]);
        res.send(rows);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('An error occured, details: '+err);
    }
};

const modifyOne = async(req, res) => 
{
    try
    {
        const {error} = validator.validateTeam(req.body);
        if(error)
        {
            res.status(400).send(error);
            return;
        }
        const own = await validator.validateUserAccessRight(req.params.id, req.user);
        if(!own){
            res.status(403).send('You can only edit your own posts');
            return;
        }
        const {rows} = await pool.query("UPDATE teams SET name_=$1, founded=$2, win_nr=$3, paid=$4, created_by_user=$5 WHERE ID=$6 RETURNING *",
        [req.body.name, req.body.founded, req.body.win_nr, req.body.paid, req.user, req.params.id])
        if(rows.length===0)
        {
            res.status(404).send('No team with that ID exists');
            return;
        }
        res.send(rows);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('An error occured, details: '+err);
    }
};

const deleteOne = async(req, res) =>
{
    try
    {
        const own = await validator.validateUserAccessRight(req.params.id, req.user);
        if(!own){
            res.status(403).send('You can only delete your own posts');
            return;
        }
        const {rows} = await pool.query('DELETE FROM teams WHERE ID=$1 RETURNING *',[req.params.id]);
        if(rows.length===0)
        {
            res.status(404).send('No team with that ID exists');
            return;
        }
        res.send(rows);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('An error occured, details: '+err);
    }
};

module.exports = {getAll, getOne, addOne, modifyOne, deleteOne};