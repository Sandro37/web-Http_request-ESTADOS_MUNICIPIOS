function update() {
    var select = document.getElementById('estado');
    var value = select.options[select.selectedIndex].value;
    request(value)
}


function request(value) {
    let UF = value;
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + UF + "/municipios";

    document.getElementById("titulo").innerHTML = "Municipios de(o): " + value;    

    document.getElementById("municipios").innerHTML = "";
    
    fetch(url).then(Response => Response.json())
    .then((json) => {
        for(let i = 0; i < json.length; i++){
            document.getElementById("municipios").innerHTML += json[i].nome + "<br>";
        }
    })
}






