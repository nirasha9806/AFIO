import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="bg-dark" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3 text-white">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              AFIO
            </h6>
            <p>
            The best thing is that online shopping carts are SEO friendly systems for vendors, retailers and merchants.	
            </p>
            <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase  mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="#!">name of the products</a>
            </p>
            <p>
              <a href="#!">name of the products</a>
            </p>
            <p>
              <a href="#!">name of the products</a>
            </p>
            <p>
              <a href="#!">name of the products</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="CardReq">Loyalty Card</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> No:127/2 Galle Road, Colombo 3.
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> ydgogerly97@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +94 76 544 222
            </p>
            <p>
              <i className="fa fa-print mr-3" /> 011 222 222
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className=" text-md-center text-white">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.GAP.com"> AFIO.com|All Right Recevered </a>
            </p>
          </MDBCol>
          <MDBCol md="6" lg="7" className="text-center text-md-right text-white">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPagePro;