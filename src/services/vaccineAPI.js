import axios from 'axios'

const vaccineAPI = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KevinHBC/Vaccine-data',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getVaccinatedPeople(perPage,page){
        console.log('/vaccinated?_limit=' + perPage + '&_page=' + page)
        return vaccineAPI.get('/vaccinated?_limit=' + perPage + '&_page=' + page)
    },
    getVaccinatedPerson(id){
        return vaccineAPI.get('/vaccinated/' + id)
    }
}