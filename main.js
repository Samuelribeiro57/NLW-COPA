
function createGame(player1, hour, player2){
    return `
<li>
    
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
    
</li>

`
}

let delay = -0.3;

function createCard(date, day, games){
    delay = delay + 0.3;
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#app').innerHTML = `
<header>
            <img src="./assets/logo.svg" alt="Logo">
</header>
<main id="cards">
    ${createCard('11/11', 'segunda', createGame('brazil', '16:00', 'serbia') + createGame('brazil', '16:00', 'serbia'))}
    ${createCard('12/11', 'terça', createGame('brazil', '16:00', 'serbia'))}
    ${createCard('09/09', 'sabado', createGame('brazil', '16:00', 'serbia'))}
</main>
`

