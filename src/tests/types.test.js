
import { types } from "../types/types";


describe('Pruebas en types', () => {
    test('should ser igual', () => {
        //const wrapper = shallow(types);
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesAddNew: '[Notes] New Note',
            notesActive: '[Notes] set Active Note',
            notesLoad: '[Notes] Load Notes',
            notesUpdated: '[Notes] Update Note Saved',
            notesFileUrl: '[Notes] Update Image URL',
            notesDelete: '[Notes] Delete Note',
            notesLogoutCleaning: '[Notes] Logout Cleaning'
        });
    })

})
