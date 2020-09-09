import React from 'react';

import fs from 'fs';

import { 
    List
} from './style';

const Favorites = () => {
    function Read () {
        const file = fs.readFileSync('./src/data/favorites.json', 'utf-8');
        let content = JSON.parse(file);

        if(!content.msg) {

        } else {
            content = content.msg
        }

        return <ul>{ content }</ul>
    }

    return (
        <List>
            <br/>
            <span>Favorites: </span>
            <br/>
            { <Read/> }
        </List>
    )
}

export default Favorites;