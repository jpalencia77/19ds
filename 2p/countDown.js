function countDownToZero(n){
    if (n<1){
        return
    }
    else  {
        console.log(n)
        countDownToZero(n-1)
    }
}
countDownToZero(5);