---
title: "TouchDesigner Tutorial: POPs Audio Reactive"
date: "10-28-2025"
excerpt: "POP Supremacy"
cover_image: "https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_1239AM_Tuesday_28_October_2025_wSDYFPPB.png"
tags:
  - TouchDesigner
  - Math
  - Shaders
  - Graphics
---

### Motivation and Starting point

Since this will be my first formal TouchDesigner tutorial, I want to set the stage for what to expect.
In terms of frequency, readers shouldn’t expect these tutorials to come out often or follow any kind of regular schedule they’ll be created as I have the time and interest.
This tutorial assumes beginner-level experience with TouchDesigner.

A fellow developer at ART-CLUB mentioned that the club could use more dark visuals rather than the bright and loud ones we usually see.
I agreed — so this tutorial is the result of my attempt to create darker, moodier visuals.

For this tutorial, I’ll be using **TouchDesigner (TD) Experimental version 2025.31310.**
We’ll be creating the following visual, which leverages TD’s newest operator family: POPs.

| ![Final](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/TDMovieOut.0.gif) |
| :---------------------------------------------------------------------------------- |
| _Final Result_                                                                      |

### Geometry

First things first whenever you open TouchDesigner (TD), a starter project template will automatically load.
Delete this, as none of the default nodes will be used for this tutorial.

Your workspace should now look like this:

| ![Clean Workspace](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_1252AM_Tuesday_28_October_2025_hncTsC92.png) |
| :--------------------------------------------------------------------------------------------------------------------------- |
| _Blank TD Project_                                                                                                           |

Since this tutorial is focused on showcasing POPs, let’s begin with the geometry.
Start by creating two Box POPs, their names will be automatically generated as `box1` and `box2`.

| ![Box POPs](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_1259AM_Tuesday_28_October_2025_twHnFWc1.png) |
| :-------------------------------------------------------------------------------------------------------------------- |
| _Box POPs_                                                                                                            |

There are a lot of parameters here, and toward the end of the tutorial, I’ll highlight a few that are fun or useful to experiment with.
For now, don’t change anything about the default setup.
Now:

- Tap the TAB key, a menu will appear. Keep pressing TAB until you land on the POPs page.
- Type transform. As you type, most options will fade out until only a few remain.
- Select the operator called Transform, then connect the output of box1 to the input of transform1.
- Repeat the same steps for box2.

| ![Creating Transform Network](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0108AM_Tuesday_28_October_2025_Db0LBai7.gif) |
| :-------------------------------------------------------------------------------------------------------------------------------------- |
| _Creating Transform Network_                                                                                                            |

Create Null nodes for each branch of the network we’re building.
Both `box1` and `box2` should each have a Transform node and a Null node linked to them, forming two parallel strands in your network.

| ![Adding Nulls](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0114AM_Tuesday_28_October_2025_oXpMZYPO.png) |
| :------------------------------------------------------------------------------------------------------------------------ |
| _Adding Nulls_                                                                                                            |

Copy and Paste these 3 nodes and change the parameters to match those shown further below this will be out third box in the geometry POP chain.

| ![Adding Box 3](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0407PM_Wednesday_29_October_2025_QyQgaD7P.gif) |
| :-------------------------------------------------------------------------------------------------------------------------- |
| _Adding Box 3_                                                                                                              |

| ![Params For Box 3](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0410PM_Wednesday_29_October_2025_LyUWxG1O.png) | ![Params For Transform 3](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0412PM_Wednesday_29_October_2025_5T5gI29R.png) |
| :------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| _Params For Box 3_                                                                                                              | _Params For Transform 3_                                                                                                              |

Finally, to complete this geometry network, we’re going to merge the two boxes into a single geometry and then add a Transform node to the merged output.

Adding the Transform at the end of the network gives us extra versatility, it lets us manipulate both the combined geometry and the individual boxes independently.
(This will come into play later.)

It may look like there’s only one box now, that’s totally fine. We’ll adjust this later in the tutorial.

| ![Finishing Geometry](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0414PM_Wednesday_29_October_2025_Rec2Pkqv.png) |
| :-------------------------------------------------------------------------------------------------------------------------------- |
| _Finishing Geometry_                                                                                                              |

