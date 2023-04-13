import { Paragraph,Heading,Code,Divider,UnOrderedList,Table } from "./component";
import { Blocks, Block } from "./types/block";
import { Tables } from "./types/table";
const filter_block = (block:Block,tables:Tables) => {
    // switch(block.type) {
    //     case 'paragraph' :
    //         return <Paragraph rich_text={block.paragraph.rich_text}/>;
    //     case 'heading_1' :
    //     case 'heading_2' :
    //     case 'heading_3' :
    //     case 'heading_4' :
    //         return <Heading rich_text={block[block.type].rich_text} size={parseInt(block.type.replace('heading_',''))}/>;
    //     case 'divider' :
    //         return <Divider/>; 
    //     case 'code' :
    //         return <Code language={block.code.language} content={block.code.rich_text.length ? block.code.rich_text[0].text.content : ''} />
    //     case 'bulleted_list_item' :
    //         return <UnOrderedList rich_text={block.bulleted_list_item.rich_text}/>
    //     case 'table' :
    //         return <Table table_info={block.table} tables={tables[block.id]} id={block.id}></Table>   
    // }
    if(block.type === 'paragraph' && block.paragraph)
        return <Paragraph rich_text={block.paragraph.rich_text}/>;
    else if(block.type === 'heading_1' && block.heading_1)
        return <Heading rich_text={block.heading_1.rich_text} size={1}/>;
    else if(block.type === 'heading_2' && block.heading_2)
        return <Heading rich_text={block.heading_2.rich_text} size={2}/>;
    else if(block.type === 'heading_3' && block.heading_3)
        return <Heading rich_text={block.heading_3.rich_text} size={3}/>;
    else if(block.type === 'divider' && block.heading_3)
        return <Divider/>; 
    else if(block.type === 'bulleted_list_item' && block.bulleted_list_item)
        return <UnOrderedList rich_text={block.bulleted_list_item.rich_text}/>
    else if(block.type === 'code' && block.code)
        return <Code language={block.code.language} content={block.code.rich_text.length ? block.code.rich_text[0].text.content : ''} />
    else if(block.type === 'table' && block.table)
        return <Table table_info={block.table} tables={tables[block.id]} id={block.id}></Table> 

}

function NotionPost({blocks,tables}:{blocks:Blocks, tables:Tables}) {
    return <>
        {
            blocks.results.map((block: Block) => filter_block(block,tables))
        }
    </>
}

export default NotionPost