---
title: "Fractal Brownian Motion and Shaders"
date: "10-23-2023"
excerpt: "Frustrated that math is really cool now..."
cover_image: "https://i.imgur.com/sLANW2I.jpeg"
tags:
    - GLSL
    - Math
    - Shaders
    - Graphics
---

### Motivation and Starting point

Its been a bit since I wrote something but I really wanted to get back into shaders and graphics programming. What better place to start (again) than
[The Book of Shaders](https://thebookofshaders.com) ? I was sitting there reading when I found a very interesting chapter on noise and [Fractal Brownian Motion](https://en.wikipedia.org/wiki/Fractional_Brownian_motion)

### Math Part :(

So what is Fractional Brownian Motion (fBm)? According to some [site](https://davis.wpi.edu/~matt/courses/fractals/brownian.html) from Worcester Polytechnic Institute, fBm is a random walk process,
consisting of steps that are taken in a random direction with step lengths that hold a characteristic value.

But what does that mean exactly? Without having to write out the dirivatives in latex ill simplify it to these couple of statements:
- fBM of index  α (0 <  α < 1)
- _X(t)_ is a continuous function of _t_
- For any _t > 0_ and _h > 0_ ,
- _X(t + h) - X(T)_ is normally distributed with a mean of 0 and varience of the _h^2α_

Here _h_ is the step taken.


| ![equation](https://i.imgur.com/VOjl7ZF.png) |
| :------------------------------------------------------------------------------------------- |
| _Picture taken from the WPI website_         |

### Uses for fBm

Ive mentioned him before but Inigo Quilez has a really interesting [article](https://iquilezles.org/articles/morenoise/) and [video](https://www.youtube.com/watch?v=BFld4EBO2RE) detailing how fBm is used to create procedural landscapes in 3-D.

From the code you can see why:
```
// normalizing our coordinates
    vec2 uv = gl_FragCoord.xy / u_resolution;
    // centering the origin and making clipspace [1,1]
    uv = 2.0*(uv - 0.5);
    // adjusting x coords to adjust for stretching
    uv.x *= u_resolution.x/u_resolution.y;
    // 
    // 
    // 
    float displacement = patternfbm(uv*3.0 );
```
I have used this technique before when making a music visualizer which you can read about [here](https://arturovillalobos.dev/blog/workingwiththreejsandshaders), but basically we can generate a normal map from the fBm function and use those values (which are normalized) in whatever way we want.

### How to construct the fBm

Lets take a look at the code for making this function and see what it looks like:

```
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define OCTAVES 5
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}
```
The main sections that make this system work are the `random`, `noise`, and `fbm` function. It's important to note that 2 of these functions are somewhat arbitrary.
The `noise` and `random` functions here can be replaced by any number of other random (sudo) and noise functions that are out there, I could use the Perlin noise function from my last article and plug it in:



| ![Picture of Graphic](https://i.imgur.com/dZj5ZSz.png) |
| :------------------------------------------------------------------------------------------- |
| _fBm with a Perlin noise function_         |


This is a bit too messy for my taste so lets stick to the original noise function. Youll notice that all we are doing is adding some noise to the wave, and by multiplying the aplitude by 0.5, we are essentially making the details we see smaller or larger depending on the number of octaves we decide to use. I found the best results at 4-5.

### Briefly on Color 

I have been deeply inspired by the works of artist [FELIPE PANTONE](https://www.instagram.com/felipepantone/), his color palletes and use of gradients is very cool to me and using this [website](http://dev.thi.ng/gradients/), I was able to create a color pallete that would work with GLSL, mimicking his own palletes:

```
vec3 pallete(float t){
    vec3 a = vec3(0.5,0.5,0.5);
    vec3 b = vec3(0.5,0.5,0.5);
    vec3 c = vec3(1.0,1.0,1.0);
    vec3 d = vec3(0.236,0.416,0.557);
    return a + b*cos(6.28318*(c+t+d));
}
```

### Results

Below is a brief animation which to my eye looks really sick. Kinda like multicolored flames from the one episode of Avatar the last Airbender. (iykyk):

| ![gif of fBm](https://i.imgur.com/PLOhnFR.gif) |
| :------------------------------------------------------------------------------------------- |
| _fBm with a random noise function from shadertoy_         |

- [Source Code](https://github.com/arturovilla/fbm_glsl)
- [Instagram](https://www.instagram.com/reel/CyxO2AfAhdy/)
- [Tiktok](https://www.tiktok.com/@bonbonassesino/video/7293386205306146091?_r=1&_t=8glmhxTWQyA)