import { getAccessorType } from 'typed-vuex'

import * as interviewSheet from './interviewSheet'

export const state = () => ({
  //
})

export const getters = {
  //
}

export const mutations = {
  //
}

export const actions = {
  // 
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // import したサブモジュールはここに記述します。
    interviewSheet,
  },
})
