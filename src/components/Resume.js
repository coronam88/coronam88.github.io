import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import resume from '../image/CV 2021.pdf';


const Resume = ({showModal, hideModal}) => {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const mystyle = {
        overflow:"hidden",
        height:"100%",
        width:"100%"
      };


    return (
        <Modal size={"lg"} show={showModal} onHide={hideModal}>
            <div className='embed-responsive embed-responsive-16by9'>
            <iframe width={"1000"} height={"1000"} className={"embed-responsive-item"} src={resume} ></iframe>
            </div>
        </Modal>
    )
}

export default Resume;