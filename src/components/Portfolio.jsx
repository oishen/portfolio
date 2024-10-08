import Buttons from "./Buttons"
import img1 from '../assets/oishen.github.io_interior_ (2).png'
import img2 from '../assets/yorkmars.000webhostapp.com_ (1).png'
import img3 from '../assets/oishen.github.io_interior_ (2).png'
import img4 from '../assets/yorkmars.000webhostapp.com_ (1).png'
import img5 from '../assets/oishen.github.io_k-shop_ (1).png'
const Portfolio = ({portfolio}) => {
    return (
        <div id={portfolio}>
            <div id="divBorder" className="d-flex align-items-center" >
                <div className="container-lg p-lg-5 justify-content-center align-items-center d-flex" id="box">
                    <div className="text-center" >
                        <h2 className="h2 text-center pb-3">Our <span>PROJECTS</span></h2>
                        <div className="row align-items-center pb-5 ">
                            <div className="col-sm-3 col-4">
                                <a href="https://oishen.github.io/interior/"  >
                                    <img src={img1} alt="interior website" />
                                </a>
                            </div>

                            <div className="col-sm-3 col-4">
                                <a href="https://yorkmars.000webhostapp.com/">
                                    <img src={img2} alt="full stack website" />
                                </a>
                            </div>

                            <div className="col-sm-3 col-4">
                                <a href="https://oishen.github.io/k-shop/">
                                    <img src={img5} alt="ecommerce website" />
                                </a>
                            </div>

                        </div>
                        <Buttons modalId="#webId" />
                    </div>
                </div>

                {/* <div className="modal fade text-dark" id="webId">
                    <div className="modal-dialog modal-fullscreen-xxl-down">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Web Development</h4>   
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-3">
                                        <img src={img1} alt="interior website" />
                                        <p>Show about your company</p>
                                    </div>

                                    <div className="col-3">
                                        <img src={img4} alt="full stack website" />
                                        <p>Build a full stack website</p>
                                    </div>

                                    <div className="col-3">
                                        <img src={img5} alt="ecommerce website" />
                                        <p>ecommerce website</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
            </div> 
        </div>  
    )
}

export default Portfolio
