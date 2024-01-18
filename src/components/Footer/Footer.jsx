import React from "react";
import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <div className="container">
      <div className="FoooterInfo">
        <div className="FooterLogo">
          <h3>Funiro</h3>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="FooterLinks">
          <div>
            <a className="FooterLink" href="#">
              Links
            </a>
          </div>
          <div>
            <a className="FooterLink" href="#">
              Home
            </a>
          </div>
          <div>
            <a className="FooterLink" href="#">
              Shop
            </a>
          </div>
          <div>
            <a className="FooterLink" href="#">
              About
            </a>
          </div>
          <div>
            <a className="FooterLink" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="Help">
          <div>
            <a className="FooterLink" href="#">
              Help
            </a>
          </div>
          <div>
            <a className="FooterLink" href="#">
              Payment Options
            </a>
          </div>
          <div>
            <a className="FooterLink" href="#">
              Returns
            </a>
          </div>
          <div>
            <a className="FooterLink" href="#">
              Privacy Policies
            </a>
          </div>
        </div>
        <div className="Newsletter">
          <h3>Newsletter</h3>

          <form>
            <input type="text" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
