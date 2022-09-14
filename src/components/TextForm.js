import { StyledTextForm, StyledTextSummary } from "./styles/TextForm.styled";
import { Container, Flex } from "./styles/Utils";
import PropTypes from 'prop-types';
import { StyledButton } from "./styles/Button.styled";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useEffect } from "react";

const TextForm = ({ heading, fireAlert }) => {

    const [text, setText] = useState('');

    useEffect(() => {
        document.title = 'TextUtils | Home';
    });

    const handleUppercase = () => {
        if(text.trim()) {
            fireAlert('Text uppercased!!');
            setText((prevText) => {
                return prevText.toUpperCase();
            })
        }
    }

    const handleLowercase = () => {
        if(text.trim()) {
            fireAlert('Text lowercased!!');
            setText((prevText) => {
                return prevText.toLowerCase();
            })
        }
    }

    const handleExtraSpaces = () => {
        if(text.trim()) {
            fireAlert('Extra spaces removed successfully!!');
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
        }
    }

    const handleChange = (e) => {
        if(text.length > 0 || e.target.value.trim()) {
            setText(e.target.value)
        }
    }

    const handleCopy = () => {
        fireAlert('Text Copied!!');
    }

    return (
        <Container>
            <StyledTextForm>
                <Flex flexDirection='column' alignItems='flex-start' className="content">
                    <Flex justifyContent='space-between' className="top">
                        <h2>{heading}</h2>
                        <Flex columnGap="14px" rowGap="14px">
                            {text.trim() && <StyledButton onClick={() => setText('')}>Clear Text</StyledButton>}
                            {text.trim() && <CopyToClipboard text={text} onCopy={handleCopy}>
                                <StyledButton disabled={text.trim().length > 0? false : true}>Copy Text</StyledButton>
                            </CopyToClipboard>}
                        </Flex>
                    </Flex>
                    <textarea value={text} onChange={handleChange} />
                    <Flex flexWrap="wrap" columnGap="14px" rowGap="14px" justifyContent="flex-start">
                        <StyledButton onClick={handleUppercase} disabled={text.trim().length > 0? false : true}>Convert to Uppercase</StyledButton>
                        <StyledButton onClick={handleLowercase} disabled={text.trim().length > 0? false : true}>Convert to Lowercase</StyledButton>
                        <StyledButton onClick={handleExtraSpaces} disabled={text.trim().length > 0? false : true}>Remove Extra Spaces</StyledButton>
                    </Flex>
                </Flex>
            </StyledTextForm>
            {text.trim() && <StyledTextSummary>
                <Flex flexDirection='column' alignItems='flex-start' className="content">
                    <h2>Your text summary</h2>
                    <ul>
                        <li><b>No. of Characters (including spaces): </b>{text.trim().length}</li>
                        <li><b>No. of Words: </b>{text.trim()? text.trim().split(/\s+/).length : 0}</li>
                        <li>{text.trim()? Math.round((text.trim().split(' ').length * 0.25) / 60) : 0} <b>Minutes read</b></li>
                    </ul>
                </Flex>
            </StyledTextSummary>}
        </Container>
    );
}
 
export default TextForm;

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Enter your text here'
}