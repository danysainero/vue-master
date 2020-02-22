import { shallowMount } from  '@vue/test-utils';
import SearchInput from  '@/components/SearchInput';

describe('search Input ', () => {
  it('text Input', () => {
    const wrapper = shallowMount(SearchInput)

    wrapper.setData({ searchText: 'Harry'})
   
    // verificar que el mensaje se muestra
    expect(wrapper.vm.searchText).toEqual('Harry')
  })
})