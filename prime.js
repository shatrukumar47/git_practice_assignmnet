let num = 19;
let count = 0;
for(let i=0; i<num; i++){
      if(i%num==0){
         count++;
      }
}

if(count==2){
    console.log("Yes");
}else{
    console.log("No");
}