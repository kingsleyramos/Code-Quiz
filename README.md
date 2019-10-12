# Homework 4: Code Quiz

## Project Goal

Create a quiz that will continuously ask questions as they are being answered with a limited time, and having the user record their score from the quiz and store and list the stores which the option to delete all scores.

## Challenges

### Struggle 1: Architecture

I took the entire Sunday after the homework was assigned thinking about how I was going to  write out and program the entire homework. I was thinking about coding it all in HTML but I realized that it need to be dynamic. So  of course it would have to be through DOM Manipulation. Depending on each click, it would go to a certain screen and do different events. So I started to write out all the different functions I think I would need and started to plan out how each function would interact with another function. I realized that the entire quiz was dependent on events so there was almost no beginning code, it was all event delegation. 

### Struggle 2: DOM Manipulation

DOM Manipulation was the most difficult part for me. At first I did not understand how any of the `.appendchild`, nodes, node properties, etc. As I was playing around I started to understand how to write HTML in Javascript. It was all trial and error and eventually I started to understand other functions such as `.setAttribule`, `.firstChild`, etc.

### Struggle 3: Event Handling

This was were everything was a bit more familiar. I did not understand `event.target` and the purpose of it, but after some trying and playing around, I realized how EASY event delegation is and how convenient it is Only have one event listener for multiple buttons within a parent node made this entire project quite easy.

### Struggle 4: Local Storage

As I was doing event delegation, It took me a few hours trying to figure out how to store the scores into local storage, bring it back from local storage, manipulate it, then store it back to local storage. I also realized that I cannot store scores into local storage if "score" was not in there before or else it will return undefined if going to the quiz for the first time. I was also running into an issue where the local storage would clear every time the page reloads. This was when I realized that adding comments and `console.log` to everything was incredibly helpful. As the code got longer, it got more difficult to read and understand where everything is. 

## Take Aways

The big take aways I got from this project is being efficient in commenting and organizing code as it is being typed because trying to troubleshoot a small issue within large code can take while as I go step by step moving up and down my code. Sometimes I would also get lost within my code. I also learned that 'console.log' is pretty much how to troubleshoot anything in code. I also feel very comfortable with DOM manipulation in javascript and I now understand event listening and event delegating.