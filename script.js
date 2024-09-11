document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', async(event) => {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const date = document.getElementById('date').value;
      const destino = document.getElementById('destino').value;
      const resultDiv = document.getElementById('mensagem');
      resultDiv.innerHTML = 'Enviando o dados...';

        
      try{
        //simula uma chamada de API para enviar dados
        await fakeApiCall ({ nome, date, destino });
        resultDiv.innerHTML = `qualquer coisa ${nome}`;
     } catch (error) {
           resultDiv.innerHTML =`Erro: ${error.message}`;
     }
});

   
function fakeApiCall (retorno) {
    return new Promise ((resolve, reject) => {
        setTimeout (()  => {
            if (retorno.nome && retorno.date && retorno.destino) {
                resolve ('Dados enviados');
            } else {
                reject(new Error('Dados inválidos'));
            }
        }, 5000);

       
          });
}
})
