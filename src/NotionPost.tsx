import { Paragraph,Heading,Code,Divider,UnOrderedList,Table } from "./component";

const filter_block = (block:any,tables:any) => {
    switch(block.type) {
        case 'paragraph' :
            return <Paragraph rich_text={block.paragraph.rich_text}/>;
        case 'heading_1' :
        case 'heading_2' :
        case 'heading_3' :
        case 'heading_4' :
            return <Heading rich_text={block[block.type].rich_text} size={parseInt(block.type.replace('heading_',''))}/>;
        case 'divider' :
            return <Divider/>; 
        case 'code' :
            return <Code language={block.code.language} content={block.code.rich_text.length ? block.code.rich_text[0].text.content : ''} />
        case 'bulleted_list_item' :
            return <UnOrderedList rich_text={block.bulleted_list_item.rich_text}/>
        case 'table' :
            return <Table table_info={block.table} tables={tables[block.id]} id={block.id}></Table>   
    }
}

function NotionPost({blocks,tables}:any) {
    return <>
        {
            blocks.map((block: any) => filter_block(block,tables))
        }
    </>
}

export default NotionPost