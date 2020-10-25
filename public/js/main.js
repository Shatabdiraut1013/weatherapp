const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')

const temp_real_val = document.getElementById('temp_real_val') 
const temp_status = document.getElementById('temp_status') 

const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) =>{
    event.preventDefault()
    let cityVal = cityName.value; //means user jo bhi type karega search bar usse data show hoga
    if(cityVal === ''){ // if value is empty
        city_name.innerText = `Plz write the name before you search`
        datahide.classList.add('data_hide')
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=332dbeb40ca477032a8de5ff751dbc20`
            const response = await fetch(url) // url in readable form
            const data = await response.json() //convert it into json for see data
            console.log(data)
            const arrData = [data] //pass the data into arrData

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp // for temperature

            const tempMood = arrData[0].weather[0].main
            // conditions to check if sunny or cloudy
            if(tempMood == 'Clear'){
                temp_status.innerHTML =
                 "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }else if(tempMood == 'Clouds'){
                temp_status.innerHTML =
                 "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }else if(tempMood == 'Rain'){
                temp_status.innerHTML =
                 "<i class='fas fa-rain' style='color: #a4b0be;'></i>"
            }else if(tempMood == 'Haze'){
                temp_status.innerHTML =
                 "<i class='fas fa-smog' style='color: #7f8c8d;'></i>"
            }else{
                temp_status.innerHTML =
                 "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }

            datahide.classList.remove('data_hide')

        }catch{
            city_name.innerText = `Plz enter the city name properly`
            datahide.classList.add('data_hide')
        }
        
    }
}

submitBtn.addEventListener('click', getInfo)