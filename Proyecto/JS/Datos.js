let info;

document.getElementById('inicioCV').addEventListener('click', function () {
    document.getElementById('foto').src=info.picture.large;
    cambio(0);
})

document.getElementById('I_P').addEventListener('click',function () {
    cambio(1);
    completarInfoPersonal();
})

document.getElementById('F_A').addEventListener('click',function () {
    cambio(2);
})

document.getElementById('E_L').addEventListener('click',function () {
    cambio(3);
})

function completarInfoPersonal() {
    document.getElementById('nom_ape').innerHTML=info.name.first+' '+info.name.last;
    document.getElementById('fecha_nac').innerHTML=info.dob.date.substring(0,10);
    document.getElementById('genero').innerHTML=info.gender;
    document.getElementById('direccion').innerHTML=info.location.city+', '+info.location.state+', '+info.location.country;
    document.getElementById('cod_post').innerHTML=info.location.postcode;
    document.getElementById('cel').innerHTML=info.cell;
    document.getElementById('mail').innerHTML=info.email;
}

function cambio(x) {
    if (x===0) {    ///OCULTAR PORTADA CV
        document.getElementById('F').style.display='block';
        document.getElementById('datos').style.display='block';
        document.getElementById('C_V').style.display='none';
        document.getElementById('I_CV').style.display='none'
    }else if(x===1){    ///MOSTRAR INFORMACION PERSONAL
        document.getElementById('InfoPersonal').style.display='block';
        document.getElementById('ForAcademica').style.display='none';
        document.getElementById('ExpLaboral').style.display='none';
    }else if(x===2){    ///MOSTRAR FORMACION ACADEMICA
        document.getElementById('InfoPersonal').style.display='none';
        document.getElementById('ForAcademica').style.display='block';
        document.getElementById('ExpLaboral').style.display='none';
    }else{  ///MOSTRAR EXPERIENCIA LABORAL
        document.getElementById('InfoPersonal').style.display='none';
        document.getElementById('ForAcademica').style.display='none';
        document.getElementById('ExpLaboral').style.display='block';
    }
}

fetch('https://randomuser.me/api/?result=1')
.then(Response=>Response.json())
.then(data=>info=data.results[0])
.catch(error=>console.log(error))

