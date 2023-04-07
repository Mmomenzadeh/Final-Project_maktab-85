import "../../Assets/Styles/Pages/NotFound/index.scss";

export const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 Error Page </h1>
      <p class="zoom-area">
        <b>خطا</b> صحفه ی درخواستی شما پیدا نشد 
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <a
          target="_blank"
          href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
          class="more-link"
        >
       
        </a>
      </div>
    </div>
  );
};
