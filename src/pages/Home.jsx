// import ProductList from "../components/productList";
import Carousel from "../components/Carousel";


function Home() {
  return (
    <div className="container mt-4">

      <main>

       <Carousel />


        <div className="container marketing">


          <div className="row">
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2>Heading</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2>Heading</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2>Heading</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
              <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
          </div>



          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

            </div>
          </div>



          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

            </div>
          </div>



          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

            </div>
          </div>
          <footer className="container">
            {/* <p className="float-end"><a href="#">Back to top</a></p> */}
            <p>© 2026 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
          </footer>
        </div>

      </main>


      
    </div>
  );
}

export default Home;