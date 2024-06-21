function countdown() 
{
  let count = 30;
  const timer = setInterval(() => {
    console.log(count);
    count --;
    if (count < 0) {
      clearInterval(timer);
      console.log("Hey there, times up !")
    }
    
  }, 1000)
}
countdown();

