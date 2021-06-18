import React from 'react';
import {Wrapper} from './SectionStyle';

const Section = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>    )
} 

export default Section;