### Transformation and Reactivity

For this next section, we’ll be adding the values needed to bring in movement and audio reactivity.
Things might get a little confusing here and if they do, I apologize! Feel free to message me on Instagram if you have any questions.

This part of the tutorial relies on a custom component I created for analyzing audio. You can download it [here](https://drive.google.com/drive/folders/178snA6qQZ8VVRaBZ3J8pT_rcACuNvJ7h?usp=share_link).
The link will take you to a Google Drive folder where you can find my custom audio analysis tool called `smallAudioAna.tox`.

Once downloaded, drag this file into your workspace in TouchDesigner.

| ![Audio Analysis Tool](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0133AM_Tuesday_28_October_2025_FlBwkfPG.gif) |
| :------------------------------------------------------------------------------------------------------------------------------- |
| _Audio Analysis Tool_                                                                                                            |

Notice that smallAudioAna.tox has four outputs and one input.
This means the component takes in an audio signal and outputs four different frequency bands or analysis channels.

Create four Nulls and connect each of the outputs from smallAudioAna.tox to its corresponding Null.
Make sure these Nulls come from the CHOP category when you press TAB.

In addition, smallAudioAna.tox needs an audio input. You can use your computer or laptop’s built-in microphone for this.
If you don’t hear anything, it’s likely because there’s no audio output device set up, just add an Audio Device Out CHOP to fix that.

| ![Node Network After Audio](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0856AM_Tuesday_28_October_2025_IYfdCNVQ.png) |
| :------------------------------------------------------------------------------------------------------------------------------------ |
| _Node Network After Audio_                                                                                                            |

From top to bottom, each of the Null CHOPs connected to the audio component represents the following:

- beathit – Triggers every time the audio frequency goes above a certain threshold. Outputs binary values (0 or 1).
- rawFreq – A floating-point value showing the raw incoming audio signal (usually small values).
- normFreq – The same as rawFreq, but normalized to a range between [0–1].
- normFreqLagged – The same as normFreq, but with a small lag added for smoother transitions.

Next, create a noise CHOP, make sure the channel and common settings are configured as shown below.

| ![Channels](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0907AM_Tuesday_28_October_2025_JS4ERE58.png) |
| :-------------------------------------------------------------------------------------------------------------------- |
| _Channels_                                                                                                            |

| ![Common](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0907AM_Tuesday_28_October_2025_fiGWH5Nj.png) |
| :------------------------------------------------------------------------------------------------------------------ |
| _Common_                                                                                                            |

Create the following chain of nodes, this chain will let us generate continuous movement that stays in step with the incoming audio:

| ![Audio Chain](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0916AM_Tuesday_28_October_2025_JYCewKHZ.png) |
| :----------------------------------------------------------------------------------------------------------------------- |
| _Audio Chain_                                                                                                            |

Here are the settings to apply to each node, **from left to right**:

- `hold1`
  - Set **Sample** to _While Off_
- `math1`
  - _(no changes)_
- `lag1`
  - _(no changes)_
- `speed1`
  - _(no changes)_

Now we’ll continue to parameterize:

- Create a `trigger` CHOP and enter the following in its **Trigger** parameter:
  `op('beathit')['chan1']`
- Copy the settings shown in the photos below.

| ![Trigger](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0928AM_Tuesday_28_October_2025_ja6jf7fP.png) |
| :------------------------------------------------------------------------------------------------------------------- |
| _Trigger_                                                                                                            |

| ![Attack](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0928AM_Tuesday_28_October_2025_1vUtPd9r.png) |
| :------------------------------------------------------------------------------------------------------------------ |
| _Attack_                                                                                                            |

| ![Sustain](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0928AM_Tuesday_28_October_2025_2arKwx5c.png) |
| :------------------------------------------------------------------------------------------------------------------- |
| _Sustain_                                                                                                            |

### Constants

- Create a **Constant CHOP** with two channels `[resx, resy]`, and set their values to `[1080, 1080]` respectively.
  Name this node `constant1`.

- Create another **Constant CHOP** and set its single value to `1.458`.
  It should automatically be named `constant2`.

- Create a third **Constant CHOP** with three channels `[sx, sy, sz]`, and set their values to `[2.929, 6.41, 5.8]`.
  Name this node `scales1`.

| ![Constants](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0531PM_Tuesday_28_October_2025_cm0M0Bjh.png) |
| :--------------------------------------------------------------------------------------------------------------------- |
| _Constants_                                                                                                            |

### Low frequency Oscillator

Lastly, we’ll add a **Low-Frequency Oscillator (LFO CHOP)** and scale its output using a **Math CHOP**.

Create an **LFO CHOP** with the following parameters:

| Type     | Play | Frequency | Offset | Amplitude | Bias | Phase |
| -------- | ---- | --------- | ------ | --------- | ---- | ----- |
| Triangle | On   | 3.044     | 0      | 1         | 0    | 0     |

Connect this LFO to a Math CHOP with the following parameters:

| From Range | To Range |
| ---------- | -------- |
| [-1,1]     | [1,2.5]  |

| ![LFO](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0543PM_Tuesday_28_October_2025_Hg4vAghH.png) |
| :--------------------------------------------------------------------------------------------------------------- |
| _LFO_                                                                                                            |

### Render Network and Materials

Go back to the last **Transform POP** in your network.
Click and drag its output, then press **TAB** to open the operator menu.
Navigate to the **COMP** section and select the `Geometry` node.

Your network should now look like this:

| ![Goemetry Node](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0551PM_Tuesday_28_October_2025_uR4qVW2i.png) |
| :------------------------------------------------------------------------------------------------------------------------- |
| _Goemetry Node_                                                                                                            |

In any render network, we’ll need **cameras**, this project requires **three**, each set at different distances.

To create them, press **TAB** to bring up the operator palette, navigate to the **COMP** section, and select `Camera`.
Repeat this process three times.

You should end up with something like this:

| ![Cameras](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0555PM_Tuesday_28_October_2025_2BXk9g3I.png) |
| :------------------------------------------------------------------------------------------------------------------- |
| _Cameras_                                                                                                            |

Each camera will have different parameters:

| ![CAM1](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0557PM_Tuesday_28_October_2025_JG86fMiV.png) | ![CAM1](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0558PM_Tuesday_28_October_2025_uzUIsI7i.png) |
| :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| _CAM1 XForm_                                                                                                      | _CAM1 View_                                                                                                       |

| ![CAM2](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0602PM_Tuesday_28_October_2025_F69SlL0Z.png) | ![CAM1](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0603PM_Tuesday_28_October_2025_pS9op6EY.png) |
| :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| _CAM2 XForm_                                                                                                      | _CAM2 View_                                                                                                       |

| ![CAM3](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0604PM_Tuesday_28_October_2025_iosazl7a.png) | ![CAM3](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0605PM_Tuesday_28_October_2025_dxTJpUJo.png) |
| :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| _CAM3 XForm_                                                                                                      | _CAM3 View_                                                                                                       |

Next, open the operator palette again by pressing **TAB**, navigate to the **COMP** section, and create **three Light** operators.

Your setup should now look like this:

| ![Lights](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0608PM_Tuesday_28_October_2025_7bxFkZ7E.png) |
| :------------------------------------------------------------------------------------------------------------------ |
| _Lights_                                                                                                            |

Light parameters are below:

| ![LIGHT1](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0612PM_Tuesday_28_October_2025_y5lLpgkZ.png) | ![LIGHT1](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0612PM_Tuesday_28_October_2025_Y4IxLc7w.png) |
| :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| _LIGHT1 XForm_                                                                                                      | _LIGHT1 View_                                                                                                       |

| ![LIGHT2](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0613PM_Tuesday_28_October_2025_EwfCLOPG.png) | ![LIGHT2](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0615PM_Tuesday_28_October_2025_TcAVvwjQ.png) |
| :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| _LIGHT2 XForm_                                                                                                      | _LIGHT2 View_                                                                                                       |

| ![LIGHT3](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0616PM_Tuesday_28_October_2025_vb7XGjMy.png) | ![LIGHT3](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0617PM_Tuesday_28_October_2025_u6vz07bz.png) |
| :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| _LIGHT3 XForm_                                                                                                      | _LIGHT3 View_                                                                                                       |

Now that all the cameras and lights are set up, we need a way to **see the output**, this is where the **Render TOP** comes in.

1. Create a **Render TOP**.
   Once you place it in the network, you’ll notice that several (but not all) of the components you just made automatically connect to it.

2. Select the **Render TOP**, then navigate to its **parameters**.

3. While keeping the Render TOP selected, move the network viewer until you can see the `constant1` CHOP.
   Don’t click the node directly — instead, click the **white star** in its top-left corner to make it the **active viewer**.

4. Go to the **Common** section in the Render TOP’s parameters.
   With the `constant1` CHOP active, **drag and drop** the `[resx, resy]` channels into the **Resolution** fields and choose **“CHOP Reference”** when prompted.

| ![Resolution](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0627PM_Tuesday_28_October_2025_LhK1MwIP.gif) |
| :---------------------------------------------------------------------------------------------------------------------- |
| _Resolution_                                                                                                            |

Now, navigate back to the `render1` TOP and **copy + paste** it **two times** to create three total Render TOPs.

For each new Render TOP, change the **Camera(s)** parameter to use its corresponding camera:

- `render1` → `cam1`
- `render2` → `cam2`
- `render3` → `cam3`

| ![Camera Setup](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0708AM_Wednesday_29_October_2025_VLCYEO31.gif) |
| :-------------------------------------------------------------------------------------------------------------------------- |
| _Camera Setup_                                                                                                              |

To finish this section, we’ll add a **material** to our `Geometry` node.
This gives us greater control over how the boxes are rendered.

1. Open the operator palette and navigate to the **MAT** section.
2. Select the `Wireframe` material operator and place it near the `geo1` node.

This material node should have the following parameters:
| ![Material](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0721AM_Wednesday_29_October_2025_f47v1RoM.png) |
| :-------------------------------------------------------------------------------------------------------------------------- |
| _Material_ |

After configuring the material, **drag and drop** the material node directly onto the `geo1` Geometry node.
When prompted, select **“Param: Material”** to assign the wireframe material to the geometry.

| ![Material](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0730AM_Wednesday_29_October_2025_FW8aJo0V.gif) |
| :---------------------------------------------------------------------------------------------------------------------- |
| _Material_                                                                                                              |

### Parameter Hookups

Just like we connected our resolution constants to the **Render TOP**, there are several other **Constant CHOPs** that need to be connected to different nodes in the network.
These connections will help drive various parameters and maintain consistent control throughout the setup.

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0745AM_Wednesday_29_October_2025_wapUsePS.gif)                         |
| :-------------------------------------------------------------------------------------------------------------------------------------- |
| _`Constant2` need to be mapped to the translate parameter for both boxes as shown below, but one of those needs to be multiplied by -1_ |

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0755AM_Wednesday_29_October_2025_FR8rPJ4p.png)                 |
| :------------------------------------------------------------------------------------------------------------------------------ |
| _Next we will use the scales1 CHOP and connect those to the scale values in both of the transforms POP nodes we just modified._ |

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0802AM_Wednesday_29_October_2025_P1y42H0l.png)                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _On the last transform before going into the geometry node, we need to map the values from our speed and math CHOPs to the rotation and scale parameters respectivly_ |

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0908AM_Wednesday_29_October_2025_Ihai8U3M.png) |
| :-------------------------------------------------------------------------------------------------------------- |
| _The math CHOP also needs to be hooked up the trigger and `normFreqLagged * 200` in its Multi-Add section_      |

