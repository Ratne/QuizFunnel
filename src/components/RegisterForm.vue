<template>
  <div class="col-sm-12 col-md-8 offset-md-2">
    <div class="form-group mt-2 mb-2">
          <div class="contentQuiz">
            <div class="quizQuestions">
              <h1>Headline</h1>
              <h4>Subheadline</h4>
            </div>
            <form @submit.prevent="submitForm">
            <FormGroupCustom :error="errors['name']" v-model:value="user.name" placeholder="Nome" type="text"></FormGroupCustom>
            <FormGroupCustom :error="errors['email']" v-model:value="user.email" placeholder="Email" type="text"></FormGroupCustom>
            <button class="submitQuiz" type="submit"><span>SEND</span></button>
            </form>

          </div>
    </div>
  </div>
</template>

<script>
import FormGroupCustom from "./shared/form/FormGroupCustom";
import {validationMixin} from "../mixins/validationMixin";
import {validationTypeName} from "../utils/validationType";


export default {
  name: "RegisterForm",
  data(){
    return {
      user: {},
      validazione: [
        {
          name: 'name',
          validation: {
            type: validationTypeName.required,}
        },
        {
          name: 'email',
          validation: {
            type: validationTypeName.required,}
        },
        {
          name: 'email',
          validation:
              {type: validationTypeName.email}
        },
      ]
    }
  },
  components: {FormGroupCustom},
  mixins: [validationMixin],

  computed:{
    allValidations(){
      return [...this.validazione]

    }
  },
  methods:{
    submitForm(){
      if (this.isValid(this.user)){
        const points = this.$store.getters.getPoints
         const data = {
           user: this.user,
           answers: this.$store.getters.getAnswers,
           points,
           tags: this.$store.getters.getTags,
         }
         fetch('https://URL.com',
             { headers: {
                 'Content-Type': 'application/json'
               }, method:'POST' ,body: JSON.stringify(data)}).then(res =>{

           const point = [
             {max: 69, min:0, url: 'https://www.pnquiz.com/esito-punteggio-1/'},
             {max: 84, min:70, url: 'https://www.pnquiz.com/esito-punteggio-2/'},
             {max: 94, min:85, url: 'https://www.pnquiz.com/esito-punteggio-3/'},
             {max: 1000, min:95, url: 'https://www.pnquiz.com/esito-punteggio-4/'}

           ]
            const url = point.find(ele => {
             return points > ele.min && points < ele.max
            })

           window.top.location.href = url.url;



         })
      }
      else {

      }
    }
  },
}
</script>

<style lang="scss" scoped>
.submitQuiz{
    background-color: #ffffff;
    border:none;
    width: 100%;
    color: white;
    list-style: none;
    padding: 20px;
    box-shadow: 0 1px 23px 1px rgba(0, 0, 0,  0.07), inset 4px 0 0 0 rgba(157, 120, 254,  0.5);
    border-top-right-radius: 10px ;
    border-bottom-left-radius: 10px;
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-image: linear-gradient(to right, #9e78ff, #8daafc);

  &:hover{
    box-shadow: 0 18px 23px 1px rgba(0, 0, 0,  0.22);
  }
}
</style>