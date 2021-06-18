import React from 'react';
import {Wrapper, Header, FirstName, LastName, Email,Row, HeaderTitle} from './UserCardStyle';

const UserCard = ({isAdmin, firstName, lastName, email}) => {
    return (
        <Wrapper>
            <Header isAdmin={isAdmin}><HeaderTitle>{isAdmin ? "Admin" : "Student"}</HeaderTitle></Header>
            <Row>            
                <FirstName>{firstName}</FirstName>
                <LastName>{lastName}</LastName>
            </Row>
            <Email>{email}</Email>
        </Wrapper>
    )
} 

export default UserCard;