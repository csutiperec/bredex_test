const express = require('express');
var cors = require('cors');
const PORT = process.env.PORT || 8080;
const teams_routes = require('./Routes/teams_routes');
const users_routes = require('./Routes/users_routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/teams', teams_routes);
app.use('/api/users', users_routes);

app.listen(
    PORT,
    () => console.log('Server running on http://localhost:'+PORT)
)