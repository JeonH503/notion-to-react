import { Block } from "../styles"
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import styled from "styled-components";

const EquationWrap = styled(Block)`
    text-align:center;
    padding: 20px 0;
`

function Equation({expression}:{expression:string}) {
    return <EquationWrap>
        <InlineMath math={expression} />
    </EquationWrap>
}

export default Equation