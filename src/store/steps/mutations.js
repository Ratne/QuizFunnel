const mutations = {
    SET_CURRENT_STEP: (state, payload) =>  state.currentStep = payload,
    ADD_TAG: (state, payload) => state.tags = [...state.tags, payload],
    ADD_ANSWER: (state, payload) => state.answers = [...state.answers, payload],
    ADD_POINTS: (state, payload) => state.points = state.points + (+payload),
    SET_NUMBER_STEPS: (state, payload) => state.numberSteps = payload,
    SET_REGISTER_SHOW: (state, payload) => state.registerShow = payload
}

export default mutations;