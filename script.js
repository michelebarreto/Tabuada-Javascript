function tabuada(){
    // declaração das variaves
    let num =document.getElementById("txtn")
    let tab=document.getElementById("seltab")

// condicionais
if(num.value.length ==0){
    window.alert('Por Favor, digite um numero !')
    // aqui é se o usuario não digitar nada aparece mensagem de erro
}else{
    let n=Number(num.value) //aqui converte o que o usuario digitou em numero
    let c = 1 // aqui é a variavel de contador
    tab.innerHTML =' '
    while(c <=10){
       // enquanto o contador for menor ou igual a 10
       let item =document.createElement('option') // aqui esta sendo criado o elemento option
       item.text = n+'x'+c+ '='+n*c
       tab.appendChild(item)
       c++
    
    }
    
}
}
