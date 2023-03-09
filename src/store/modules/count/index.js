const count = {
    state: () => ({
        number
    }),

    mutations: {
        INC(state) {
            state.number++
        },
        DECR(state) {
            state.number--
        },
        RESET(state) {
            state.number = 0
        },
    },
    actions: {

    },
    getters: {
        doubleCount(state) {
            state.number += 10
        }
    }

}


export default count