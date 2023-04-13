import { Text } from '../styles';

const Texts = ({rich_text}:any) => {
    return <>
        {rich_text.map((e:any) => <Text annotations={e.annotations}>{e.text.content}</Text>)}
    </>
}

function Paragraph({rich_text}:any) {
    return(
        <div>
            <Texts rich_text={rich_text}/>
        </div>
    )
}

export default Paragraph