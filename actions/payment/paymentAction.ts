"use server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



// send stripe publishable key
export const stripePublishableKey = () => {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  return publishableKey;
};

// send stripe payment intent
export const stripePaymentIntent = async ({ amount }: { amount: Number }) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "for amazon-clone project",
      metadata: {
        company: "bdcode",
      },
      shipping: {
        name: "Foysal Ahammed",
        address: {
          line1: "Dhaka Gulshan ",
          line2: "1230 Badda St",
          postal_code: "98140",
          city: "Dhaka",
          state: "Dhaka",
          country: "Bangladesh",
        },
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return paymentIntent;
  } catch (error) {
    console.log(error);
  }
};
