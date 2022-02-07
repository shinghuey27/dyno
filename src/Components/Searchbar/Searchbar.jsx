import React from 'react';
import Label from '../Label/Label';
import List from '../List/List';
import Textbox from '../Textbox/Textbox';

const data = [1, 2, 3, 4]
const dataobj = [
    {
        title: 'I am legend',
        artist: 'Will Smith'
    }
    , {
        title: 'The Dark Knight',
        artist: 'Bale'
    }, {
        title: 'Edge of Tomorrow',
        artist: 'Cruise'
    },
    {

    }
]

export default function Searchbar(props) {
    const { label, text, description, error, listBox, item, renderItem } = props;
    return (
        <>
            <Textbox
                label
                text
                description
                error
            />
            <div style={{ position: 'relative' }}>
                <List data={dataobj} listBox item
                    renderItem={el => {
                        if (el.length > 0) return <div>{el?.title}</div>
                        else return renderItem(el)
                    }} />
            </div>


        </>);
}
