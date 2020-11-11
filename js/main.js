//Armazenar URL JSON
var requestUrl = 'https://lehross.github.io/clone-netflix/json/content.json';

//Criar nova instância de objeto de solicitação
var request = new XMLHttpRequest();

//Abrir nova solicitação
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    var content = request.response;
    preencherConteudo(content);
};

function preencherConteudo(jsonObj) {

};