### Post Processing

Now that we’ve created our rendering network and connected all the parameters, it’s time to start adding **effects** and **post-processing** to achieve the look and feel we’re going for.

1. Add a **Merge TOP** and connect all three `render` nodes to it.
2. After the Merge, add a **Null TOP**.
3. Click the **blue display dot** in the bottom-right corner of the Null, this will display the output as the **background** in your network viewer.

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0810AM_Wednesday_29_October_2025_xLp5mTxr.gif) |
| :-------------------------------------------------------------------------------------------------------------- |
| _As a tip, you can multi-select and multiconnect nodes to each other depending on the node_                     |

You should now see the shape **moving on its own**, while also **reacting to changes in the audio frequencies**.

Next, move the **terminating Null TOP** (the one at the end of the render chain) to make some space, enough to fit about **10 new nodes** between the **Switch** and **Null** nodes.
This is where we’ll continue adding our **post-processing effects**.

Now, add a **Lens Distortion TOP** between the **Switch** and **Null** TOPs.
Once placed, connect it properly in the chain and adjust its parameters as shown in the reference images below.
| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0913AM_Wednesday_29_October_2025_60QYTlKW.png) |
| :-------------------------------------------------------------------------------------------------------------- |
| _Lens Distortion_ |

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0921AM_Wednesday_29_October_2025_xzhFlYOs.png) |
| :-------------------------------------------------------------------------------------------------------------- |
| _Next add a mirror TOP with the following parameters_                                                           |

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0924AM_Wednesday_29_October_2025_JpoUPIY6.png) |
| :-------------------------------------------------------------------------------------------------------------- |
| _Next add a level TOP with the following parameters_                                                            |

