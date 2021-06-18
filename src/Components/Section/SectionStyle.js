import styled from 'styled-components';

export const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    @media screen and (min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

