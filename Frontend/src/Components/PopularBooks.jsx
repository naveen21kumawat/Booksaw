import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function PopularBooks({handleOnCart}) {
  let [books, setBookdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/popularBooks");
      const ApiData = await response.json();
      setBookdata(ApiData);
    };
    fetchData();
  }, []);


  const openBookPage = (book) => {
    const url = `/book-details?id=${book.id}&title=${encodeURIComponent(
      book.title
    )}&description=${encodeURIComponent(book.description)}`;
    window.location.href = url; // Open in the same tab
  };
  return (
    <>
      <section id="popular-books" className="bookshelf py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Popular Books</h2>
              </div>
              <ul className="tabs">
                <li className="active tab">All Genre</li>
              </ul>
              <div className="tab-content">
                <div id="all-genre" className="active">
                  <div className="row">
                    {books.map((book) => (
                      <div key={book.id}
                       className="col-md-3">
                        <div className="product-item">
                          <figure className="product-style">
                            <img
                             onClick={() => openBookPage(book)}
                              src={book.image}
                              alt="Books"
                              className="product-item"
                            />
                            <button
                              type="button"
                              className="add-to-cart"
                              data-product-tile="add-to-cart"
                              onClick={()=>handleOnCart(book)}
                            >
                              Add to Cart
                            </button>
                          </figure>
                          <figcaption>
                            <h3>{book.title}</h3>
                            <span>{book.author}</span>
                            <div className="item-price">{book.price} Rs</div>
                          </figcaption>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularBooks;
