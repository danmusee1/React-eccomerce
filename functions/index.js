const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HQt6QCzI6o6ZO7IjiMNFnm2E84fWc2MyNqqszZbVFvRQARrwz3jBKlT0GxcUoIQc4dgAadUi4xCCwbnAMewNJ5D00w7tI4Pfu'
);

//API

//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('payment request received boom!!! for this amount>>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

//(http://localhost:5001/challenge-ed8a2/us-central1/api).
