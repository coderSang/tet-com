import { App, Component, provide, Ref, ref } from 'vue'

// 传入属性和默认属性合并
export const propsMerge = (
  d: Record<string, any>,
  p: Record<string, any> | undefined
) => {
  if (p) return { ...d, ...p }
  return d
}

// 注册组件
export const withInstall = (component: Component) => {
  ;(component as unknown as any).install = function (app: App) {
    app.component(component.name || 'default', component)
  }
  return component
}
// 注入方法
export const provideTETWrapper = (methodName: string) => {
  const wrapped = ref()
  wrapped.value = () =>
    console.warn(`Method ${methodName} has been invoked without being replaced`)

  const wrapper = (...args: any[]) => wrapped.value(...args)
  wrapper.wrapped = wrapped
  provide(methodName, wrapper)
  return wrapper
}

export const updateTETWrapper = <T>(
  wrapper: { wrapped: Ref<T> },
  tetMethod: T
) => {
  return (wrapper.wrapped.value = tetMethod)
}
