class Card{
    card = []
    cardNumber
    constructor(){
​
    }
printCard(n){
    if(n<=13){
        this.card[0] = 0;
        this.card[1] = n;    
    }
    if(n>13 && n<=26){
        this.card[0] = 1;
        this.card[1] = n-13;    
    }    
    if(n>26 && n<=39){
        this.card[0] = 2;
        this.card[1] = n-26;    
    }
    if(n>39 && n<=52){
        this.card[0] = 3;
        this.card[1] = n-39;    
    }
    return this.card
}
printNumber(k,n){
    this.cardNumber = 0;
    if(k==0)
    this.cardNumber = n
    else if(k == 1)
    this.cardNumber = n+13
    else if(k==2)
    this.cardNumber = n+26
    else if(k==3)
    this.cardNumber = n +39
    return this.cardNumber;
    
}
onePair(){}
   
twoPairs(){
​
}
threeOfaKind =() => ((54912) / (fact(52) /fact(47) * fact(5))) * 100 + '%'
fourOfaKind(){
​
}
​
}
​
const card = new Card();
card.threeOfaKind();