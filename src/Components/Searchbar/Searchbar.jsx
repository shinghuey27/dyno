import React from 'react';
import Label from '../Label/Label';
import List from '../List/List';
import Textbox from '../Textbox/Textbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
            <div style={{ display: 'flex', }}>
                <Textbox
                    label={label}
                    text={{
                        style: {
                            // border: 0 
                        }
                    }}
                    description={description}
                    error
                />
                <div >
                    <KeyboardArrowDownIcon style={{ marginTop: 40 }} />
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <List data={dataobj} listBox item
                    renderItem={el => renderItem(el)} />
            </div>


        </>);
}
