import {numberInit, steps} from "../../core/step";
const listTot = Object.keys(steps).filter(step => {
    return steps[step].answers.reduce((acc, ele) => {
        return [...acc, ...(!acc.includes(ele.go) ? [ele.go] : [])]
    }, []).length > 1
});
const answersStep = steps[listTot].answers.map(ele => ele.go);
const getNumber = (currentStep, number, callback) => {
    const n = number + 1;
    if (currentStep.answers[0].go){
        getNumber(steps[currentStep.answers[0].go], n, callback)
    }
    else {
        callback(n)
    }
};

const listTotal = answersStep.reduce((acc, ele) =>{
    const callback = (n) =>{
        acc[ele] = n
    }
    getNumber(steps[ele], 0, callback)
    return acc
}, {})

const numberStep = Object.keys(listTotal).reduce((acc, ele)=>{
    return acc > listTotal[ele] ? acc : listTotal[ele]
}, 0) + numberInit




const state = {
    steps: steps,
    currentStep: steps.gp, // starter
    points: 0,
    tags: [],
    answers: [],
    listTot: listTotal,
    numberSteps: numberStep,
    registerShow: false,
};

export default state;