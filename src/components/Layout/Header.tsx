import styled from 'styled-components';

import Link from '../Link';

export default function Header() {
    const items = [
        ['/', 'Velouria'],
        ['#/', 'Home'],
        ['#/equipe', 'Equipe'],
        ['#/fale-conosco', 'Contato'],
        ['#/sobre', 'Sobre'],
        ['#/swot', 'S.W.O.T'],
        ['#/parceiros', 'Parceiros'],
        ['#/curricularizacao', 'Curricularização da Extensão'],
    ];

    return (
        <StyledHeader>
            <StyledLink href='/'>Velouria</StyledLink>
            <StyledList>
                {items.map(([href, value], index) => (
                    <li key={index}>
                        <StyledListItem href={href}>{value}</StyledListItem>
                    </li>
                ))}
            </StyledList>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 4rem;
    padding: 1rem;
    justify-content: space-between;
    width: 100%;
`;

const StyledLink = styled(Link)`
    color: '#BFACB5' ;
    font-size: 2rem;
    font-style: italic;
`;

const StyledList = styled.ul`
    display: flex;
    gap: 1rem;
`;

const StyledListItem = styled(Link)`
    color: '#E5D0CC';

    &:active {
        color: '#E5D0CC';
    }

    &:hover {
        color: '#E5D0CC';
    }

    &:link {
        color: '#E5D0CC';
    }

    &:visited{
        color: '#E5D0CC';
    }
`;
