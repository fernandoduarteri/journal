import { db } from "../firebase/firabese-config";
import Swal from "sweetalert2";
import { addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";


//react_jorunal
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auht.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
        console.log(docRef);
        dispatch(activeNote(docRef.id, newNote));
        dispatch(addNewNote(docRef.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {id, ...note}
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: [...notes]
})

export const startSaveNote = (note) => {
    
    return async (dispatch, getState) => {
        const uid = getState().auht.uid;
        if (!note.url) {
            delete note.url
        }
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await updateDoc(doc(db, `${uid}/journal/notes`, note.id), noteToFirestore)
        dispatch(refreshNotes(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success');

    }
}

export const refreshNotes = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
}
)


export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading ...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }

        })
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auht.uid;
        await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));
        dispatch(deleteNote(id));

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})