const actions = {
    setCurrentStep: (context, payload) => {
        context.commit('SET_CURRENT_STEP', context.state.steps[payload])
    },
}

export default actions