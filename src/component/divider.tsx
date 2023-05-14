import styled from "styled-components"
import { Block } from "../styles"
const DividerWrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height:13px;
`
const DividerDiv = styled.div`
    height:1px;
    border-bottom:1px solid rgba(55, 53, 47, 0.16);
    width:100%;
`

function Divider() {
    return <Block>
        <DividerWrap>
            <DividerDiv/>
        </DividerWrap>
    </Block>
}

export default Divider