import { shallowMount } from  '@vue/test-utils';
import Login from  '@/views/Login';

describe('login form', () => {
    it('username && password not null', () => {
      const wrapper = shallowMount(Login)
  
      wrapper.setData({ username: 'Harry'})
      wrapper.setData({ password: '12345'})
     
      // verificar que el mensaje se muestra
      expect(wrapper.vm.username).toEqual('Harry')
      expect(wrapper.vm.password).toEqual('12345')
    })

    it('username && password null', () => {
        const wrapper = shallowMount(Login);
        wrapper.setData({ username: ''})
        wrapper.setData({ password: ''})
        
        const spy = spyOn(wrapper.vm, "handleLogin");    
        wrapper.find(".login__button").trigger('click');
      
       
        // verificar que el mensaje se muestra
        expect(wrapper.vm.handleLogin).not.toBeCalled();
      })
  })