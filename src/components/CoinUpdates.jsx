import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CoinUpdate() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [apiLoad, setApiLoad] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=${currentPage}&sparkline=false
  `;

  // function numberWithCommas(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePage" : ""}
      >
        {i}
      </button>
    );
  }

  const scrollTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <section id="buysell" className="market-section">
        <div className="container">
          <div className="market-content">
          <div className="market-content__text">
          <h2>Buy and sell with the lowest fees in the industry</h2>
          <p>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
          </div>
            
            <div className="market-content__coin-list">
              <div
                onLoad={() => setApiLoad(false)}
                className="market-content__coin-list__row"
              >
                {apiLoad && <span className="loader"></span>}
                {data.map((item) => (
                  <Link
                    onClick={scrollTop}
                    to={`/coin/${item.id}`}
                    className="coin-row"
                    key={item.id}
                  >
                    <span>
                      <img src={item.image} alt={item.name} />
                    </span>
                    <p className="coin-symbol">{item.symbol}</p>
                    <p>{"$ " + item.current_price.toFixed(2)}</p>
                    <p
                      className={
                        "slider-coin__price " +
                        (item.price_change_percentage_24h >= 0
                          ? "green-text"
                          : "red-text")
                      }
                    >
                      {item.price_change_percentage_24h?.toFixed(2) + " %"}
                    </p>
                    <p>
                      Trade Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="market-content__coin-list__pagination">
              {paginationButtons}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoinUpdate;
