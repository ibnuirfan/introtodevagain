import React from 'react';
import { MDBFooter } from "mdbreact";
import styled from 'styled-components';

const Styles = styled.div`
.dark{
  background: #fff59d;
}

.name {
  color: #E0115F;
}

`;

const FooterPage = () => {
  return (
    <Styles>
    <MDBFooter className="font-small mt-4 dark">
      <div className="footer-copyright text-center py-3">
        <div className="container">
          &copy; {new Date().getFullYear()} Designed by: <a className="name" href="https://github.com/ibnuirfan/introtodevagain/tree/master/FinalProject"> Ibnu Irfan </a>
        </div>
      </div>
    </MDBFooter>
    </Styles>
  );
}
export default FooterPage;
