import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledNav } from './styles/Navbar.styled';
import { Container, Flex, FlexUL } from './styles/Utils';

const Navbar = (props) => {

    return (
        <StyledNav className="navbar navbar-expand-lg bg-light">
            <Container className="container-fluid">
                <Flex justifyContent='flex-start' columnGap='40px'>
                    <h1><Link to='/'>{props.title}</Link></h1>
                    <FlexUL>
                        <li><Link to='/about'>{props.aboutText}</Link></li>  
                    </FlexUL>
                    <img src="/mode.svg" alt="change-mode" onClick={props.toggleMode} />
                </Flex>
            </Container>
        </StyledNav>
    );
}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'About Us'
}



