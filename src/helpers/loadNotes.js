import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firabese-config";


export const loadNotes = async (uid) =>{


const q = query(collection(db, `${uid}/journal/notes`));

const notesSnapshot = await getDocs(q);
const notes = [];
notesSnapshot.forEach(note =>{
    notes.push({
        id: note.id,
        ...note.data()
    })
})
console.log(notes);
return notes;
    
}