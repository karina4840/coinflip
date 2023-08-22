function Choose({ img, title, text, link }) {
    return (
      <div className="choose-box">
        <i className={img}></i>
        <div className="choose-box__text">
          <h4>{title}</h4>
          <p>{text}</p>
          <a>{link}</a> 
        </div>
      </div>
    );
  }
  
  export default Choose;