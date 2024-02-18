---
title: "Enhancing My Shaders With TouchDesigner"
date: "02-17-2024"
excerpt: "No longer limited by VSCode Extensions."
cover_image: "https://drive.google.com/uc?export=view&id=1ZqkC8sBRPJhM0iuc2QyCSCNv64SWIaFw"
tags:
    - GLSL
    - Math
    - Shaders
    - Graphics
    - Touchdesigner
---


### Recap
It has been quite a while since I last posted an article, but that doesn't mean I haven't been busy in the interim. Last month, I was on a trip to New York and, while there, I had the opportunity to visit the NYC Resistor workspace.

It's a communal workspace where people come together and make some incredible things. I talked to lots of cool creators/makers and listened to a few talks about laser projection, shaders, and Touch Designer.

That's not what this article will be about, but I think it's important because without going to this meetup, talking these people, and absorbing this information, I would have never been able to make my shaders look the way they do. Thanks to everyone who attended the NYC Resistor Meetup!


### Back to Shaders 

In my last article about fractal Brownian motion and the music visualizer, I was left frustrated because I wasn't able to combine the two concepts.

In the fractal Brownian motion shaders, I was limited by the fact that my VSCode development environment, with all the required extensions, wasn't able to let me pass in music uniforms to the shader while it was running. (Or I'm just a bad programmer, lol.)

In the music visualizer, I was able to pass in music uniforms, but I really disliked the way I set up the system. JavaScript always has dependencies, but my setup was taking that idea to the extreme. I was editing locally installed packages to get the desired sound frequencies, and even then, I wasn't completely in love with how everything fit together. In short, it was janky.

After a few weeks, a friend told me about TouchDesigner, a tool developed and sold by Derivative that lets users program and implement live digital interactions and sets in a node-based editor.

After playing around with it for a while, I was able to get my GLSL shader code running, and before getting too deep into it, let's see the result:

### How Did I Get This Work ?