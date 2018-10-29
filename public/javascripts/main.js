myId = ''
let quotes = $('.popup')
let quote = []
// Click on an emotion, populates database options for that emotion and randomizes
$('.emotionText').click(function (e) {
  quote = []
  myId = e.target.id
  // Click on a button, push quotes pertaining to that emotion into array
  for (let i = 0; i < quotes.length; i++) {
    $(quotes[i]).addClass('disappear')
    if ($('.popup').get(i).className.split(' ')[1] === myId) {
      quote.push($('.popup').get(i))
    }
  }
  // Randomize selected quotes pertaining to that emotion
  let num = Math.floor(Math.random() * Math.floor(quote.length))
  $(quote[num]).removeClass('disappear')
})

// On click, on esc, or on click off of modal


$('.shuffle').click(function (e) {
  // Click on a button, push quotes pertaining to that emotion into array
  quote = []
  for (let i = 0; i < quotes.length; i++) {
    $(quotes[i]).addClass('disappear')
    if ($('.popup').get(i).className.split(' ')[1] === myId) {
      quote.push($('.popup').get(i))
    }
  }
  // Randomize selected quotes pertaining to that emotion
  let num = Math.floor(Math.random() * Math.floor(quote.length))
  $(quote[num]).removeClass('disappear')
})

// On Esc or Cancel, add class to all quotes "disappear"
// function keyPress(e) {
//   if (e.key === "Escape") {
//     for (let i = 0; i < quotes.length; i++) {
//       $(quotes[i]).addClass('disappear')
//     }
//   }
// }
// $(document).keyup(function(e) {
//   if (e.key === "Escape") { // escape key maps to keycode `27`
//      // <DO YOUR WORK HERE>
//  }
// });