import React from 'react'
import "./Taskbar.css";
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';             
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
function Taskbar() {
    return (
        <div className="Taskbar">
            <div className="search-div">
                <SearchIcon className="search-icon icon" fontSize="small"/>
                <input type="text" className="search-input" placeholder="Search" name="search-input" id="search-input"/>
            </div>

            <div className="action-btns">
                <SignalCellularAltIcon className="signal-icon icon"/>
                <MailOutlineIcon className="mail-icon icon"/>
                
            </div>

        </div>
    )
}

export default Taskbar
