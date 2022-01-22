import React from 'react';
import Carousel from './Carrousel';
import {Badge} from 'react-bootstrap';
const Project = ({project}) => {


    


    return (
        <>
            <div className='project-body mt-3 border border-secundary rounded p-2'>
            <div className='d-flex justify-content-between align-items-baseline'>
            <h5>{project.project_name}</h5>
            <span className='border border-dark rounded px-1'>{project.project_year}</span>
            </div>
            <p className='small'>{project.project_description}</p>
            <div>
                {
                    project.frontend.map((i)=>{
                        return <Badge> {i} </Badge>
                    })
                }
            </div>
            <div>
                {   
                    project.backend.map((i)=>{
                        return <Badge className='bg-danger'> {i} </Badge>
                    })
                }
            </div>
            <div className='mt-3'>
            <Carousel images={project.images}></Carousel>
            </div>
            </div>
        </>
    )
}


export default Project;