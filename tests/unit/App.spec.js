
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import fetch from '@/components/__mocks__/fetch';

global.fetch = fetch;



describe ('App', () => {
    const wrapper = shallowMount(App, {
        propsData: {
        index:0,
        launchRocket:false

    },
    })
    test('next function increments', () => {
        wrapper.vm.next()
        expect(wrapper.vm.index).toBe(1);
      })
      test('launch function works', () => {
        wrapper.vm.launch()
        expect(wrapper.vm.launchRocket).toBe(true);
      })
})
/*testing the API loader with a fake API */

describe ('App', () => {
    const wrapper = shallowMount(App, {
        propsData: {
        prompts:[]

    },
    })
    test('testing API fetcher with fake API, places API call in correct bin', () => {
        wrapper.vm.callingAPI('https://jsonplaceholder.typicode.com/todos/1')
        expect(wrapper.vm.prompts).not.toBe([]);
      })
})
describe ('App', () => {
    const wrapper = shallowMount(App, {
        propsData: {
        prompts:[]

    },
    })
    test('testing API fetcher, places API call in correct bin', () => {
        wrapper.vm.callingAPI(fetch)
        expect(wrapper.vm.prompts).not.toBe([]);
        console.log(fetch)
      })
})