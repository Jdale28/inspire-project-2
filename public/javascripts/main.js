myId = ''
let quotes = $('.popup')
let quote = []
$('.emotionText').click(function (e){
  myId = e.target.id
  // Click on a button, push quotes pertaining to that emotion into array
  for(let i = 0; i< quotes.length; i++){
    $(quotes[i]).addClass('disappear')
    if ($('.popup').get(i).className.split(' ')[1] === myId){
      quote.push($('.popup').get(i))
    }
  }
  // Randomize selected quotes pertaining to that emotion
  let num = Math.floor(Math.random() * Math.floor(quote.length))
  $(quote[num]).removeClass('disappear')
})


$('.shuffle').click(function (e){
  // Click on a button, push quotes pertaining to that emotion into array
  for(let i = 0; i< quotes.length; i++){
    $(quotes[i]).addClass('disappear')
    if ($('.popup').get(i).className.split(' ')[1] === myId){
      quote.push($('.popup').get(i))
    }
  }
  // Randomize selected quotes pertaining to that emotion
  let num = Math.floor(Math.random() * Math.floor(quote.length))
  $(quote[num]).removeClass('disappear')
})