
function gcd(x, y)
{ 
var res=0;
while (x % y != 0)
{res= x % y; 
x = y; 
y = res; 
} 
return y; 
}

gcd(5,10 )