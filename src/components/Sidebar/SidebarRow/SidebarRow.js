import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected, text, Icon}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__text">{text}</h2>
        </div>
    )
}

export default SidebarRow;
