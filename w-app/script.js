const myinval = document.getElementById('input1')
let temperaturedisplay=document.getElementById('tempdis')
let displogo =document.querySelector('displayval img')
let myid=document.getElementById('myid')
let cont_cit = document.getElementById('city-cont')
let feelslike = document.getElementById('feellike')
let mintemp = document.getElementById('tempmin')
// let maxval = document.getElementById('tempmax')
let press = document.getElementById('pressure')
let humid =document.getElementById('humidity')


function getdata(){
    if(myinval.value===''){
        alert('enter an cityname to get information')
        return
    }
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+myinval.value+'&appid=5594b4f5436905e324ca3450724aeb8a').then(responce => responce.json())

    .then(data =>{
        console.log(data)
        let empvalue = data.main.temp
        let cityval = data.name
       
                                    console.log(cityval)
        let contryval =data.sys.country
                                    console.log(contryval)
        let feelval = data.main['feels_like']
        let feelval_formet =(feelval-273.15).toFixed(2)
                                    console.log(feelval_formet)
        let minvalue = data.main["temp_min"]
        let minvalue_formet = (minvalue-273.15).toFixed(2)
                                    console.log(minvalue_formet)
        // let maxvalue = data.main[ "temp_max"]
        // let maxval_formet = (maxvalue-273.15).toFixed(2)
        //                             console.log(maxval_formet)
        let pressureval = data.main.pressure
        let humdival =data.main.humidity



        let id=data.weather[0].id
        console.log(id)
        if(id===800){
            myid.src ='image/img1.png';
        }
        else if(id>=801 && id<=804){
            myid.src ='image/img2.png';
        }else if(id>=200 && id <=232){
            myid.src ='image/img6.png';

        }else if(id>=600 && id <=622){
            myid.src ='image/img3.png';
        }else if(id>=300 && id <=321){
            myid.src ='image/img5.png';
        }
        else{
            myid.src ='image/imgdef.png'
        }



        let finalval=(empvalue-273.15).toFixed(2);
        temperaturedisplay.innerHTML = finalval +' °c';
        cont_cit.innerHTML = cityval+','+contryval;
        feelslike.innerHTML = 'Real feel '+feelval_formet+'°C';
        mintemp.innerHTML = 'Temp min '+minvalue_formet+'°C';
        // maxval.innerHTML = 'Temp max '+maxval_formet+'°C'
        press.innerHTML = 'pressure'+pressureval;
        humid.innerHTML='humidity'+humdival
    }
     
        )


    .catch(err =>{
        alert('city not found')
        console.log(err)})
        myinval.value=""
        return
}











// let myva=document.getElementById('myimage')
// let val=document.getElementById('inpi')

// function mynewfun(){
//     if(val.value==9){
//         myva.src='img2.png'
//     }
// }
