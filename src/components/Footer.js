import React from "react";
import styled, { keyframes } from "styled-components";
import "./Footer.css";

const fadeIn = keyframes`
   from {
     opacity: 0;
   }
   to {
     opacity: 1;
   }
 `;

const FooterDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/dev-fatih-aksoy/"
          target="_blank"
          rel="noreferrer"
        >
         
          <i className="fa fa-linkedin fa-lg" />
        </a>
        <span className="sr-only">Linkedin</span>
        <a
          href="https://github.com/fatih-aksoy"
          target="_blank"
          rel="noreferrer"
        >
          
          <i className="fa fa-github fa-lg" />
        </a>
        <span className="sr-only">GitHub</span>
      </div>
      <p className="footer-text">Fatih Aksoy</p>
    </FooterDiv>
  );
};

export default Footer;
