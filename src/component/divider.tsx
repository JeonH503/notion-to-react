import styled from "styled-components"

const DividerWrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height:13px;
`
const DividerDiv = styled.div`
    height:1px;
    border-bottom:1px solid black;
    width:100%;
`

function Divider() {
    return <DividerWrap>
        <DividerDiv/>
    </DividerWrap>
}

export default Divider