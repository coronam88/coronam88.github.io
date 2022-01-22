import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import { Button, ListGroup } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import projectsData from './data/projectsData';

function App() {

  const [projectsList, setProjectsList] = useState([]);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    setProjectsList(projectsData);
    return () => { }
  }, [])

  const hideModal = () => setShowModal(false);


  return (
    <>
      <section className='container-fluid'>
        <div className='text-center'>
          <Header></Header>
        </div>
        <div className='d-flex justify-content-end sticky-top'>
          {/* <Button onClick={()=>{setShowModal(true)}} variant={'primary'} size="sm">View Resume</Button> */}
          <Button target="_blank" href={"https://drive.google.com/file/d/1y84FE55RH7E02ztZx6AdWUkz5AGRopGk/view?usp=sharing"} variant={'success'} size="sm">Download Resume</Button>
        </div>
        <div className='d-flex justify-content-center text-light lead mt-2'>
          <ul style={{"list-style-type":"none"}}>
            <li>Phone: +54 9 3513071561</li>
            <li>Email: maxicorona@gmail.com</li>
            <li>Linkedin: /coronam88 </li>
          </ul>
        </div>
        <hr className='text-light'></hr>
      </section>

      <section className='container'>
        <h1 className='mt-4 mb-2 text-center text-light'>Web Applications</h1>
        {
          projectsList.map((project) => {
            return <Project project={project}></Project>
          })
        }
      </section>
      <Resume showModal={showModal} hideModal={hideModal}></Resume>
    </>
  );
}

export default App;
