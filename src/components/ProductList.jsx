import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"

function ProductList({ setCart }) {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 3


    //  console.log(numTotalPages);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])



    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    )
    const [loading, setLoading] = useState(true)
    // Pagination calculation
    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    return (

        <div className="container-fluid">
            <SearchBar search={search} setSearch={setSearch} />
            <div className="productContainer">
                {loading ? (
                    <h4 className="preloader">Loading products...</h4>
                ) : filteredProducts.length === 0 ? (
                    <h4 className="text-center mt-4">No products found</h4>
                ) : (
                    currentProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            setCart={setCart}
                        />
                    ))
                )}


            </div>
            {/* //Pagination */}
            {filteredProducts.length > 0 && (
                <div className="pagination">

                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="btn btn-outline-dark m-1"
                    >
                        &#8592;
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`btn m-1 ${currentPage === index + 1
                                ? "btn-dark"
                                : "btn-outline-dark"
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="btn btn-outline-dark m-1"
                    >
                        &#8594;
                    </button>

                </div>
            )}

        </div>

    )

}

export default ProductList