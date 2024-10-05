function criartexto(){
    modal.style.display= "block"
    
}

function adicionarM(){
    let texto = document.getElementById('texto')
    let Lista = document.getElementById('listM')

    let Linha = document.createElement('Li')
    Linha.textContent = texto.value
    Linha.addEventListener('click', 
        function riscar(){
             this.style= 'text-decoration: line-through;';
                        }
                    );
    Lista.appendChild(Linha)
    texto.value = ''
}

function adicionarT(){
    let texto = document.getElementById('texto')
    let Lista = document.getElementById('listT')

    let Linha = document.createElement('Li')
    Linha.textContent = texto.value
    Linha.addEventListener('click', 
        function riscar(){
             this.style= 'text-decoration: line-through;';
                        }
                    );
    Lista.appendChild(Linha)
    texto.value = ''
}

function adicionarN(){
    let texto = document.getElementById('texto')
    let Lista = document.getElementById('listN')

    let Linha = document.createElement('Li')
    Linha.textContent = texto.value
    Linha.addEventListener('click', 
        function riscar(){
             this.style= 'text-decoration: line-through;';
                        }
                    );
    Lista.appendChild(Linha)
    texto.value = ''
}
