// src/Table.js

import React from 'react';

const Table = (props) => {
    const {characterData, removeCharacter} = props;
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
    
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
         <tr key={index}>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
         </tr>
       );
    });
    return <tbody>{rows}</tbody>;
}

export default Table;