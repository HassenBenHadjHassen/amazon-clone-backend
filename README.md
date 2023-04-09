# Store Backend with Stripe Payment Provider Integration For Amazon

This is a Node.js backend code that allows you to integrate the Stripe payment provider into your store's backend. The code is written in JavaScript using the Express framework and the Stripe Node.js library.

## Installation

To use this code, you need to install the required dependencies first. You can do this by running the following command in your terminal:
- `npm install express cors stripe`


## Usage

After installing the dependencies, you can start the backend server by running the following command in your terminal:
- `node index.js`


The server will start running on port 5500 by default, or you can set your own port by setting the `PORT` environment variable.

## API Endpoints

This backend code provides the following API endpoints:

### GET /

This endpoint returns a simple "hello world" message to verify that the server is running.

### POST /payment/create

This endpoint creates a payment intent for a given amount in USD and returns the client secret of the payment intent to the frontend. The amount is passed as a query parameter in the URL.

## Stripe Integration

This backend code uses the Stripe Node.js library to create a payment intent with the specified amount and currency. The client secret of the payment intent is then sent back to the frontend to complete the payment process.

## License

This code is released under the MIT License. Feel free to use, modify and distribute it.
