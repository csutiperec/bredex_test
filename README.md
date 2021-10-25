# bredex_test

## Description
This git repository was created for the introduction test software for BREDEX GmbH created by Peter Csutoras.\
It contains a backend server fulfilling CRUD request using ExpressJS on a PostgreSQL database and a frontend managing application using React.

## How to Run
### Prerequisites:
You need to have Node.js and Docker installed.
### Setup DB
Open Terminal or CMD/Powershell and run

#### On Windows:

```bash
docker container run -d --name=bredex-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e PGDATA=C:/pgdata -v C:/pgdata:/pgdata postgres
```

#### On Linux:

```bash
docker container run -d --name=bredex-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e PGDATA=/pgdata -v /pgdata:/pgdata postgres
```
In docker click the cli button and run: 
```bash
psql -h localhost -p 5432 -U postgres
```
You should see:
```bash
postgres=#
```
Copy the contents of database.sql in the root of the git repository and paste into the prompt then hit enter.\
Now you should have the database set up.
### Run the REST API
Open Terminal or CMD/Powershell
1) Navigate to /RestAPI
2) run: npm install
3) run: npm run start
### Run Frontend React Application
Open Terminal or CMD/Powershell
1) Navigate to /ReactFrontend/f1-frontend
2) run: npm install
3) run: npm run start