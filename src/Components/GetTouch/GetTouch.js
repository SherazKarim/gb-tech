import { GoLocation } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'
import { IoMdCall } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import Form from 'react-bootstrap/Form';
import './GetTouch.css'
// import { ValidationError } from '@formspree/react'
export default function GetTouch() {
    // const[state,handleSubmit] = useForm();
    // if(state.succeeded){
    //     return <p>Thanks For Joining</p>
    // }
    return (
        <section id='contact'>
            <div className="container">
                <div className="text-center get">
                    <h2 className='get-fonts mb-4'>Get In Touch</h2>
                </div>
                <div className="row row-touch">
                    <div className='col-md-12'></div>
                    <div className="col-md-4">
                        <div className='row border-box py-4 px-4 m-3'>
                            <div className='icon-color'>
                                <IconContext.Provider value={{ size: '40', color: '#FF6347' }}>
                                    <GoLocation />
                                </IconContext.Provider>
                            </div>
                            <div className='col'>
                                <h6>Head Office</h6>
                                <p>Houston, Texas, USA</p>
                            </div>
                        </div>
                        <div className='row border-box py-4 px-4 m-3'>
                            <div className='icon-color'>
                                <IconContext.Provider value={{ size: '40', color: '#FF6347' }}>
                                    <IoMdCall />
                                </IconContext.Provider>
                            </div>
                            <div className='col'>
                                <h6>Call For Help</h6>
                                <p>1 346 200 3192</p>
                            </div>
                        </div>
                        <div className='row border-box py-4 px-4 m-3'>
                            <div className='icon-color'>
                                <IconContext.Provider value={{ size: '40', color: '#FF6347' }}>
                                    <AiOutlineMail />
                                </IconContext.Provider>
                            </div>
                            <div className='col'>
                                <h6>Email</h6>
                                <p>info@gbtechive.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 form-container my-3 pt-3">
                        <div className='col'>
                            <form action='https://formspree.io/f/xpzedlwo' method='POST'>
                                <div class="form-group my-3 px-4">
                                    <Form.Group className="mb-3" >
                                        <input required name='name' class="form-control input-lg" id="inputlg" type="text" placeholder='Full Name' />
                                    </Form.Group>
                                </div>
                                <div class="form-group my-3 px-4">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" name='email' />
                                    </Form.Group>
                                </div>
                                <div class="form-group my-3 px-4">
                                    <Form.Group className="mb-3">
                                        <input required name='Subject' class="form-control input-lg" id="inputlg" type="text" placeholder='Subject' />
                                    </Form.Group>
                                </div>
                                <div class="form-group  px-4">
                                    <Form.Group className="mb-3" >
                                        <textarea required name='Text Area' class="form-control" placeholder='Message' id="exampleFormControlTextarea1" rows="3" />
                                    </Form.Group>
                                </div>
                                <button className='btn btn-link' type="submit" >Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}