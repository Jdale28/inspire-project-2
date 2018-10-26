
$('.emotionText').click(function (e){
  // console.log(e.target.id)
  let quotes = $('.modal')
  let quote = []
  for(let i = 0; i< quotes.length; i++){
    if ($('.modal').get(i).className.split(' ')[2] === e.target.id){
      quote.push($('.modal').get(i))
    }
  }
  console.log(quote)

})
