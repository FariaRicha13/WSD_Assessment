# Assessment for USD

## Tools and Technologies
- Node.js

## How to run this project
- clone this project
- Hit the following commands
- ```npm init -y```
- ```npm install cypress```
- ```npx cypress open\npx cypress run```

- To run it in chrome in a headed way
- ```npx cypress run -b chrome --headed```

## Pre-requisities
** You must have installed nodejs in your system/local device**

- 
## Framework Structure
The project was developed using the Page Object Model (POM) framework.

- [https://drive.google.com/file/d/1127-5tFJI78xyrWPxXJZ79fLbcGoN_xR/view?usp=share_link](https://drive.google.com/file/d/1HzQA9M7rBXTPZRBU7ZG8MkSpmv5NSY4R/view?usp=sharing)

## Reasoning Behind My Design Choices
The reasons for choosing this framework are outlined below:
- Reusability: UI elements and actions are defined in one place, so they can be used across multiple tests.
- Readability: Test scripts are cleaner and easier to understand, as test logic is separated from page element definitions.
- Modularity: Each page has its own class/file, making the framework organized and scalable.
- Single Point of Error: Any changes to a UI element need to be updated only in the corresponding page class, reducing repetitive fixes.
- Maintainability: The framework is easier to maintain and extend as the application evolves.
