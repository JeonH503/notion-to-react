import styled from 'styled-components';
export default styled.div<{color?:string}>`
    ${props => props.color && props.color.length > 11 ? `background:var(--${props.color})` : `color:(--${props.color})`};
`

