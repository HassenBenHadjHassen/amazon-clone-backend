import express, { json } from "express";
import cors from "cors";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    switch (e.type) {
      case "StripeCardError":
        console.log(`A payment error occurred: ${e.message}`);
        break;
      case "StripeInvalidRequestError":
        console.log("An invalid request occurred.");
        break;
      default:
        console.log("Another problem occurred, maybe unrelated to Stripe.");
        break;
    }
  }
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log("app is running on port", port);
});
