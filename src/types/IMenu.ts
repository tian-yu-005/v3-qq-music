
interface IMenuMeta {
  icon: string
  size: string
  title: string
  path: string
  name: string
}
interface IMenu {
  tag: string
  children: IMenuMeta[]
}
export type {
  IMenuMeta,
  IMenu
}