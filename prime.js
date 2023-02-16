let num = 19;
let count = 0;
for(let i=1; i<=num; i++){  // correction in this line
      if(num%i==0){         // and in this line
         count++;
      }
}

if(count==2){
    console.log("Yes");
}else{
    console.log("No");
}