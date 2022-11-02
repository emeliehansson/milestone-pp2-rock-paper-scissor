# Rock, Paper, Scissors, Lizard, Spock

If you've ever watched The Big Bang Theory you might have heard about Sheldon Coopers modified version of Rock, Paper, Scissors, where he adds Lizard and Spock. In this game you will have the opportunity to try it out.

The goal here is to try to beat the computer! Hopefully you'll succeed, GOOD LUCK! 

![Am I Responsive](readme-assets/Responsiveness.png)

## Table of Contents
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Wireframes](#wireframes)
- [Design](#design)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
  - [Contrast Checker](#contrast-checker)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)

---

<a name="features"></a>

## **Features**

### Existing Features

- Landing Page & Header:

  - As soon as the user enters the website it's clear what the game is about. And on the bottom of the page there are instructions on how to play and what the rules are.
  - The colors chosen are a soft pink color for the background with two different purple colors for the font and other details, such as the hover features around the buttons. 
  - The header shows the name of the game at the top of the page.

&nbsp;

![Header](readme-assets/Header.png)

&nbsp;

- Buttons:

  - The text "Pick your weapon" gives the user an instruction to choose one of the options below: the buttons. The game is started by pressing one of the buttons.

  - The buttons have images of the different options, from Rock to Spock.

  - When the user hovers over the buttons a purple circle appears on the outer parts of the circle. When the user clicks on of the buttons the button has a focus feature that will keep the purple circle around the button until the user clicks on another button or anywhere else on the page.  

&nbsp;

![Buttons](readme-assets/Buttons.png)

&nbsp;

- Result Message:

  - When the user have made their choice, a message appears below the buttons. The message clearly states if the user won, lost or if it's a tie. 

&nbsp;

![Tie](readme-assets/Tie.png)
![User-win](readme-assets/User%20wins.png)
![Computer-win](readme-assets/Computer%20wins.png)

&nbsp;

- The Score Area:

  - Below the result message there's a score area which clearly shows the status of how many times the user has won and how many times the computer has won.

&nbsp;

![Score-area](readme-assets/Score%20area.png)

&nbsp;

- Instructions: 

  - Below the score area there are the instructions of the game.

&nbsp;

![Instructions](readme-assets/Instructions.png)

&nbsp;

- Social Media Links:

  - And on the bottom of the page there are two links for Social Media, on for my Github and one for my LinkedIn.

&nbsp;

![Social-media](readme-assets/Social%20media.png)

&nbsp;

### Features Left to Implement

When it comes to this project, I would consider adding the following features in the future: 
  - A limited amount of times to play a game, for example "best of three" or "best of five". 
  - Three different choices for difficulty level, "easy", "medium" and "hard".

---

&nbsp;

<a name="wireframes"></a>

## **Wireframes**

The following images are from Balsamiq where I created the wireframes for what I wanted my game to look like:

&nbsp;

![Laptop-wireframe](readme-assets/Laptop%20wireframe.png)

&nbsp;

![Ipad-wireframe](readme-assets/Ipad%20wireframe.png)
&nbsp;
![Iphone-wireframe](readme-assets/Iphone%20wireframe.png)

---

&nbsp;

<a name="design"></a>

## **Design**

I have chosen the colors based on how well they work together and also because I wanted to keep it simple but not have it being plain white. 
The colors compatibility have been tester through Contract Checker (please see the testing part below).

&nbsp;

![Colors](readme-assets/Colors%20pp2.png)

---

&nbsp;

<a name="testing"></a>

## **Testing**

I have asked family and friends to test the website on different devices and in different browsers, and it has work very well. The browsers that the site have been tested on are Google Chrome, Safari and Firefox.  The site does what it's supposed to, the game works, the win/lose text shows up and it's counting the scores. 

Having already done a project with HTML and CSS, as well as being able to practice since then, I managed to get that in place much easier this time, which was a huge confidence boost! 
The biggest challenge for this project was JavaScript. I logically knew what I had to do, to get my site to behave like I wanted it to. But the hard part was to understand how to implement it to make it work, so I started by adding my variables and then working my way from there. 

The first big struggle I encountered was to figure out how to get the computer to have a random choice, and then be able to compare it to the choice of the user. I knew I had to create a function with an if/else if statement, but I didn't know exactly how. This is where W3 Schools and Developer Mozilla were a big help, this is where I've found most of my information, as well as going back through the modules. Since this game has a lot of different choices and outcomes, it was a small challenge to get them all in place and working, but now it looks good and it's working! 



&nbsp;

### Validator Testing

- HTML
  - No errors were returned then passing through [W3C Validator](https://validator.w3.org/).
  
  &nbsp;

  ![W3C-validator](readme-assets/HTML%20Validator.png)

- CSS
  - No errors were returned then passing through [Jigsaw Validator](https://jigsaw.w3.org/css-validator/).

  &nbsp;

  ![Jigsaw-validator](readme-assets/CSS%20Validator.png)

- JavaScript
  - No errors were returned then passing through [JS Hint](https://jshint.com/).
  
  &nbsp;

  ![JSHint-validator](readme-assets/JavaScript%20Validator.png)

### Unfixed Bugs
No unfixed bugs have been found.

&nbsp;

### Contrast Checker
The colors compatibility have been checked in the program Contrast Checker:

&nbsp;

![contrast](readme-assets/Contrast%20checker.png)
![contrast](readme-assets/Contrast%20checker%202.png)


&nbsp;

### Lighthouse
The website got good points on both desktop and mobile.

Desktop:

![lighthouse-desktop](readme-assets/Lighthouse%20Desktop.png)

Mobile:

![lighthouse-mobile](readme-assets/Lighthouse%20Mobile.png)

&nbsp;

---

&nbsp;

<a name="deployment"></a>
## **Deployment**

- The site was deployed to GitHub pages. These are the following steps:
  - In the GitHub repository, navitage to the Settings tab at the upper part of the page.
  - In the menu to the left, click the one called "Pages".
  - From the source drop-down menu, select "Deploy from a branch".
  - Select the branch called "main" and click save.
  - When all of these steps have been followed the site will reload and the deployed link will appear. Although, this might take a few minutes. 


The live link can be found here: [Rock, Paper, Scissors, Lizard, Spock](https://emeliehansson.github.io/milestone-pp2-rock-paper-scissor/)

---

&nbsp;

<a name="credits"></a>

## **Credits**

- For general information and tips I have used these websites: [W3 Schools](https://www.w3schools.com/) and [Developer Mozilla](https://developer.mozilla.org/en-US/).
- Inspiration for this project was found with some of my fellow students:
  - [CarinaAJ](https://github.com/CarinaAJ/p2-rock-paper-scissors)
  - [aelfrith92](https://github.com/aelfrith92/rockPaperScissorsLizardSpock)

### Content

- The code for the social media links in the footer was borrowed from the Love Running project in the HTML & CSS module. 
- The social media icons in the footer were taken from [Font Awesome](https://fontawesome.com/).
- The font style, Trispace, was found at [Google Fonts](https://fonts.google.com/).

### Media

- The images for the different options was found in another RPSLS game on Github: [JLChamberlain](https://github.com/JLChamberlain/RPSLS).

### Other sites

- The emojis used in the result text was found at [W3 Schools](https://www.w3schools.com/charsets/ref_emoji_smileys.asp).
- To find and create a color combo I've used this website: [Colorspace](https://mycolor.space/?hex=%23FAF7FF&sub=1).