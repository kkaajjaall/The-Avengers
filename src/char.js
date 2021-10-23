import React from 'react'
import { NavLink } from 'react-router-dom'

const char = () => {
    return (
        <>
   
     <section className="main">
      <div className="container c">
         <h1 className="main-heading text-center"> Top  Cast  </h1>
        <div className="row mt-lg-3 pics">
         
                 
                    <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char"> <NavLink  to="/char1"> <img src="./images/char 1.jpg" width="200px" height="200px" className="picsss"/> </NavLink>  </div>
                    <h4 className="sub-heading  "> Robert Downey Jr. </h4>
                    <h5 className="para "> Tony Stark </h5>
                    </div>


                    <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char">  <NavLink  to="/char2"> <img src="./images/c2.jpg" width="200px" height="200px" className="picsss"/> </NavLink>   </div>
                    <h4 className="sub-heading"> Chris Evans </h4>
                    <h5 className="para "> Steve Rogers</h5> 
                    </div>


                    <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char">  <NavLink  to="/char3">  <img src="./images/c3.jpg" width="200px" height="200px" className="picsss"/> </NavLink>   </div>
                    <h4 className="sub-heading  ">  Scarlett Johansson </h4>
                    <h5 className="para ">  Natasha Romanoff </h5>
                     </div>


                     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char">  <NavLink  to="/char4">  <img src="./images/c4.jpg" width="200px" height="200px" className="picsss"/> </NavLink> </div>
                    <h4 className="sub-heading  "> Jeremy Renner </h4>
                    <h5 className="para ">  Clint Barton</h5>
                     </div> 

                     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char">   <NavLink  to="/char5"> <img src="./images/c5.jpg" width="200px" height="200px" className="picsss"/>  </NavLink> </div>
                    <h4 className="sub-heading  "> Mark Ruffalo </h4>
                    <h5 className="para "> Bruce Banner </h5>
                     </div>

                     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char">   <NavLink  to="/char6"> <img src="./images/c6.jpg" width="200px" height="200px" className="picsss"/> </NavLink> </div>
                    <h4 className="sub-heading  "> Chris Hemsworth </h4>
                    <h5 className="para ">  Thor</h5>
                     </div>

        </div>

                 
             
         
         
         </div>
     

     </section>  
     </>
            
       
    )
}

export default char

