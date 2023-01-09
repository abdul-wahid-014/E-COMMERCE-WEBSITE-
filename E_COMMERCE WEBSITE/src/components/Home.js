import React from 'react'

const Home = () => {
    return (
        <>
            <div className='container-fluid mt-4'>
                <div className="row d-flex justify-content-center">
                    <div className="col-10">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg" className="d-block w-100 h-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg" className="d-block w-100 h-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg" className="d-block w-100 h-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg" className="d-block w-100 h-75" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5  mb-5  ">
                <div className="row d-flex justify-content-around">
                    <div className="col-3 ">
                        <h5 className='fw-bolder'>Delivery Service</h5>
                        <p>Free shiping over 5k order</p>
                    </div>
                    <div className="col-3">
                    <h5 className='fw-bolder'>Delivery Service</h5>
                        <p>Free shiping over 5k order</p>
                    </div>
                    <div className="col-3">
                    <h5 className='fw-bolder'>Delivery Service</h5>
                        <p>Free shiping over 5k order</p>
                    </div>
                    <div className="col-3">
                    <h5 className='fw-bolder'>Delivery Service</h5>
                        <p>Free shiping over 5k order</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-5">
                        <h3>About Us</h3>
                        <p className='fs-4'>Launched in February 2016, Fatima Meat is a special chain of retail stores which provides its customers with fresh, healthy and quality meat in the most affordable rates. Our primary objective is to provide customers with premium quality meat processed in a hygienic environment. Also, we offer customers with a wide range of products to choose from which includes beef, mutton and chicken. With Fatima Meat, you name it and we have it!</p>
                    </div>
                    <div className="col-5">
                        <img src="https://www.fatimameat.com/static/media/aboutusImg.7a6e7bde5c6475c4242b.jpg" alt="" width={500}/>
                    </div>
                </div>
            </div>


            
        </>
    )
}

export default Home
