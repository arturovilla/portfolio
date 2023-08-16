---
title: "Using Three.js to Render Shaders and Visualize Music"
date: "08-14-2023"
excerpt: "Three.js is very very cool"
cover_image: "https://drive.google.com/uc?export=view&id=1-QN3sPd6l-P4OUf-Bp-5lW21MKgRUTcS"
tags:
    - Three.js
    - GLSL
    - Shaders
    - Generative
---

### Context

Recently I have been playing around with shaders written in GLSL to render cool animations. I dove into the details of how I started programming
in GLSL which you can read [here](https://arturovillalobos.dev/blog/startingoutwithfragmentshaders), in this post im going into how to I used Three.js
to render vertex and fragment shaders on an HTML canvas using webgl. In my previous postIwas use several Vscode extensions written by the ever talented
[Patricio Gonzalez Vivo](https://patriciogonzalezvivo.com), unfortunatly this approach had several serious limitations. The vscode extensions did not have the
ability of loading meshes and rendering 3D objects to the screen. Three.js solves this.

### Approach

Like many the first place I started was researching, reading the docs, and watching some tutorials. After watching a tutorial by
[Visionary 3D's](https://twitter.com/3d_visionary). I felt conformtable venturing on and creating my own 3D animation. There are a bunch
of approaches of integrating Three.js into projects. In this post im not going to dive into the boilerplate to get the scene, cameras, and
geometries to render. In this post im going to focus on some interesting portions of the project.

### How GLSL ties into Three.js

Three.js allows a developer to render vertex and fragment shaders which is wholy different from my previous post. While this is really cool
there is more tinckering to do, specifically when trying to use global variables like `uTime;`

```
// meshes
  const geometry = new THREE.IcosahedronGeometry(1, 200)
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    // wireframe: true,
  })

  material.uniforms.uTime = { value: 0 }
```

### The Shaders

I wanted to create a sphere where the surface displaces along the normals using [Perlin Noise](https://en.wikipedia.org/wiki/Perlin_noise).
One important thingIlearned during this project is how how vertex shaders render shapes to the screen Brace yourself , its a bit math heavy.

vertex shaders have a variety of approaches to handling all the differnt things going on like angle, scale, rotation , relative to the camera,
the approachIused was something called [MVP](https://jsantell.com/model-view-projection/).

-   Model Matrix : this matrix deals with the position, scale, and rotation of our object.
-   View Matrix : deals with the position, scale, and rotation of the camera
-   Projection matrix : this matrix actually puts objects onto the screen

These discriptions might not make sense now but take a look at the code below:

```
 // MVP
    vec4 modelViewPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
	gl_Position = projectedPosition;
```

Okay so lets take a look what we are trying to do here.

The `modelViewMatrix` is global matrix that is available to us as programmers from the get go in Three.js
and `position` a vector with 3 elements that also come from Three.js and is also available as a global variable in GLSL.

We are dealing with matricies so order of multiplication matters. We make `modelViewMatrix`. In a simular way, we make `projectedPosition` from the multiplication
of the global `projectionMatrix` and the vec4 we just made, `modelViewPosition`, in that order. An now, through multiplication weve combined all the relevant data points from the model matrix, View matrix, and projection matrix.

### Perlin Noise

So how do we change the surface? well after looking through [shaderToy](https://www.shadertoy.com) I found a noise function that suited me. I am not going to include it here butIwill link it.
Its. really. long.

but now lets look at some helper functions to get the ball rolling.

```
float smoothMod(float axis, float amp, float rad){
    // float scaledPass = abs(sin(uLowPass));
    float top = cos(PI * (axis / amp)) * sin(PI * (axis / amp));
    float bottom = pow(sin(PI * (axis / amp)), 2.0) + pow(rad, 2.0) ;
    float at = atan(top / bottom);
    return amp * (1.0 / 2.0) - (1.0 / PI) * at;

}


float fit(float unscaled, float originalMin, float originalMax, float minAllowed, float maxAllowed){
	return (maxAllowed - minAllowed) * (unscaled - originalMin) / (originalMax - originalMin)+ minAllowed;
}

float wave (vec3 position){
  float scaledPass = abs(sin(uLowPass));
	return fit(smoothMod(position.y*4.0 ,1.0,1.5 - scaledPass), 0.35, 0.6, 0.0, 1.0 ) ;
}

```

For a moment lets ingore the `scaledPass` variable. Ill get into that later. What we have here are three helper functions
that are used in conjuction with my `noise` function. Below is the code inside the main function that runs these three functions
along with the noise function.

```

	vec3 coords = normal;
	coords.y += uTime ;
  coords.x +=  uTime ;
	vec3 noisePattern = vec3(noise(coords));
	float pattern  = wave(noisePattern) ;


	// sending data to fragment shader - VARYINGS
	vPosition = position;
	vNormal = normal;
	vUv = uv;
	vDisplacement = pattern;
```

The noise function return a floating point value and we are setting that ONE floating point value to a vector of size three, (all components are the same), called `noisePattern`.

Passing this variable to our wave function allows up to displace the mesh of our object along a particular axis.

### Audio.js and How Three.js handles Audio.

Finally, how do we pass Audio information to our shaders ? Well Three.js has thought of that. In Three.js we have the ability to pass
[uniforms](https://thebookofshaders.com/03/) to our material. Take a look at how we defined our material:

```
const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
```

With this defined we are able to create uniforms and pass those as values that are available to both the fragment and vertex shaders.

| `material.uniforms.uTime = { value: 0 }`                                                                 |
| :------------------------------------------------------------------------------------------------------- |
| _The 'u' at the beginning of uniform varible names is a naming convention found in many shader programs_ |

So whatIdid is make a class that handles all the audio and uniform setup for a particular mesh:

```
constructor(mesh, frequencyUniformName) {
    // mesh setup
    this.mesh = mesh
    this.frequencyUniformName = frequencyUniformName
    // whole song
    this.mesh.material.uniforms[this.frequencyUniformName] = { value: 0 }

    // STEMS
    this.mesh.material.uniforms['uLowPass'] = { value: 0 }

    //  audio listener
    this.listener = new THREE.AudioListener()
    this.mesh.add(this.listener)

    // global audio source
    this.sound = new THREE.Audio(this.listener)
    this.loader = new THREE.AudioLoader()

    // analyzer
    this.analyzer = new THREE.AudioAnalyser(this.sound, 128)
  }

  lowpass() {
    // 40-44 seems to be for the voice frequencies
    // 36-40 seems to be for the voice frequencies
    // 36-40 seems to be for the voice frequencies
    //

    let value = 0
    const data = this.analyzer.getFrequencyData()

    for (letI= 41;I< 44; i++) {
      value += data[i]
    }

    return value / data.length
  }

  load(path) {
    this.loader.load(path, (buffer) => {
      this.sound.setBuffer(buffer)
      this.sound.setLoop(true)
      this.sound.setVolume(0.45)
      this.sound.play()
    })
  }

  getFrequency() {
    return this.analyzer.getAverageFrequency()
  }

  update() {
    // whole song
    const freqAvg = Math.max(this.getFrequency() - 90, 0) / 2
    this.mesh.material.uniforms[this.frequencyUniformName].value = freqAvg

    const lowFreq = this.lowpass()
    // this.mesh.material.uniforms['uLowPass'].value = lowFreq
    const lowpassfreq = this.mesh.material.uniforms['uLowPass']

    gsap.to(lowpassfreq, {
      duration: 0.25,
      ease: 'Fast.easeOut',
      value: lowFreq,
    })
  }
```

The code is pretty self explainatory ill go through the main parts.

-   first we initialize some values. Three.js has audio libraries thats lets us setup a listener, analyzer, and audio source which will be mp3 files.
-   Next we we set up four functions
    -   load()
    -   update()
    -   getFrequency()
    -   lowpass()

The two interesting parts of this class art the `getFrequency()` and `lowpass()` functions. One issue with the analyzer functions found within three.js
is that there are not alot of them. If you wanted to get frequencies that more closely model lower drum and bass frequencies or higher vocals there is not native way to do this.

The function `getAverageFrequency()` looks like this :

```
getAverageFrequency() {

		let value = 0;
		const data = this.getFrequencyData();

		for ( letI= 0;I< data.length;I++ ) {

			value += data[I];

		}

		return value / data.length;

	}
```

If we where to log the data array to the console we would see that there is an array of 64 values where each index represents values
corrisponding to the [Fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform). This means the maximum values can be at any one index is 256 `2048/8`

```
constructor( audio, fftSize = 2048 ) {

		this.analyser = audio.context.createAnalyser();
		this.analyser.fftSize = fftSize;

		this.data = new Uint8Array( this.analyser.frequencyBinCount );

		audio.getOutput().connect( this.analyser );

	}
```

WhatIfound is that the default `getAverageFrequency()` function tends to make the visualization less responsive
and interesting overall. WhatIdid is instead of iterating through the whole data array,Iwould only iterate through 4
indexes of the array and pass those values as a new uniform called `uLowPass`. By only adding values in a max range of 4
from the data array, we can tune the visualization to different frequencies of the song. This method has some drawbacks.
Each song is mastered differently and so the optimal range for iteration is different for every song.

### Conclusion and Result

In conclusion I think this was a very interesting excersise andIhave a few ideas to move forward.
I have been interested of Electron andIam curious if there is a way to interate Webgl, Three.js, and election
to bundle together all these files and make a stand alone app that could be ran for show or parties.

The result is a very big , not good for web, video, and instead of including it here ive linked below my instagram
whereIcontinously post interesting shader art and projects, for now ill insclude a screenshot.

| ![Music Visualizer](https://drive.google.com/uc?export=view&id=1ca8_dEplhijZ81CSJAp-hgMsvWsPirfH)                         |
| :------------------------------------------------------------------------------------------------------------------------ |
| _This is the Visualizer. Note the the changing color pallete. I think thios song was Turn Off the Lights by Fred Again.._ |

Link to the Visualizer in Action:

-   [Instagram](https://www.instagram.com/reel/Cv8-CYOArLH/?igshid=MTc4MmM1YmI2Ng%3D%3D)
-   [Tiktok](https://www.tiktok.com/@bonbonassesino/video/7267041885359836458?_r=1&_t=8esDZyCQgik)

[Git repo for the Visualizer](https://github.com/arturovilla/musik-visualizer)
