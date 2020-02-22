/* 

describe('descripción de')
caso de uso --> con it() o test()
mount() --> monta todo de los componentes se usa para test de integracion 
shallowMount()-> monta solo el componente y mockea el resto, se usa para test unitarios
setear data --> setData
setear props --> setProps
Expect()


import { shallowMount } from from '@vue/test-utils';
import { Component } from from '@/components/Component';

describe('suite descripcion', () => {
  it('test descripcion', () => {
    const wrapper = shallowMount(Component, {
      data: {
        message: 'Hola Mundo'
      }
    })
    // verificar que el mensaje se muestra
    expect(wrapper.vm.message).toEqual('Hola Mundo')
  })
})

describe('suite descripcion', () => {
  it('test descripcion', () => {
    const wrapper = shallowMount(Component)
    wrapper.setData({ message: 'Hola mundo'})
   
    // verificar que el mensaje se muestra
    expect(wrapper.vm.message).toEqual('Hola Mundo')
  })
})
 */