import "../plan.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export const Plan = () => {
  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });

  return (
    <section className="Plan" id="plan">
      <div className="container">
        <div className="mybar">
          <div className="animated-progress progress-orange mybar">
            <span data-progress="90"></span>
          </div>
          <div className="animated-progress progress-orange mybar">
            <span data-progress="87"></span>
          </div>
          <div className="animated-progress progress-orange mybar">
            <span data-progress="83"></span>
          </div>
          <div className="animated-progress progress-orange mybar">
            <span data-progress="90"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
