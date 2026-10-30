SAMUEL ADHIEU MAWIEN AROU CAMPAIGN WEBSITE
============================================

FILES
- index.html: Homepage and campaign overview
- manifesto.html: Full, readable manifesto page
- styles.css: Shared responsive styles
- script.js: Mobile navigation, footer year and email-draft contact form
- assets/images/: Put locally approved campaign photographs and logos here

HOW TO PREVIEW
1. Extract the ZIP.
2. Open index.html in a browser, or open the folder in VS Code and use Live Server.
3. Click "Read the full manifesto" to open manifesto.html.

IMAGES
The first version uses remote Unsplash image URLs in styles.css. Internet access is needed to load them.
For a production website, download or replace images with photos you have permission to use. Put files in assets/images/
and update the relevant background-image URL in styles.css. Use authentic, approved images of the candidate and constituency.
Do not imply a photo depicts the candidate if it does not.

BEFORE PUBLISHING
- Replace the "SA" initials/portrait placeholder with the candidate's approved portrait.
- Verify the phone number and international dialing format.
- Confirm the official constituency designation and current election timetable.
- Check applicable election and campaign regulations.
- The contact form opens a pre-filled email draft; it does not save messages on a server.
- The manifesto describes proposed commitments, not funded or completed projects.

TECH
HTML5, CSS3 and vanilla JavaScript. No framework or build step required.


HERO IMAGE SLIDER
-----------------
Place up to five images in assets/images/ with these exact names:
  slider1.png
  slider2.png
  slider3.png
  slider4.png
  slider5.png
The hero slider fades between images automatically every 5 seconds. Visitors can use the arrows or dots to change slides. Use landscape images (ideally 1600 x 900 pixels or larger) for best results. Keep the files as PNG, or update the image extensions in index.html if using JPG/WebP.
