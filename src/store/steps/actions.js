import actionsType from "./actionsType";
import {numberInit} from "../../core/step";

const actions = {
    [actionsType.answerManagement]: (context, {answer, subtitle}) => {
     if (answer.go) {
         context.dispatch(actionsType.setCurrentStep, answer.go);
         Object.keys(context.state.listTot).includes(answer.go) && context.dispatch(actionsType.setAnswerSteps, answer.go);
     }
     else {
         context.dispatch(actionsType.setRegisterShow, true)
     }
     context.dispatch(actionsType.addPoints, answer.point);
     answer.tag && context.dispatch(actionsType.addTag, answer.tag);
     context.dispatch(actionsType.addAnswer, {answer: answer.label , subtitle});

    }
    ,
    [actionsType.setCurrentStep]: (context, payload) => {
        context.commit('SET_CURRENT_STEP', context.state.steps[payload])
    },
    [actionsType.addPoints]:  (context, payload) => {
        context.commit('ADD_POINTS', payload)
    },
    [actionsType.addAnswer]:  (context, payload) => {
        context.commit('ADD_ANSWER', payload)
    },
    [actionsType.addTag]:  (context, payload) => {
        context.commit('ADD_TAG', payload)
    },
    [actionsType.setAnswerSteps]: (context, payload) => {
        const data = numberInit + context.state.listTot[payload]
        context.commit('SET_NUMBER_STEPS', data)
    },
    [actionsType.setRegisterShow]: (context,payload) => {
        context.commit('SET_REGISTER_SHOW', payload)
    }
}

export default actions