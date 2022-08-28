import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'
import NetWorkErr from '../pages/NetworkErr.vue'
import VaccinatedInfo from '../pages/VaccinatedInfo.vue'
import VaccinatedProfileCard from '../components/VaccinatedProfileCard.vue'
import VaccinatedVaccineCard from '../components/VaccinatedVaccineCard.vue'
import VaccinatedAllInfo from '../components/VaccinatedAllInfo.vue'
import NProgress from 'nprogress'
import vaccineAPI from '../services/vaccineAPI.js'
import GlobalState from '../store/index'

const name = ['Roger', 'Lipton', 'SomChai', 'Lillie', 'Light']

function isValidDoctor(DocName) {
    for (let i of name) {
        if (DocName === i) {
            return true
        }
    }
    return false
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: (route) => ({ page: parseInt(route.query.page) || 1 }),
        beforeEnter: () => {
            GlobalState.isdoctor = false
            GlobalState.doctorName = ''
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/vaccinated/:id',
        name: 'Vaccinated',
        component: VaccinatedInfo,
        props: true,
        beforeEnter: (to) => {
            return vaccineAPI
                .getVaccinatedPerson(to.params.id)
                .then((res) => {
                    GlobalState.vaccinatedPerson = res.data
                    for (let item of GlobalState.doctorComment) {
                        if (item.id == GlobalState.vaccinatedPerson.id) {
                            console.log(item)
                            GlobalState.vaccinatedPerson.doctor_comment.push(item)
                        }
                    }
                })
                .catch((err) => {
                    if (error.response && error.response.status == 404) {
                        return {
                            name: '404Resource',
                            params: { resource: 'event' },
                        }
                    } else {
                        return { name: 'NetworkError' }
                    }
                })
        },
        children: [
            {
                path: '',
                name: 'VaccinatedAllInfo',
                component: VaccinatedAllInfo,
            },
            {
                path: 'info',
                name: 'VaccinatedInfo',
                component: VaccinatedProfileCard,
            },
            {
                path: 'vaccine',
                name: 'VaccinatedVaccine',
                component: VaccinatedVaccineCard,
            },
        ],
    },
    {
        path: '/doctor/:name',
        name: 'Doctor',
        component: Home,
        props: (route) => ({ page: parseInt(route.query.page) || 1 }),
        beforeEnter: (to) => {
            if (isValidDoctor(to.params.name)) {
                GlobalState.isdoctor = true
                GlobalState.doctorName = to.params.name
            } else {
                return { name: '404Resource', params: { resource: 'Doctor' } }
            }
        },
    },
    {
        path: '/404/:resource',
        name: '404Resource',
        component: NotFound,
        props: true,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/network-error',
        name: 'NetworkError',
        component: NetWorkErr,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(() => {
    NProgress.start()
})

router.beforeEach(() => {
    NProgress.done()
})

export default router
