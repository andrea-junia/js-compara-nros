function fCompara(n1,n2){
	let cMsg = "Os numeros " + n1 + " e " + n2
	let cRet = " sao iguais. "

	if (n1!==n2) {
		cRet = " nao" + cRet;		
	} 

	cMsg += cRet;

	n1 += n2;
	cMsg += "Sua soma é " + n1 + ", que é " + fMaior(n1,10) + "10 e " + fMaior(n1,20) + "20.";
	
	return(cMsg) ;
}

function fMaior(n1, nTeste){
	if (n1 > nTeste) {
		return("maior do que ");	
	}

	if (n1 < nTeste) {
		return("menor do que ");	
	}
	
	return("igual a ");
}

console.log(fCompara(1,9));

