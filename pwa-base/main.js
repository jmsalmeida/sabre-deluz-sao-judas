let paginaPergunta = document.querySelector('#pagina-pergunta')
let paginaSabre = document.querySelector('#pagina-sabre');
let botaoSith = document.querySelector('.sith');
let botaoJedi = document.querySelector('.jedi');
let lamina = document.querySelector('.lamina');

function escolherSith(){
    paginaPergunta.style.display = 'none';
    paginaSabre.style.display = 'flex';
}

function escolherJedi(){
    paginaPergunta.style.display = 'none';
    paginaSabre.style.display = 'flex';
    lamina.style.background = 'linear-gradient(90deg, #20b820, #5dc75d, #20b820)';
    lamina.style.boxShadow = '0 0 50px #20b820'
}

function alternarSabre(){
    if (lamina.style.opacity == 1) {
        lamina.style.opacity = 0;
    } else {
        lamina.style.opacity = 1;
    }
    
}

paginaSabre.onclick = alternarSabre;
botaoJedi.onclick = escolherJedi;
botaoSith.onclick = escolherSith;

// Registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function() { 
        console.log('Service Worker Registered'); 
    }, function(error){
        console.error(error);
    });
}