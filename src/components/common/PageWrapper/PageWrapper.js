import React from 'react';
import { Container } from "reactstrap";
import PropTypes from 'prop-types';

function PageWrapper({children}) {
    return (
         <Container>
            {children}
        </Container>
    )
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
 }
 

export default PageWrapper
