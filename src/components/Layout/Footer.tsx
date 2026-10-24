import styled from 'styled-components';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <StyledFooter className='footer'>
            <span>&copy; {year} Velouria. Todos os direitos reservados.</span>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    padding: 1rem;
    text-align: center;
`;
