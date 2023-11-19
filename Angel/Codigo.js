function Datos(){
    let usu = document.getElementById('Usuario').value;
    let contra = document.getElementById('Contra').value;
    let h = 0;
    let usuarios = ["Ana", "Angel", "Oscar"];
    let contras = [1909, 2730, 2023];

    for(let i = 0; i < usuarios.length; i++){
        if(usu == usuarios[i] && contra == contras[i]){
            alert("Bienvenido");
            window.location = "index2.html";
            h = 1;
        }
    }
    if (h == 0){
        alert("Datos Incorrectos");
    }

}
    
