/**
 *  Confirmar a exlcusao de um contato
 *  
 *  @author Marcos de Souza Castilho
 *  @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("confirma a exclusao deste contato ?")
	if (resposta === true){
		window.location.href = "delete?idcon=" + idcon
	}
}