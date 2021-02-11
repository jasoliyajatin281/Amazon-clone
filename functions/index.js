const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IJ2OWI7cNJrUBtwgN0NQLmtxAWcSZo6BbqNkJEwGaaroG3NOCHFWBf61B0Dy4f4W0RSLXXkT5TRM2qYeweBI8bs00zb1YF5cb"
);

// API
// App config
const app = express();

// Middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
// Example endpoint
// http://localhost:5001/clone-40661/us-central1/api
