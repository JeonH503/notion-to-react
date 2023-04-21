import styled from 'styled-components';
export default styled.div<{color?:string}>`
    ${props => props.color && props.color.length > 11 ? `background:${props.color.replace("_background",'')}` : `color:${props.color}`};
`

