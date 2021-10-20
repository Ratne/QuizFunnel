<template>
  <div class="row">
    <div class="col-sm-12 col-md-8 offset-md-2">
      <div class="contentQuiz">
          <div v-if="currentStep">
            <Bar :current="currentAnswers.length" :max="currentMaxStep" />
            <div class="quizQuestions">
              <h1>{{currentStep.title}}</h1>
              <h4>{{currentStep.subtitle}}</h4>
            </div>
              <ul>
              <li class="answerItem" v-for="answer in currentStep.answers" @click="nextQuestion(answer)">
                <span class="check"></span>
                <span class="answer">{{answer.label}}</span></li>
            </ul>
      </div>
          </div>
    </div>
  </div>
</template>

<script>
import actionsType from "../store/steps/actionsType";
import Bar from "./Bar";

export default {
  name: 'CurrentStepView',
  components: {Bar},
  computed:{
    currentStep(){
     return this.$store.getters.getCurrentStep
    },
    points(){
      return this.$store.getters.getPoints
    },
    currentAnswers(){
      return this.$store.getters.getAnswers
    },
    currentTags(){
      return this.$store.getters.getTags
    },
    currentMaxStep(){
      return this.$store.getters.getNumberSteps
    }
  },
  methods:{
    nextQuestion(answer){
      this.$store.dispatch(actionsType.answerManagement, {answer, subtitle: this.currentStep.subtitle})
    }
  }
}
</script>

<style scoped lang="scss">
</style>
