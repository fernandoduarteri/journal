import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import JournalEntries from './JournalEntries'

const Sidebar = () => {


    const { name } = useSelector(state => state.auht);
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(startLogout());
    }


const handleAddNew = ()=>{
    dispatch(startNewNote())
}
    return (
        <aside className="journal__sidebar">
            <div className="jorunal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="fa fa-moon"></i>
                    <span> { name }</span>
                </h3>
                <button onClick={handleLogout} className="btn">Log out</button>
            </div>
            <div className="journal__new-entry" onClick={ handleAddNew }>
                <i className="far fa-calendar-plus fa-3x"></i>
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}

export default Sidebar
