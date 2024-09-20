import Buttons from "./Buttons"
import img1 from '../assets/oishen.github.io_interior_ (2).png'
import img2 from '../assets/yorkmars.000webhostapp.com_ (1).png'
import img3 from '../assets/oishen.github.io_k-shop_ (1).png'

const Service = ({service}) => {
    return (
        <div id={service}>
            <div id="divBorder" className="d-flex align-items-center" >
                <div className="container-lg p-lg-5 justify-content-center align-items-center d-flex" id="box">
                    <div>
                        <h2 className="h2 text-center pb-3">Our <span>SERVICES</span></h2>
                        <div className="row justify-content-center align-items-center gap-5 ">
                            <div className="col-lg col-md-12 text-center border border-danger rounded-5 p-lg-5 p-3">
                                <i className="fa-solid fa-code" id="serIcon" ></i>
                                <h4 className="h4">Web Development</h4>
                                <p>Web development involves the creation and maintenance of websites. It encompasses several aspects including web design, web content development, client-side/server-side scripting, and network security configuration. It ensures that websites are functional, user-friendly, and visually appealing.</p>
                                <Buttons modalId="#webId" />
                            </div>

                            <div className="col-lg col-md-12 text-center border border-danger rounded-5 p-lg-5 p-3">
                                <i className="fa-solid fa-wand-magic-sparkles" id="serIcon"></i>
                                <h4 className="h4">UX/UI</h4>
                                <p>UX (User Experience) design aims to enhance user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with a product. UI (User Interface) design involves the look and layout of a product, ensuring it is both aesthetically pleasing and easy to navigate.</p>
                                <Buttons modalId="#uiId" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Modal */}
                <div className="modal fade text-dark" id="webId">
                    <div className="modal-dialog modal-fullscreen-xxl-down">
                        <div className="modal-content">

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Web Development</h4>   
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-3">
                                        <a href="https://oishen.github.io/interior/" id="webImg">
                                             <img src={img1} alt="full stack website" />
                                        </a>
                                        <p>Show about your company</p>
                                    </div>

                                    <div className="col-3">
                                        <a href="https://yorkmars.000webhostapp.com/">
                                            <img src={img2} alt="full stack website" />
                                        </a>
                                        <p>Build a full stack website</p>
                                    </div>

                                    <div className="col-3">
                                        <a href="https://oishen.github.io/k-shop/">
                                            <img src={img3} alt="ecommerce website" />
                                        </a>
                                        <p>ecommerce website</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* The Modal */}
                <div className="modal fade text-dark" id="uiId">
                    <div className="modal-dialog modal-fullscreen-xxl-down">
                        <div className="modal-content">

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">UX/UI</h4>   
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            {/* Modal body */}
                            <div className="modal-body">
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service