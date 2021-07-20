// import _ from 'lodash'

export function paginate (items, pageNr, pageSize) {
  const startIndex = (pageNr - 1) * pageSize
  // _(items).slice(startIndex).take(pageSize).value()
  // console.log(items.slice(startIndex, startIndex + pageSize));
  return items.slice(startIndex, startIndex + pageSize)
}