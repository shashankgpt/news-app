import React from 'react';
import { Container } from "reactstrap";
import PropTypes from 'prop-types';
import Header from "../Header/Header";

function PageWrapper({children}) {
    return (
         <Container>
             <Header />
             {children}
        </Container>
    )
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
 }
 

export default PageWrapper
