console.log(process);
for(let x=0; x<1; x++){
    console.log(x);
    if(x==25000){
        process.exit();
    }
}
