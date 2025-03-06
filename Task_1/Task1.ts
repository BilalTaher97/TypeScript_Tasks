
let num :number = 31;
console.log('\n\n\n');
if(num % 2 == 0)
{
    console.log("Even");
}else{
    console.log("Odd");
}

console.log('\n\n\n');

let Price : number[] = [2.45,45.2,12.3,4.2,55.3,1,6,8,10,34.3,77.5];

for(let i:number = 0 ; i < Price.length ; i++)
{

    if(Price[i] >= 10)
    {
        console.log(Price[i]);
    }

}



let Arr:number[] = [3,5,8,5,33,11,53,76,33,12,6];
let Sum:number = 0;

for(let i:number = 0 ; i < Arr.length ; i++)
{
    Sum+= Arr[i];
}
console.log('\n\n\n');
console.log(Sum);
console.log('\n\n\n');
