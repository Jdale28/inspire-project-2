
$('.emotionText').click(function (e){
  // console.log(e.target.id)
  let quotes = $('.popup')
  let quote = []
  // Click on a button, push quotes pertaining to that emotion into array
  for(let i = 0; i< quotes.length; i++){
    $(quotes[i]).addClass('disappear')
    if ($('.popup').get(i).className.split(' ')[1] === e.target.id){
      quote.push($('.popup').get(i))
    }
  }
  // Randomize selected quotes pertaining to that emotion
  let num = Math.floor(Math.random() * Math.floor(quote.length))
  $(quote[num]).removeClass('disappear')
})
