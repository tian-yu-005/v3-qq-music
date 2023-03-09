export const Maps = (imgs: any) => {
  let maps = {} as { [imgName: string]: string }
  for (const key in imgs) {
    // splice(-1) 倒数 1 位
    const imgName = key.split('/').splice(-1)[0].split('.')[0]
    maps[imgName] = imgs[key].default
  }
  return maps
}