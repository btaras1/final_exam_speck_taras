import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px 9px #d3d3d3;
    border-radius: 4px;
    margin: 20px auto 10px;
`;
export const Header = styled.div `
    background-color : ${props => props.isAdmin ? '#94cf85' : '#83a5cf'};
    text-align:center;
    font-weight: bold;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
`;

export const FirstName = styled.div`
font-weight: bold;
margin: 10px auto 10px 8px;
`;

export const LastName = styled.div`
font-weight: bold;
margin: 10px 8px 10px auto;
`;
export const Email = styled.div`
font-weight: bold;
margin: 5px auto 10px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
    margin: 8px auto;
    font-size 16px;
    color: #ffffff;
`;