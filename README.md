# Clevy Simple Technical Test

The goal of this simple exercise is to create a very basic chatbot, that is able to answer a few simple questions.

Write a script that takes a question as its first argument, and will output the answer in the console. For example:

```
node bot.js "are you a bot?"
// yes I'm a bot
```

## Rules 

In this repository you will find 2 CSV files. `input.csv` contains sample questions that can be asked to the chatbot and `answers.csv` contains the answers to the questions.

- Use recast.ai as the NLP service to detect the intent. The request token you will use is `901ae589a236643b918f5f6a293adfde`.
- When the intent `ask-creator` is triggered, the bot will fetch a random name from an external API such as [https://randomuser.me/](https://randomuser.me/) and replace the `${name}` part with the generated name.
- If the answer is not available, handle as you see fit.
- Log all interactions (question and answer) in a database of your choice (MySQL preferably - on a Mac, you can simply `brew install mysql`, or use an online DB service of your choice) and include some basic installation instructions for the database (make it as simple as you can, don't waste time with DB installation/configuration).
- You will use promises with the library of your choice and async/await, and comply with the [airbnb javascript styleguide](https://github.com/airbnb/javascript) (preferably using eslint as a linter). **The readability of your code is important.**
- The program should run in node 8.9, and use ES6 syntax wherever possible.
- No user interface is required, a simple node script + console.log will do.

This exercise should take between 30-60 minutes to complete. When finished, please upload to a repository of your choice (you can even use this gitlab instance if you like).

## Resources

Recast API documentation: [http://man.recast.ai](http://man.recast.ai)

Here is a curl request exemple to recast :

```
curl -H "Authorization: Token 901ae589a236643b918f5f6a293adfde" \
    -H "Content-type: application/json" \
    -d '{"text":"Hello Recast", "language":"en"}' \
    -X POST "https://api.recast.ai/v2/request"
```

Randomuser api is available via a simple unauthentified GET call to [https://randomuser.me/api](https://randomuser.me/api)
