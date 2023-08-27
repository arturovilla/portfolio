---
title: "Redesigning a site for a dating Company"
date: "06-30-2023"
excerpt: "Optimizing for the web is time consuming"
cover_image: "https://drive.google.com/uc?export=view&id=154Ys--up2rD_Bq7UQbfUTLrxKOHXPk3r"
tags:
    - Tailwind
    - Next.js
    - graphic design
    - pixelmator
---

### Background

Earlier this summer I was contracted by a new dating start-up to redesign their page to make it more mobile friendly and to redesign some assets that they have been using. I was really excited about the project as it had a bit of everything i wanted to do, some graphic design , some web-development, and meeting new people along the way. What I didn't expect was the decision making process, with regards to mobile components, being so consuming. As soon as I finished one section, another section was already misaligned.

While some of the refactoring was tedious, using specific technologies like [Tailwind](https://tailwindcss.com) made the entire process much easier. As I learned from building my portfolio, using tailwind gives me as a developer the same flexibility as pure CSS but now with some excellent tooling and some guardrails to make sure the whole design is cohesive. Unlike other component based libraries for react like [MUI](https://mui.com/material-ui/getting-started/overview/), tailwind gives more flexibility.

At first, it might seem complex. Many component based libraries like MUI and bootstrap come out of the box with components that are responsive out of the box, the issue is that a lot of these web-apps end up looking very similar:

| ![mui site 2](https://drive.google.com/uc?export=view&id=1MWsP9lggOySs_jxHO0YAA2f9fDp_Rm0F) |
| :------------------------------------------------------------------------------------------ |
|                                                                                             |

| ![mui site 1](https://drive.google.com/uc?export=view&id=1gGAk5osaBLRTmDn3jX1OU9auF3lWAQCT) |
| :------------------------------------------------------------------------------------------ |
| _Different projects from the MUI website_                                                   |

Back to the Blyss Website, I had a starting point. Blyss as a company had already established a design style. Their main issue came to screen size compatibility. They have previously designed their site using services like [Wix](https://www.wix.com) and [SquareSpace](https://www.squarespace.com).

A Lot of these products have a WYSIWYG type of editor. Dragging and dropping components , added component specific styles, and adding and editing assets right on the editor. This issue comes when there is a specific use case for certain features that leads to incompatibility with your chosen design style.

| ![old Blyss website](https://drive.google.com/uc?export=view&id=1DKsBSjpYvBCOhFrVA5VUixg6XGtHSlch) |
| :------------------------------------------------------------------------------------------------- |
| _Screenshot of the old Blyss website as viewed from and iPhone_                                    |

With some tailwind css and some components build with best practices I was able to easily change and improve the site one devices with changing screen dimensions:

| ![new Blyss website](https://drive.google.com/uc?export=view&id=1GlByyX-XWoPxnGcltVgNCMyLfrwAO66b) |
| :------------------------------------------------------------------------------------------------- |
| _Screenshot of the new Blyss website as viewed from and iPhone_                                    |

### Editing, Creating, and Managing assets

For landing pages like this one, where there is a need to show specific mockups and minimum viable products on the page itself when the application is not fully built yet, there is a great need to display and manage lots of assets.

One approach is to have all the assets sitting in a local folder in the project, and render them out as needed. This is exactly what I did for development because of its simplicity. For production however I have to think of how this page will be viewed and used.

I want this page to give the best impression possible for Blyss, and thus in the future I plan on hosting these images on a S3 bucket or cached somewhere to make first loads the fastest they can be.

What I found really interesting about this project is the way I was able to use some graphic design skills I have picked up over the years. I cleaned up some existing assets by removing the background on those images and converting them to png as well as creating some assets to use as the favicon used in several places.

| ![new Blyss website](https://drive.google.com/uc?export=view&id=1OLs750-J-IT5LKgdmP25tdsoFRGwiYRY) |
| :------------------------------------------------------------------------------------------------- |
| _favicon tab at the top of the browser_                                                            |
