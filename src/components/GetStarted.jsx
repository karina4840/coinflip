function GetStarted() {
  return (
    <>
      <section id="start" className="start-section">
        <div className="container">
          <div className="start-content">
            <div className="start-content__info">
              <div className="start-content__info-text">
                <h2>Take your first step into safe, secure crypto investing</h2>
                <p>
                  Separated they live in Bookmarks right at the coast of the
                  famous Semantics, large language ocean Separated they live in
                  Bookmarks right at the coast.
                </p>
                <button className="btn-main-big">Get started</button>
              </div>
              <div className="start-content__info-img"></div>
            </div>
            <div className="start-content_subscribe">
              <h2>Receive transmissions</h2>
              <p>
                Unsubscribe at any time.
                <span>
                   Privacy policy
                  <i class="fa-solid fa-turn-up"></i>
                </span>
              </p>
              <div className="email-wrap">
                <input
                  className="email_input"
                  type="email"
                  name="Email"
                  id=""
                  placeholder="Email Address"
                />
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
