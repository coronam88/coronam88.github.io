import prueba from '../image/prueba.jpg';
import otra from '../image/2.jpg';
import otra_2 from '../image/3.jpg';
import otra_3 from '../image/4.png';



const projectsData = [
        {   project_name: "SUIP",
            project_description: "descripcion",
            project_year: "2021",
            frontend:[
                "ReactJs"
            ],
            backend:[
                "Django API REST",
                "PostgreSQL"
            ],
            images:[prueba, otra, otra_2, otra_3]
        },
        {   project_name: "CocoAdmin",
            project_description: "POS - Sales Management - Retail",
            project_year: "2019",
            frontend:[
                "ReactJs"
            ],
            backend:[
                "Ruby on Rails",
                "PostgreSQL"
            ],
            images:[prueba, otra, otra_2, otra_3]
        }
    ]



export default projectsData;