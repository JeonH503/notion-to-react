import styled from 'styled-components';
export default styled.div<{color?:string}>`
    ${props => props.color && `background:${props.color.replace("_background",'')}`};
`

