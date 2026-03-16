function Carousel() {

    return (
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
                        className="d-block w-100"
                        alt="Jewellery 1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
                        className="d-block w-100"
                        alt="Jewellery 2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1"
                        className="d-block w-100"
                        alt="Jewellery 3"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )

}


export default Carousel;