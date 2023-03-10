# THRYV
THRYV is a mindfulness app that helps individuals find peace and balance in their daily lives. Our app offers a daily quote for inspiration and a daily mindfulness task feature designed to help users reduce stress and anxiety, improve focus, and cultivate inner peace.

## BACKGROUND AND CONCEPT
The concept behind a mindfulness app with daily tasks is to incorporate mindfulness practices into one's daily routine in a manageable and sustainable way.

By assigning daily tasks, the app aims to make mindfulness a habit and a natural part of one's day. 

The tasks can range from guided meditations, breathing exercises, journaling prompts, or simple mindfulness exercises like paying attention to one's senses or performing a task mindfully.

The purpose is to provide users with an easy and convenient way to stay mindful and present, no matter how busy their schedules may be. By completing daily tasks, users can improve their mental well-being, reduce stress and anxiety, and cultivate inner peace over time.


## HOW TO USE
The quote provide a new quote and background picture once a day (every 24 hours)
You can add one daily task to the bottom of the app to focus on 

<img src="assets/images/screenshot_task.png" width="400">

## BUILD
The app was built using html,css, “vanilla” JS + jQuery and bootstrap 
2 APIs were used to get the quotes(forismatic) and the background images(unsplash)
``` javascript
$.ajax({
    url: queryURL, // unsplash API call 
    method: "GET"
  })// capture response from api call \
  .then(function(response) {
    console.log(response)
   console.log(response[0].urls.small)
   var randomImage = response[0].urls.regular //capture random image from response in regular size 
   localStorage.setItem("localImage",randomImage)// set the picture in local store to the new picture
```
Local storage was used to store the current image and quote if the user visited the page the same day.

## ACCESS
[Deployed Site](https://roberttaylor94.github.io/Thryva/)

[GitHub Repo](https://github.com/RobertTaylor94/Thryva)

## SCREENSHOT 
<img src="assets/images/screenshot_quote.png" width="400">