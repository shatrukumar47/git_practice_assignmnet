let num = 19;
let count = 0;
for(let i=2; i<=num; i++){  // correction in this line
      if(num%i==0){         // and in this line
         count++;
      }
}

if(count==1){
    console.log("Yes");
}else{
    console.log("No");
}