For the next step, we’ll be adding **two TOPs**, a **Ramp TOP** and a **Luma Blur TOP**.

These two will work together to add blending and depth effects to our render.
Refer to screenshots below to see **how they’re connected** and what **parameter values** should be used for each.

| ![ramp](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0929AM_Wednesday_29_October_2025_VH8NJnCj.png) | ![lumaablur](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0929AM_Wednesday_29_October_2025_hvuVFPeu.png) |
| :------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| _Ramp parameters_                                                                                                   | _Luma Blur parameters_                                                                                                   |

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0932AM_Wednesday_29_October_2025_eKTL8rBE.png) |
| :-------------------------------------------------------------------------------------------------------------- |
| _Next add a bloom TOP with the above parameters_                                                                |

In this step, we’ll be adding **two TOPs**, a **Ramp TOP** and a **Composite (Comp) TOP**.

These nodes will help give a CRT like affect that I like.
See below for **how they’re connected** and the **parameter settings** used for each.

| ![ramp](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0937AM_Wednesday_29_October_2025_wvNaRvm4.png) | ![comp](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0937AM_Wednesday_29_October_2025_kmQNYWFs.png) |
| :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| _Ramp parameters_                                                                                                   | _Comp parameters_                                                                                                   |

This next step involves adding **two TOPs**, where we’ll introduce **color** into our composition.
Create a **Ramp TOP** and a **Lookup TOP**.

