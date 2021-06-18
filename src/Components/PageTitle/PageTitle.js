import React from 'react';
import {TitleWrapper, Title} from './PageTitleStyle';

const PageTitle = ({title}) => {
    return (
        <TitleWrapper>
            <Title>{title}</Title>
        </TitleWrapper>
            
    )
} 

export default PageTitle;