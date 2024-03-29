import React from 'react'
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {

    const {notes} = useSelector(state => state.notes);
    console.log("Notas: " , notes);
    return (
        <div className="jorunal__entries">
            {
                
                notes.map(note =>(
                    <JournalEntry key={note.id} note={note}/>
                ))
            }
        </div>
    )
}

export default JournalEntries
