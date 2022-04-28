# Simple Jovo V4 Example using three Components

Based on the the official [Jovo v4 Sample: Alexa Skill & Google Action on AWS Lambda](https://github.com/jovotech/jovo-sample-alexa-googleassistant-lambda) sample project this example takes the "**LoveHatePizzaComponent**" and adds two new components named "**LoveHateDrinkComponent**" and "**LoveHateIceCreamComponent**". 

All three components make use of the "**YesIntent**" and "**NoIntent**". The Jovo framework makes sure that depending on the active component the request is processed by the correct handler.

