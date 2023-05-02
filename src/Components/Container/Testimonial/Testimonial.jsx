import React from "react";
import comillasDerecha from "../../../assets/comillasDerecha.svg";
import comillasIzquierda from "../../../assets/comillasIzquierda.svg";
import personTestimonial from "../../../assets/imgTestimonial.png";
import arrowleft from "../../../assets/arrowleft.svg";
import arrowright from "../../../assets/arrowright.svg";
import "./Testimonial.css";

export const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="arrow_circle_izquierda">
        <img src={arrowleft} alt="" width={20} />
      </div>
      <div className="testimonial_text">
        <span>
          <img src={comillasDerecha} alt="comillas" />
        </span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br /> Ipsum has been the industry's standard dummy
          Lorem Ipsum is simply dummy text <br /> of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the <br />{" "}
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard <br /> dummy Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. <br />
          <br />
          <span className="testimonial_text_alexander">
            Alexander Ivchenko
          </span>{" "}
          <br /> <br />
          <span>Businessman</span>
        </p>

        <span>
          <img src={comillasIzquierda} alt="comillas" />
        </span>
      </div>

      <div className="testimonial_img">
        <img src={personTestimonial} alt="person" />
      </div>
      <div className="arrow_circle_derecha">
        <img src={arrowright} alt="" width={20} />
      </div>
    </div>
  );
};