These will be used to map color values onto the visual, allowing us to control gradients and tone.
See below to see **how they’re connected** and what **parameters** each should use.

| ![ramp](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0358PM_Wednesday_29_October_2025_0uTJdk81.png) | ![lookup](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0358PM_Wednesday_29_October_2025_0R2jaL05.png) |
| :------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| _Ramp parameters_                                                                                                   | _Lookup parameters_                                                                                                   |

### Viewing, Exporting, and Recommendations for Expansion

After that last **Lookup TOP**, the visualization should be complete.
You should see that the **LFO CHOP** is constantly changing which color we sample from the final **Ramp TOP**, and that the entire project is **audio-reactive**.

From here, feel free to tweak any or all values to achieve different results. A few common ones I like to adjust:

- **Camera FOV**
- Switching which **Camera** is used via the **Switch TOP** that all the Render TOPs feed into
- **Box sizes**
- Adding different **shapes**

To export this visual as a video, add a **`Movie File Out` TOP** and set the format/codec/framerate to suit your needs.
A `.tox` file containing the finished project is linked [here](https://drive.google.com/file/d/1hpaX_n5cXoWnTOeYlbYhpazJ1gW96XUo/view?usp=share_link) in case you run into any issues.

| ![](https://publicblogimageslobito.s3.amazonaws.com/td_tut_1/img_0423PM_Wednesday_29_October_2025_aeVGEM9N.gif) |
| :-------------------------------------------------------------------------------------------------------------- |
| _Movie File Out_                                                                                                |

### Links to View My Own Version

You can check out my version of the finished visual here:

- [Instagram](https://www.instagram.com/reel/DQBEoghDRWW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
- [Reddit](https://www.reddit.com/r/TouchDesigner/comments/1obb2lp/cool_line_work/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
