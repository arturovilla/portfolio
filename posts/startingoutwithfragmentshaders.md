---
title: "Making My Own Custom Shaders"
date: "08-03-2023"
excerpt: "Quickly figuring out that GLSL is better than MSL"
cover_image: "https://i.imgur.com/LYMpHab.jpeg"
tags:
    - webgl
    - GLSL
    - Metal
    - Generative
---

## Background

So recently i was scrolling through instagram and saw the post below by artist @italiano.jpg.
He uses [P5.js](https://p5js.org) to render these animations onto an html canvas and using the help of mathematical functions, he is able to create pretty mesmerizing and interesting animations.

| ![Italiano's work](https://i.imgur.com/hY3Zo06.gif) |
| :----------------------------------------------------------------------------------------------- |
| _This is a sample Post of Italiano's work, using P5.js, processing, or some other framework_     |

It is posts like this that inspired me to do the same thing. Although I didn't end up using P5.js, I will explore that in the future.
I wanted to make something that can be used in other projects (Like video games, data visualization, etc..)

## Getting To Work

So, how did I do it and what tools did I use? Well first its important to note that my development
environment is MacOS Ventura 13.4.1 on apple silicon. This is very important, all and all there are many ways to create fragment shaders but some tools are dependent on what platforms you are using. For example, using something well documented like HLSL (high-level shading-lang) developed in conjunction with Nvidia and Microsoft is obviously not going to work well in my personal local environment. I set out to find what can i as a developer using macOS use to make my vision a reality.

I started out on the Apple developer website to find [this](https://developer.apple.com/documentation/metal/using_metal_to_draw_a_view_s_contents):

| ![Apple developer Page](https://i.imgur.com/lOmy1lv.jpeg) |
| :---------------------------------------------------------------------------------------------------- |
| _Page grab of the apple developer page_                                                               |

If you follow the link you'll see that the documentation is immense, almost overwhelming. Long story long, in order to get good tooling for MLS(Metal shading language) like linting and error checking , I needed to use Apple's proprietary IDE, Xcode.
The issue with this is that Xcode has so much configuration, views, and management features that I simply don't need or want. Just take a look at the screen shot below:

| ![Xcode Screen Grab](https://i.imgur.com/yS00aXv.jpeg)                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _To me this IDE feels a bit too overwhelming to just experiment, also i cant even run the sample project without downloading the 3.3gb Apple TV SDKs lol_ |

I set off to find a simpler solution, and to my excitement, many people have been working on this exact problem

For example. check [this](https://alain.xyz/blog/a-review-of-shader-languages) website out.
A review of shader languages was a great starting point that I wish i would have found earlier and it is here where I found out about GLSL (OpenGL Shading Language).
I knew this would run well on my platform. While OpenGL has been unsupported by apple for some time now, OpenGL and WGSL work really well together and I do end up outputting my fragment shaders to the browser while still retaining performance.

| ![A Review of Shader Languages](https://i.imgur.com/rY2MZe7.png) |
| :------------------------------------------------------------------------------------------------------------ |
| _This shows the interoperability between GLSL and Wgsl_                                                       |

Then I found what I was looking for. I stumbled across [@patriciogv's](https://twitter.com/intent/follow?screen_name=patriciogv&original_referer=https://patriciogonzalezvivo.com/) twitter and website. Patricio is the creator of [The Book of Shaders](https://thebookofshaders.com) and has created tools and extensions for vscode
That helps his work flow in developing fragment shaders in a live environment side-by-side with the output.

## Results

Now all I needed to do was program some visuals. There are literally thousands of mathematical functions and techniques that produce stunning visuals and the website I found that works really well for explaining these was [Inigo Quill's](https://iquilezles.org) page.
This software developer has helped so many and I cant help but to want to emulate him with my own projects, he has published tons of articles and links to tools he uses for his workflow that helped greatly in this project.

Below is my own custom shader. I took inspiration from all of the posts from Italiano and Inigo and started experimenting. I will be continuing to make these shaders as I delve deeper into graphics programming and will be posting them on my public instagram account [@blur_bon](https://www.instagram.com/blur_bon/). Below you can find my finished shader and the code below:

```
void main(){
    vec3 finalcolor = vec3(0.0);

    //normalizing coordinates
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    // saving orginal lenght to center

    //shifting orgin to the middle of the canvas but also
    // making sure that the clip space is -1,1 in all directions
    uv = (uv- 0.5) * 2.0;
    uv.x *= u_resolution.x / u_resolution.y;
    vec2 uv0 = uv;

    // iteration block
    for(float i =0.0; i < 2.0; i++){
        // adding fractal component
        uv = fract(uv * 3.0) - 0.5;


        // making some concenttring rings with sin function
        float d  = length(uv) * exp(-length(uv0));
        vec3 color = palette(length(uv0) + i*0.5 +  u_time*0.4);
        d = sin(d * 8.0 + u_time) / 8.0;
        d = abs(d);
        d = pow(0.02 / d , 1.8);

        finalcolor += color *d / 2.0;
    }

    gl_FragColor = vec4(finalcolor,1);

}
```

| ![My Custom Shader](https://i.imgur.com/GEZFSxY.jpeg) |
| :------------------------------------------------------------------------------------------------ |
| _A fractal design that i am starting out with, we will see where it goes from here_               |
