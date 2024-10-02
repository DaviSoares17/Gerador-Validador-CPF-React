
function valida(cpf){

    cpf = cpf.replace(/[.-]/g, "");
    let cpfSemNum = cpf.slice(0,9);

    if (cpf.length > 11){
        console.log("CPF ultrapassa limite de caracteres");
    }else{
        
        let num1 = valida1(cpfSemNum)
        let num2 = valida2(cpfSemNum,num1)

        if(cpf[9] != num1 || cpf[10] != num2){
            return false
        }else{
            return true;
        }
    }

}

function valida1(cpf){
    let val = 0;
    for (let i = 0; i < 9; i++){
        val = parseInt(cpf[i] * (10 - i)) + parseInt(val);
    }
    val = val % 11;
    if(val < 2){
        val = 0
    }else{
        val = 11 - val
    }
    return val
}

function valida2(cpf,num1){
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

export default valida;