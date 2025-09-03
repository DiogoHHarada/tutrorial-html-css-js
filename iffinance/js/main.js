function openModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function closeModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "none"
}

function addTicker(event){
    event.preventDefault()
    const ticker = event.target.ticker.value
    const bolsa = event.target.bolsa.value
    const valor = event.target.valor.value
    const ativos = event.target.ativos.value

    const total = valor * ativos

    const card = `
        main class="card">
                <div class="top">
                     <h2><span style="color:#ec7b11;">IF</span>Finance</h2>
                </div>
                <div class="top-conteudo">
                    <div class="valor">
                        <h2>US$ ${valor}</h2>
                        <img src="img/seta vermelha.png" height="40px">  
                    </div>
                    <h2>${ticker}</h2>
                </div>
                <div class="bottom-conteudo"> 
                    <h2>N° Ativos:${ativos}</h2>
                    <h2>US$ ${total} </h2>
                </div>     
            </main>
    `

    const cardlist = document.getElementById("cardlist")
    cardlist.innerHTML += card
    closeModal()
}