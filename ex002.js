var idade = 21
if (idade < 16 ){
    console.log("Não vota")
}
else{
    if (idade < 18){
        console.log("Voto opcional")
    }
    if (idade >=67)
        console.log('Voto opcional')
    else{
        console.log('Vota obrigatorio!')
    }
}