import styled from 'styled-components';

export default function Card({ items, title }: { items: string[], title: string }) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>

      <StyledList>
      {items.map((item: string, index: number) => (
        <StyledListItem key={index}>{item}</StyledListItem>
      ))}
      </StyledList>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 2.4rem;
`;

const StyledList = styled.ul`
display: flex;
  flex-direction: column;

`;

const StyledListItem = styled.li`
  list-style: square;
`;
