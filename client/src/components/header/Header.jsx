import { AppBar, Toolbar, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        navigate('/account'); // Redirects to the login page
    };

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                {/* Add an onClick event to the Link */}
                <Link 
                    to="/account" 
                    onClick={(event) => {
                        event.preventDefault(); // Prevent default navigation behavior
                        logout(); // Call the logout function
                    }}
                >
                    LOGOUT
                </Link>
            </Container>
        </Component>
    );
};

export default Header;
