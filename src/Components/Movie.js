import React from 'react'
import { Link } from "module-react-dom";

function Movie(props) {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4'>
                  <div className='card--miabox'>
                   <img src={props.movie.image} alt="img" />
                    <div className='overlay'>
                        <div className='mx-auto overlay-header d-flex align-items-center'>
                            
                              <Link to={`details/${props.movie.id}`} className='mx-auto text-white'>
                               <i className='far fa-play-circle fa-3x'></i>
                              </Link>

                        </div>
                        <div className='overlay-footer p-2'>
                            <h4 className='text-white'>{props.movie.title}</h4>
                              <div className='d-flex flex-row justify-content-between'>
                                <div>
                                    <span style={{frontSize:"10px"}} className='btn-18 p-1'>+18</span>
                                    <span style={{frontSize:"10px"}} className='text-white'>{props.movie.duration}</span>
                                </div>
                                <div className='btn-plus'>
                                    <button style={
                                        {frontSize:"10px", 
                                         backgroundColor:"#151415",
                                         borderRadius:"5px", 
                                         border: "1px #151415 solid"}} className ="text-white">
                                       more info
                                    </button>
                                </div>
                              </div>

                              <div className='flex flex-column text-white mt-1'>
                                <div style={{frontSize:"10px"}}>
                                    <span>Inspiring</span>
                                    <span>Emotion</span>
                                    <span>Intimate</span>
                                </div>
                              </div>
                        </div>
                    </div>
                  </div>
                </div>
  )
}

export default Movie