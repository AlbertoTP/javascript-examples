
for_principal:
for (var x=1; x<10; x++){
    console.log("x",x);
    for_secundario:
    for (var y=1; y<10; y++){
        console.log("y",y);
//        continue for_principal;
        for (var z=1; z<5; z++){
            console.log("z",z);
            break for_principal;
        }
    }
}