const pool = require('../database');
const validator = require('../Utils/validator');
const generator = require('../Utils/generators');

const login = async (req, res) =>
{
    try
    {
        const {error} = validator.validateUser(req.body);
        if(error)
        {
            res.status(400).send(error);
            return;
        }
        const {rows} = await pool.query('SELECT * FROM users WHERE username=$1 AND password_=CAST((SELECT sha256($2)) AS VARCHAR)',[req.body.username, req.body.password]);
        if(rows.length===0){
            res.status(401).send('Invalid username or password!');
            return;
        }
        const token = generator.generateAccessToken(req.body.username);
        res.send({accessToken: token});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('An error occured, details: '+err);
    }
};

const register = async (req, res) =>
{
    try
    {
        const {error} = validator.validateUser(req.body);
        if(error)
        {
            res.status(400).send(error);
            return;
        }
        const {rowCount} = await pool.query('SELECT username FROM users WHERE username=$1',[req.body.username]);
        if(rowCount===0){
            const {rows} = await pool.query('INSERT INTO users(username, password_) VALUES($1, (SELECT sha256($2))) RETURNING *',[req.body.username, req.body.password]);
            const token = generator.generateAccessToken(req.body.username);
            res.send({accessToken: token});
            return;
        }
        res.status(400).send('User already exists')
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('An error occured, details: '+err);
    }
};

module.exports = {login, register};