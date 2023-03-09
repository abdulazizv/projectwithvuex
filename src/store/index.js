import {createStore} from 'vuex'
import {login} from "./modules/admin/login"
import {signup} from "./modules/admin/signup"

export const store = createStore({
    modules: {
        login,
        signup,
    }
})
