import styled from "styled-components";

export const Container  = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const Flex = styled.div`
    display: flex;
    align-items: ${({alignItems}) => alignItems || 'center'};
    justify-content: ${({justifyContent}) => justifyContent || 'center'};
    flex-direction: ${({flexDirection}) => flexDirection || 'row'};
    row-gap: ${({rowGap}) => rowGap || '0px'};
    column-gap: ${({columnGap}) => columnGap || '0px'};
    flex-wrap: ${({flexWrap}) => flexWrap || 'no-wrap' };
`;

export const FlexUL = styled.ul`
    list-style-type: none;
`;