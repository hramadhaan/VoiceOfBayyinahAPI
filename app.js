const express = require("express");
const admin = require("firebase-admin");

const serviceFirebase = require("./services/vob-moapps-firebase-adminsdk-ff242-27068f08bb.json");

// ROUTES
const authRoutes = require("./routes/auth");

const port = 8080;

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceFirebase),
  databaseURL: "https://vob-moapps-default-rtdb.firebaseio.com",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);
app.get("/", (req, res) =>
  res.redirect("https://voice-of-bayyinah-dashboard.herokuapp.com/")
);

app.listen(process.env.PORT || port, () =>
  console.log(`Development in http://localhost:${port}`)
);
