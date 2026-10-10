


document.querySelector('#birthdayButton').addEventListener('click',giveHoroscope)


function giveHoroscope(){
  let birthday = document.querySelector('#birthdayInput').value
  let horoscope = document.querySelector('#placeHere').innerText = birthday
 let month = birthday.split('-')[1] 
 let day = birthday.split('-')[2]

 console.log(month,day)
 
 if (( month == 1 && day >= 20 )|| (month == 2 && day <= 18)){
  document.querySelector('#result').innerText = 'Aquarius:Watch out for sudden urges to spend money, and check the price tag first'
  let content = document.getElementById('insertPic')
 // content.innerHTML = `img src = Aquarius.jpg`

} else if ((  month == 2 && day >= 19 )||( month == 3 && day <= 20 )){
  document.querySelector('#result').innerText = 'Pisces: Balance your dreams with practical steps to feel secure'

}else if ((  month == 3 && day >= 21 )||( month == 4 && day <= 19)){
  document.querySelector('#result').innerText = 'Aries: Your fiery energy is high today, making it a great time to discover new things and take action.'
}else if ((  month == 4 && day >= 20)||( month == 5 && day <= 20)){
  document.querySelector('#result').innerText = 'Taurus:Take your time to look around and deliberate before making any big choices today'
}else if ((  month == 5 && day >= 21 )||( month == 6 && day <= 20)){
  document.querySelector('#result').innerText = 'Gemini:Focus on sorting out your daily schedule and connecting with friends.'
}else if ((  month == 6 && day >= 21 )||( month == 7 && day <= 22)){
  document.querySelector('#result').innerText = 'Cancer:Use the grounded Mars energy in your sign to tackle personal projects.'
}else if ((  month == 7 && day >= 23 )||( month == 8 && day <= 22)){
  document.querySelector('#result').innerText = ' Leo:Let your natural creativity shine while keeping your budget in check.'
}else if ((  month == 8 && day >= 23 )||( month == 9 && day <= 22)){
  document.querySelector('#result').innerText = 'Virgo:With the Sun and Mercury in your sign, your cleverness and organizational skills are unmatched right now.'
}else if ((  month == 9 && day >= 23 )||( month == 10 && day <= 22)){
  document.querySelector('#result').innerText = 'Libra:Think about old habits you are ready to leave behind'
}else if ((  month == 10 && day >= 23 )||( month == 11 && day <= 21)){
  document.querySelector('#result').innerText = 'Scorpio:Enjoy the peak of a creative or romantic moment without overthinking it.'
}else if ((  month == 11 && day >= 22 )||( month == 12 && day <= 21)){
  document.querySelector('#result').innerText = 'Sagittarius: An ongoing story reaches its end, clearing space for a fresh routine.'
}else if ((  month == 12 && day >= 22 )||( month == 1 && day <= 19)){
  document.querySelector('#result').innerText = 'Capricorn: A new conversation might completely shift your view of what you can achieve.'
}
}
