---
title: "Enhancing My Shaders With TouchDesigner"
date: "02-17-2024"
excerpt: "No longer limited by VSCode Extensions."
cover_image: "https://i.imgur.com/bm8lIwU.jpeg"
tags:
    - GLSL
    - Math
    - Shaders
    - Graphics
    - Touchdesigner
---


### Recap
It has been quite a while since I last posted an article, but that doesn't mean I haven't been busy in the interim. Last month, I was on a trip to New York and, while there, I had the opportunity to visit the [NYC Resistor](https://www.nycresistor.com) workspace.

It's a communal workspace where people come together and make some incredible things. I talked to lots of cool creators/makers and listened to a few talks about laser projection, shaders, and Touch Designer.

That's not what this article will be about, but I think it's important because without going to this meetup, talking these people, and absorbing this information, I would have never been able to make my shaders look the way they do. Thanks to everyone who attended the NYC Resistor Meetup!


### Back to Shaders 

In my [last article](https://arturovillalobos.dev/blog/noiseandgrpahics) about fractal Brownian motion and [the music visualizer](https://arturovillalobos.dev/blog/workingwiththreejsandshaders), I was left frustrated because I wasn't able to combine the two concepts.

In the fractal Brownian motion shaders, I was limited by the fact that my VSCode development environment, with all the required extensions, wasn't able to let me pass in music uniforms to the shader while it was running. (Or I'm just a bad programmer, lol.)

In the music visualizer, I was able to pass in music uniforms, but I really disliked the way I set up the system. JavaScript always has dependencies, but my setup was taking that idea to the extreme. I was editing locally installed packages to get the desired sound frequencies, and even then, I wasn't completely in love with how everything fit together. In short, it was janky.

After a few weeks, a friend told me about [TouchDesigner](https://derivative.ca), a tool developed and sold by Derivative that lets users program and implement live digital interactions and sets in a node-based editor.

After playing around with it for a while, I was able to get my GLSL shader code running, and before getting too deep into it, let's see the result:


| ![Gif of the touch Designer UI](https://i.imgur.com/a4NB6d0.gif) |
| :------------------------------------------------------------------------------------------- |
| _Current Touch Designer Project_         |


### How Did I Get This To Work ?

First things first, I need to thank the amazing and extremely talented [Torin Blankensmith](https://www.instagram.com/blankensmithing/). Without his help, I would have never been able to get my GLSL shader running in TouchDesigner. During the NYC Resistor Meetup, he shared with me an audio analyzer .tox file. A quick aside on .tox files: they are essentially shareable components that can be imported into TouchDesigner.

The specific .tox component Torin shared with me is an audio analysis slope. In my previous article about my music visualizer, I showed that in order to get it to work, I needed to edit the default Audio.js file's `getAverageFrequency()` function to not iterate through the whole frequency data array, but instead only certain segments.

| ![Image of the audio analysis slop .tox file](https://i.imgur.com/HPc8l09.png) |
| :------------------------------------------------------------------------------------------- |
| _Audio Analysis Component_         |

This had several limitations, but namely, the fact that it is not always clear what audio segments you, as the user, are pulling from this audio array. It took a lot of time on my part to test and figure out which frequencies I liked the most. Passing uniforms to my Three.js music visualizer was also not the most elegant, and the way I was using shaders meant that I needed to convert the whole shader script into a string to pass into a Three.js function that then renders the shader. Terrible workflow!

With this audio analyzing .tox component, I am able to capture and see what frequencies are changing the most in response to the song playing. With this key visual information, I am able to then map and bring in the specific frequencies inside of my shader with a GLSL TOP (TOPs are a type of component in TD, not really important) as uniforms.

| ![Different Frequencies captured by the AAS conmpnent](https://i.imgur.com/ttnvzPm.png) |
| :------------------------------------------------------------------------------------------- |
| _Frequency breakdown of the AAS Component_         |

TouchDesigner makes this workflow incredibly easy. As soon as I edit my shader and start using the uniforms I bring in, TD is able to hot-reload and show the changes in real time. I no longer need to edit my shader, convert that into a string, and then finally run npm run dev only to see that the changes I made made little difference.

| ![Different uniforms being brought into shader](https://i.imgur.com/5Al5ZDs.png) |
| :------------------------------------------------------------------------------------------- |
| _Uniforms from audio_         |


### Results

One thing right off the bat that you can see is that I am now able to render my shader in specific aspect ratios instead of screen recording certain segments of my screen, which resulted in really bad renditions of the original work. This workflow has really enhanced the videos I post to platforms because I can optimize for specific formats. Unfortunately, there is no GitHub repo I can share for this project; I haven't found a way to source control .toe project files. (If you know of a way to do this, please email me).

The silver lining to this is that I started out with a shader from a previous article, which is on GitHub, and you can find the link to that there.

| ![TouchDesigner UI](https://i.imgur.com/f5e2mrr.gif) |
| :------------------------------------------------------------------------------------------- |
| _9:16 Aspect ratio output from TD_         |

- Note:
    Because I am using Imgur as my quasi content cdn im not able to embed the video in this article. The YouTube embed method doesnt look great either so, if you want to see what the final shader actually looks like, you will have to either view it on TikTok or on Instragram. Both of which are linked below:
    - [Instagram](https://www.instagram.com/reel/C3f_RteAru3/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==)
    - [TikTok](https://www.tiktok.com/@bonbonassesino/video/7337018348481318190?_r=1&_t=8jze8fYmNQ3)