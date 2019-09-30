import { createLocalVue } from '@vue/test-utils'
import Header from '@/components/Header.vue';
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)



describe ('Header', () => {
    const wrapper= shallowMount(Header)
    test('renders correctly', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.element).toMatchSnapshot()
      })
  
    it('Displays title Text', () =>{
        expect(wrapper.find('[data-test="laika_title"]').text()).toEqual(
            'Laika: A Space Adventure')
        })
 })
