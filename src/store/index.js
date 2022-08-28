import { reactive } from 'vue'

export default reactive(
    { flashMessage: '', details: null, vaccinatedPerson: null, isdoctor:false, doctorName:'',doctorComment:[] },
    { flashEdit: '' }
)
