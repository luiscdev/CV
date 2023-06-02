//import profile from "../../profile.jpg"
const resume = {
    firstName: 'Luis Manuel',
    lastName: 'Zuleta',
    jobTitle: 'Full Stack Developer',
    city: 'Manizales',
    postalCode: '170001',
    country: 'Colombia',
    phone: '+57 3137825360',
    email: 'luiszuletamc@gmail.com',
    education: [
        {
            school: 'SENA',
            degree: 'Programación de software',
            graduationDate: '2019',
            description: 'Desarrollador web'
        },
        {
            school: 'SENA',
            degree: 'Metodologias de calidad para el desarrollo de software',
            graduationDate: '2017',
        },
    ],
    links: [
        {
            label: 'GitHub',
            link: 'https://github.com/luiscdev'
        },
        {
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-zuleta-8a11ab185/'
        },
    ],
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'TypeScript',
        'VueJS',
        'Golang',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'GIT',
    ],
    languages: ['English (A2)', 'Spanish'],
    professionalSummary: `Soy un desarrollador que siempre está con sed de aprender nuevas cosas cada dia, estoy dispuesto a trabajar tanto en equipo como individual, soy atento y estoy dispuesto a asumir nuevos retos que me hagan crecer tanto de forma profesional como personal`,
    employmentHistory: [
        {
            jobTitle: 'Full Stack developer',
            startDate: 'JUN 2021',
            endDate: 'PRESENT',
            employer: 'CUEMBY INC',
            city: 'Remote',
            achievements: [
                'Desarrollo frontend y backend,\n' +
                'css, html, laravel, git, Docker, Go, VueJs, Typescript, MongoDb y php\n.'
            ]
        },
        {
            jobTitle: 'Full Stack Developer',
            startDate: 'MAY 2018',
            endDate: 'NOV 2020',
            employer: 'Asweb',
            city: 'Manizales',
            achievements: [
                'Desarrollo frontend y backend spa,\n' +
                'Jquery, js, css, html, laravel y git \n.'
            ]
        },
    ],
    photo: "https://luiscdev.github.io/CV/profile.png"//"https://drive.google.com/file/d/1zoGxk3FSx4Q0Rb48K5jRxaw5ZmFm-Nut/view?usp=sharing"//profile //'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/272678175_3145432135780738_6581827881174133683_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeG4l72bC0bjwfDfpjqHLuF6XXnzbZ-GImxdefNtn4YibNfdENV-YrWn6BX9nnMG_S9gTfNVUthw4Y4ap4c6fPSU&_nc_ohc=Gv_YojgceNkAX_VDXcg&_nc_ht=scontent-bog1-1.xx&oh=00_AT-a7-a-nsVquM578MDomO2YM43duqcc8ffu5o4QZoBSIA&oe=62818973',
}

const formatResume = (r) => ({
    ...r,
    address: [
        r.country,
        r.city,
        r.postalCode
    ].filter(Boolean).join(', ')
})

 /* Vue.createApp({
    data() {
      return {
         formatResume(resume)
      }
    }
  }).mount('#app')
*/
new Vue({
    el: "#app",
    data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()
