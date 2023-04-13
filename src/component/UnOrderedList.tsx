import styled from "styled-components"
import { Text } from '../styles';

const List = ({rich_text}:any) => {
    return <>
        {rich_text.map((e:any) => <Text annotations={e.annotations}>{e.text.content}</Text>)}
    </>
}

function UnOrderedList({rich_text}:any) {
    return <div>
        <li>
            <List rich_text={rich_text}/>
        </li>
    </div>
}

export default UnOrderedList