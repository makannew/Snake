Roadtrain
===========
Roadtrain is a javascript game that I have created to practice 3D and physic libraries.
[Try it!](https://makannew.github.io/roadtrain/)

![roadtrain1](screenshots/image2.png)

## Credits

This repo is compiled by [Makan Edrisi](https://github.com/makannew)

## Structure
I have used [Mgame](https://github.com/makannew/MGame) to build this game. 

[Mgame](https://github.com/makannew/MGame) implements [Three.js](https://github.com/mrdoob/three.js) as 3D liberary and [Cannon.js](https://github.com/schteppe/cannon.js) as physic liberary to provide an easy way to develop javascript games.

## What I have learned
Combining 3D and physic libraries results to a realistic feeling. However, there is computation limitation which causes frame rate drops below 60fps.

During debuging I have noticed the bottleneck of performance is in physic engine, mainly in collision detection function.
Collision detector is responsible to find out where two objects touching by applying math operations between each object with all others. In other word performance exponentialy decreases by increasing total objects.
This has a huge effect on javascript physic game development and limit it to only simple games.

Although, I think there are some ways to fix this problem:
- using web workers to take advantage of multi-thread computing
- using web-assembly
- using machin-learning model as collision detection function

Hopefully, I will try those solutions in future!


