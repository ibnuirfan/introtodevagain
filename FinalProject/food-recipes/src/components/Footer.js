import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
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
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Designed by: <a className="name" href="https://github.com/ibnuirfan/introtodevagain"> Ibnu Irfan </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </Styles>
  );
}
export default FooterPage;
