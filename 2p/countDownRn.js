function countdown(number){
    console.log(number);
    countdown(number - 1);
}
countdown(10);