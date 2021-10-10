# Blackjack

## A Simple Blackjack Game written in JavaScript


You can view the Blackjack live site [HERE.](https://davewatters.github.io/blackjack)
<br />
<br />
<!-- Responsive desgin sample image from http://ami.responsivedesign.is/ -->
#_TODO: Responsive desgin sample image from http://ami.responsivedesign.is/
<h2 align="center"><img src="docs/ci-pp2-blackjack-responsive-mockup.png"></h2>

## - Table of Contents -
* [Purpose](#purpose)
* [User Experience Design (UX)](#user-experience-design)
* [Features](#features)
* [Technologies](#technologies)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## - Purpose -
[ This website was created as the second Portfolio Project (PP2) for the Code Institute's Full Stack Web Development course. ]

The site was built as a simple Blackjack game to be played just for fun. 

## - User Experience Design -

-   ### User stories

    -   ### Design Strategy Goals
        -    Create a simple onine Blackjack card game
        -    Site must be intuitive to read & navigate on both desktop & mobile devices

    -   ### Design Scope to Deliver MVP
    #_TODO

    
        -   #### First Time Visitor Goals
            As a first time user...
            -   I want to easily understand the main purpose of the site and learn more about the organisation
            -   I want to be able to easily navigate throughout the site to find content
            -   I want to find their social media links to follow event news

        -   #### Returning Visitor Goals
            As a returning visitor...
            -   I want to be able to easily register my interest in attending an event
            -   I want to find the best way to get in contact with the organisers with any questions or suggestions I may have
            -   I want to be able to view the site clearly on a mobile device

        -   #### Frequent User Goals
            As a frequent user...
            -   I want to to see if there are any new events happening
            -   I want to to see if there are any updates on a forthcoming event
            -   I want to see any new photos or videos of previous events or related acitivites

-   ### Design
    -   #### Layout
        #_TODO  

    -   #### Colour Scheme
        The default background was chosen to resemble a casino card table's green baize. The colour scheme then had to work and contrast with that. 
        <!--- all of which have 'AAA' WCAG 2.0 contrast scores when used as text on the green background (i.e in the header & footer). The results of the colour contrast testing are included in the [Testing](#testing) section below.
        --->

        - Colour choices
            - Card Table green, #076324

        - How colours were used
            - Body: White
            - Header: Green 
            - Footer: Green
            - Content text: Green on White or White on Green, as applicable
            - Highlights (Active/Selected/Border): Yellow

    -   #### Typography

    -   #### Imagery
    
    -   #### Wireframes
        I did not create wireframes with software like Balsamiq, but I have decided to include pictures of my pencil sketches of my layout design process.  These do not necessarily represent the final look of the site pages, but are presented here to show how I went about fleshing out my initial thoughts and ideas about how to structure the site before a line of code was written.
<h2 align="center"><img src="docs/wf-main-screen-mobile.jpg"></h2>

## - Features -
To fulfil the needs of the site owner and its users, the following features were implemented:

#_TODO

-   **Navigation Bar** contains the site name/logo and links to the Home, Events and SingUp pages. It is identical on, and positioned at, the top of all pages. It is fully responsive on different device sizes. The currently selected page is indicated with a bright yellow underline and the items change colour when the mouse hovers over them to give the user immediate visual feedback.
    -   This allows the user to navigate intuitively between the site's pages
<h2 align="center"><img src="docs/header-wide.png"></h2>
<h2 align="center"><img src="docs/header-mobile.png"></h2>
   

## - Future Features -

<!--  -->
<!-- End Features -->
<!--  -->


## - Technologies Used -

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Git](https://git-scm.com/)
    - Git was used for version control and managed via the VSCode terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the project's code after being pushed from Git, and Github Pages used to deploy the live site
1. [Google Fonts:](https://fonts.google.com/)
    - Google font 'Raleway' was imported in the style.css file and used throughout the site.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used to add icons for aesthetic and UX purposes.
1. [Gimp:](https://www.gimp.org/)
    - Gimp was used to edit and retouch photos for the website.
1. [Birme:](https://www.birme.net/)
    - birme.net was used to resize images.
1. [TinyPNG:](https://tinypng.com/)
    - tinypng.com was used to compress large images

## - Testing -
### UX Goals, User Stories

-- #_TODO: All of the followig to be changed and made relevant 

-   #### As a first time user...
    -  I want to easily understand the main purpose of the site and learn more about the organisation
        -   The main landing page was checked to ensure it explains the purpose of the allows the visitor to explore for more information 
    -  I want to be able to easily navigate throughout the site to find content
        - The navigation links were checked on each page to ensure that they take the user to the intended page or section and there were no broken links 
    -  I want to find their social media links to connect and follow event news
        - Each page was checked to confirm that the footer contained the same links and that they would open the event's page on the correct media platform in a new browser window.

-   #### As a returning visitor...
    -  I want to be able to easily register my interest in attending an event
        -   The signup registration form was tested to ensure that the user could complete and submit it in a few easy steps. It was also tested to ensure the user could not submit with out filling in the three required contact fields. 
    -  I want to find the best way to get in contact with the organisers with any questions or suggestions I may have
        -   The signup/feedback form was tested to ensure that the user could submit a custom message
    -  I want to be able to view the site clearly on a mobile device
        -   Testing was done to ensure that the site was responsive on all device screen sizes and that the information was clear and accesible.

-   #### As a frequent user...
    -  I want to to see if there are any new events happening
        -   I tested to ensure that upcoming event news was shown on the events page
    -  I want to to see if there are any updates on a forthcoming event
        -   I tested to ensure that updates on upcoming events was shown on the events page
    -  I want to see any new photos or videos of previous events or realted acitivites
        -   I tested to ensure photos and videos of previous events was present on the events page. Video playback was tested.

### Code Validation
The [W3C Markup Validator](https://validator.w3.org/#validate_by_uri) and [W3C CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator/#validate_by_uri) services were used to validate every page of the project for syntax errors. **NOTE: All validation was re-run after fixing any errors shown below to ensure that no further errors or warnings existed.**

- #_TODO: JSHint validation

-   style.css: two stray commas were found and deleted
<h2 align="center"><img src="docs/w3c-validator-css-style.png"></h2>

### Responsiveness
- Chrome DevTools and a Chrome extension, [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB), were used to check responsiveness on various device sizes. 
<h2 align="center"><img src="docs/testing-responsive-320.png"></h2>

### Colour Scheme
The colour scheme was tested using this [Contrast Grid Test](https://contrast-grid.eightshapes.com)
and, as explained previously in the Design - [Colour Scheme](#colour-scheme) section, my decision was based on the results shown here:
<h2 align="center"><img src="docs/contrast-grid.png"></h2>

-   The Website was tested on Firefox, Safari, Chrome and Edge browsers.
-   The website was viewed on a variety of mobile devices such as iPhone7, iPhone 8 & iPhoneX.

### Further Testing
Googe Lighthouse in Chrome DevTools was used after deployment to test the quality and performance of the site.  Initial results were 
<h2 align="center"><img src="docs/google-lighthouse-audit.png"></h2>


### Bugs

1.  
<!---  --->
<!--- end of testing section --->
<!---  --->

## - Deployment -

### GitHub Pages
The live deployed site can be viewed on GitHub Pages [HERE](https://davewatters.github.io/blackjack)

The Project repository (repo) is at [https://github.com/davewatters/blackjack](https://github.com/davewatters/blackjack)

Note: The project repo was initially generated from the [Code Institute full template](https://github.com/Code-Institute-Org/gitpod-full-template) 

Deployment of the site to GitHub Pages was done as follows:

After final `git push` to the project repo 
1.  Login to your GitHub account
1.  Open the project repo 
1.  Select the 'Settings' tab
1.  On the left-hand-side menu select the Pages option
1.  Select the main branch as the source, then click the save button
1.  A message will confirm that the site has been published at `https://YOUR-GITHUB-NAME.github.io/REPO-NAME/`
1.  Test that the site has successfully gone live live by clicking on the link

#_TODO: Add a How to Fork

## - Credits -

### Code
### Content

### Acknowledgements

-   My mentor [Daisy McGirr](https://github.com/Daisy-McG) for all her helpful feedback and knowledge.
-   The Code Institute community on Slack and the CI staff and students

