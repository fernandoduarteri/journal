import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
const JournalEntry = ({ note}) => {
    
    moment.locale('es');
    const dispatch = useDispatch();

    const handleEntryClick = () =>{
        dispatch( activeNote(note.id, note));
    }
    return (
        <div className="journal__entry pointer" onClick={ handleEntryClick }>
            {note.url && <div className="jorunal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ note.url})`
                }}>

            </div>}

            <div className="journal__body">
                <p className="jorunal__entry-title">
                   {note.title}
                </p>
                <p className="jorunal__entry-content">
                    { note.body}
                </p>
            </div>

            <div className="journal__entry-date-box">

                <span>{ moment(note.date).format('dddd')}</span>
                <h4>{ moment(note.date).format('D')}</h4>
            </div>
        </div>
    )
}

export default JournalEntry
