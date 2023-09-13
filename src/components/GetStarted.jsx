import NorthEastIcon from '@mui/icons-material/NorthEast';

function GetStarted() {
  return (
    <>
      <section id="grow" className="start-section">
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
                <a href="#buysell" className="btn-main-big">Get started</a>
              </div>
              <div className="start-content__info-img"></div>
            </div>
            <div className="start-content_subscribe">
              <h2>Receive transmissions</h2>
              <p>
                Unsubscribe at any time.
                <span>
                   Privacy policy
                   <NorthEastIcon />
                </span>
              </p>
              <form autoComplete="off" method="post" action="" className="start__email-wrap">
                <input
                  className="start__email_input" 
                  type="email"
                  name="Email"
                  id=""
                  placeholder="Email Address"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
