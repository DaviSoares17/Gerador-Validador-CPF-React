

function geraCpf(){

    let cpf = "";
    let atual = "0";

    for (let i = 0; i < 9;i++ ){
        atual = geraNove();
        cpf = cpf + atual
    }
    
    let num1 = num => {
        let val = 0;
        for (let i = 0; i < 9; i++){
            val = parseInt(num[i] * (10 - i)) + parseInt(val);
        }
        val = val % 11;
        if(val < 2){
            val = 0
        }else{
            val = 11 - val
        }
        return val
    }

    let num2 = gera2(cpf,num1(cpf));

    return(cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + num1(cpf) + num2);

}
//console.log(cpf+num1(cpf));

function geraNove(){
    return(Math.floor(Math.random() * (9 - 0) + 0));
}

function gera2(cpf,num1){
    let val = 0;
    cpf = cpf + num1;
    for (let i = 0; i < 10; i++){
        val = parseInt(cpf[i] * (11 - i)) + parseInt(val);
    }
    val = val % 11;
    if(val < 2){
        val = 0
    }else{
        val = 11 - val
    }
    return val
}

export default geraCpf
