import { Image,Paragraph,Heading,Code,Divider,UnOrderedList,Table, Bookmark, Callout, Video, Quote } from "./component";
import { Block,FirstBlock } from "./types/block";

type Tables = {[key:string]:FirstBlock}

interface Props {
    blocks:FirstBlock;
    tables?:Tables
}

const filter_block = (block:Block,tables?:Tables) => {
    if(block.type === 'bookmark' && block.bookmark)
        return <Bookmark url={block.bookmark.url} caption={block.bookmark.caption}/>;
    else if(block.type === 'paragraph' && block.paragraph)
        return <Paragraph color={block.paragraph.color} rich_text={block.paragraph.rich_text}/>;
    else if(block.type === 'heading_1' && block.heading_1)
        return <Heading color={block.heading_1.color} rich_text={block.heading_1.rich_text} size={1}/>;
    else if(block.type === 'heading_2' && block.heading_2)
        return <Heading color={block.heading_2.color} rich_text={block.heading_2.rich_text} size={2}/>;
    else if(block.type === 'heading_3' && block.heading_3)
        return <Heading color={block.heading_3.color} rich_text={block.heading_3.rich_text} size={3}/>;
    else if(block.type === 'divider' && block.divider)
        return <Divider/>; 
    else if(block.type === 'bulleted_list_item' && block.bulleted_list_item)
        return <UnOrderedList color={block.bulleted_list_item.color} rich_text={block.bulleted_list_item.rich_text}/>
    else if(block.type === 'numbered_list_item' && block.numbered_list_item)
        return <UnOrderedList color={block.numbered_list_item.color} rich_text={block.numbered_list_item.rich_text}/>
    else if(block.type === 'image' && block.image) {
        if(block.image.type === 'file')
            return <Image caption={block.image.caption} url={block.image.file.url}/>
        else if(block.image.type === 'external')
            return <Image caption={block.image.caption} url={block.image.external.url}/>
    }
    else if(block.type === 'code' && block.code)
        return <Code language={block.code.language} rich_text={block.code.rich_text} caption={block.code.caption} />
    else if(block.type === 'callout' && block.callout)
        return <Callout rich_text={block.callout.rich_text} icon={block.callout.icon} color={block.callout.color}/>
    else if (block.type === 'video' && block.video){
        if(block.video.type === 'file')
            return <Video type='file' caption={block.video.caption} url={block.video.file.url}/>
        else if(block.video.type === 'external')
            return <Video type='external' caption={block.video.caption} url={block.video.external.url}/>
    } else if(tables && block.type === 'table' && block.table) {
        return <Table table_info={block.table} tables={tables[block.id]} />
    } else if(block.type === 'quote' && block.quote)
        return <Quote rich_text={block.quote.rich_text} color={block.quote.color}/>
}

function NotionPost({blocks,tables}:Props) {
    return <>
        {
            Array.isArray(blocks.results) ? blocks.results.map((block: Block) => filter_block(block,tables)) : null
        }
    </>
}

export default NotionPost