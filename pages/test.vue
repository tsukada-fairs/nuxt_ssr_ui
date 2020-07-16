<template>
  <div>
    <div style="width: 600px; height:300px; border:1px solid #afc45d">
      <div v-for="(interviewPage, index) in interviewSheet.interview_pages" :key="index">
        <h1>{{interviewPage.section}}</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({app}) {
    // const url = "http://api:8000/api/interview";
    // // リクエスト（Get）
    // const response = await app.$axios.$get(url);
    // return {
    //   interviewSheet: response
    // }
  },
  mounted() {
    const prepareProcess = async () => {
      await this.getInterviewSheet()
    }
    prepareProcess()
    console.log(this.interviewSheet)
  },
  computed: {
    interviewSheet: function() {
      return this.$accessor.interviewSheet.data;
    }
  },
  methods: {
    getInterviewSheet: async function() {
      await this.$accessor.interviewSheet.getInterviewSheet();
    }
  }
})
</script>