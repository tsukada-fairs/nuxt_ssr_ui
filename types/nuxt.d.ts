import Vue from 'vue'
import { Store } from 'vuex'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface V extends Vue {
    $axios: NuxtAxiosInstance
  }
  interface NuxtContext<V> {
    app: V,
    isClient: boolean,
    isServer: boolean,
    isStatic: boolean,
    isDev: boolean,
    store: Store<any>,
    env: object,
    params: object,
    query: object
  }

  interface ComponentOptions<V> {
    asyncData?(context: NuxtContext<V>): Promise<object> | object
    fetch?(context: NuxtContext<V>): Promise<object> | object
  }
}