# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   Fill in the form and see the card details update in real-time
-   Receive error messages when the form is submitted if:
    -   Any input field is empty
    -   The card number, expiry date, or CVC fields are in the wrong format
-   View the optimal layout depending on their device's screen size
-   See hover, active, and focus states for interactive elements on the page

### Screenshot

![](/src/assets/images/Interactive%20Card%20Details%20-%20small.jpg)

### Links

-   Solution URL: [GitHub Repository](https://github.com/svki-dev/interactive-card-details)
-   Live Site URL: [Netlify Deployment](https://sven-kilcher-interactive-card-details.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/) (Migration von CRA)

### What I learned

In this project I further deepened my experience with React.js and got involved with state management. For this I used "Zustand".

### Useful resources

-   [PostCSS](https://postcss.org/) - I really like to work with PostCSS. It is very flexible and can be adapted to your own wishes and requirements of the project very well.
-   [React Hooks](https://react-hook-form.com/) - On this page the different hooks are explained in a very understandable way and can be used in practice right away.
-   [Zustand](https://github.com/pmndrs/zustand) - Here is explained in a very simple and easy way how to work with the state management "Zustand".

## Author

-   Website - [Sven Kilcher | Dev](https://sven-kilcher.dev/)
-   Frontend Mentor - [@WP-HH](https://www.frontendmentor.io/profile/WP-HH)
-   Github - [@svki-dev](https://github.com/svki-dev)
-   LinkedIn - [@Sven Kilcher](https://www.linkedin.com/in/sven-kilcher-b5a2331b5/)

## Lokale Entwicklung (Vite)

```bash
npm install
npm run dev
```

Build erzeugen:

```bash
npm run build
npm run preview
```

## Formular-Validierung

-   Maskierung der Kartennummer in 4er-Gruppen und Luhn-Check (`src/utils/card-utils.js`).
-   Ablaufdatum-Prüfung (MM/YY) gegen aktuelles Datum, CVC-Länge 3.
-   Kontrollierte Inputs und React-State für Umschalten zur `Thanks`-Ansicht.
