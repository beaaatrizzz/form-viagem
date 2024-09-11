document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formulario').addEventListener('submit', async (event) => {
        event.preventDefault();
    

 const name = document.getElementById('name').value;
 const email = document.getElementById ('email').value;
 const resultDiv = document.getElementById('formResult');
  
     resultDiv.innerHTML = 'Enviando dados...'

     try{
        //simula uma chamada de API para enviar dados
        await fakeApiCall ({ name, email });
        resultDiv.innerHTML = 'Dados enviados com sucesso!';
     } catch (error) {
           resultDiv.innerHTML =`Erro: ${error.message}`;
     }
});

//Função para simular uma chamada API
    
 function fakeApiCall (retorno) {
    return new Promise ((resolve, reject) => {
        setTimeout (()  => {
            if (retorno.name && retorno.email) {
                resolve ('Dados enviados');
            }else {
                reject(new Error('Dados inválidos'));
            }
        }, 5000); //simula um atrasode 5 seg
    });
} 
})
