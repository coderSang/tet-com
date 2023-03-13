import { App, Component, provide, ref } from 'vue'

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
  const wrapped = ref(() =>
    console.warn(`Method ${methodName} has been invoked without being replaced`)
  )
  const wrapper = (...args) => wrapped.value(...args)
  // eslint-disable-next-line vue/no-ref-as-operand
  wrapper.wrapped = wrapped
  provide(methodName, wrapper)

  return wrapper
}
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
// type FunctionParamsType = MyParameters<typeof foo>
// 更新
export const updateTETWrapper = (
  wrapper: {
    wrapped: { value: any }
  },
  tetMethod: any
) => (wrapper.wrapped.value = tetMethod)
