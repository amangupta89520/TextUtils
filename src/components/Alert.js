import { useState } from "react";
import { StyledAlert } from "./styles/Alert.styled";
import { Flex } from "./styles/Utils";
import PropTypes from 'prop-types';

const Alert = ({ content }) => {

    return (
        <>
            <Flex>
                <StyledAlert>
                    <Flex justifyContent="flex-start">
                        <span>{content}</span>
                    </Flex>
                </StyledAlert>
            </Flex> 
        </>
    );
}
 
export default Alert;

Alert.propTypes = {
    content: PropTypes.string.isRequired
}

Alert.defaultProps = {
    content: 'alert'
}