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

$('.newQuoteCreateButton').hover(function(){
  $(this).css("background-color", "blue")
  $(this).css("color", "white")
  }, function(){
  $(this).css("background-color", "white")
  $(this).css("color", "black")
})

$('.card-path').hover(function(){
  $(this).css("background-color", "blue")
  $(this).css("color", "white")
  }, function(){
  $(this).css("background-color", "white")
  $(this).css("color", "black")
})