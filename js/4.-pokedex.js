const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            cargarDatos(data)

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const cargarDatos = (data) => {
    let name = data.forms[0].name;
    const nombre = document.getElementById("nombre");
    nombre.innerHTML = name;

    let type = data.types[0].type.name;
    const tipo = document.getElementById("tipo");
    tipo.innerHTML = type;

    let moves =''
    const movimientos = document.getElementById("movimientos");

    let = stats =''
    const estadisticas = document.getElementById("estadisticas");

    const A = new Uint8Array(data.moves)
    const B = new Uint8Array(data.stats)

    function callbackM(elmnt, index, array) {
        moves=moves+'' + index + '-' + data.moves[index].move.name + "";
    }

    function callbackE(elmnt, index, array) {
        stats=stats+'' + data.stats[index].stat.name + ' : ' + data.stats[index].base_stat + "<br>";
    }

    A.forEach(callbackM);
    movimientos.innerHTML = moves;

    B.forEach(callbackE);
    estadisticas.innerHTML = stats;

}


