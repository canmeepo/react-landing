import React from 'react';
import styled from 'styled-components';

const Block = styled.section`
  background-color: red;
  color: white;
`;
export default () =>
    (<section>
        <Block>
            <h1>Block</h1>
            <p>Block text</p>
        </Block>
        <Block>
            <h1>Block1</h1>
            <p>Block text1</p>
        </Block>
        <Block>
            <h1>Block2</h1>
            <p>Block text2</p>
        </Block>
    </section>);