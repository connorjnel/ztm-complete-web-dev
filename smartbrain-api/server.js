const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
	client: "pg",
	connection: {
		host: "127.0.0.1",
		port: 5432,
		user: "postgres",
		password: "baka",
		database: "smartbrain",
	},
});

db.select("*")
	.from("users")
	.then((data) => {
		// console.log(data);
	});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Root
app.get("/", (req, res) => {
	res.send("Success");
});

// Signin
app.post("/signin", (req, res) => {
	signin.handleSignin(req, res, db, bcrypt);
});

// Register
app.post("/register", (req, res) => {
	register.handleRegister(req, res, db, bcrypt);
});

// Profile
app.get("/profile/:id", (req, res) => {
	profile.handleProfileGet(req, res, db);
});

// Image / Submission Count
app.put("/image", (req, res) => {
	image.handleImage(req, res, db);
});

// Image / API
app.post("/imageurl", (req, res) => {
	image.handleApiCall(req, res);
});

// Listener
app.listen(3000, () => {
	console.log("App is running on port 3000");
});
