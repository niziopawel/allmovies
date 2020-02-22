import _ from 'lodash'

//array=[{id, name}, {}]
//array=[1,2,3,4]
export const mapArrayToDropdownOptions = array => {
  if (Object.prototype.hasOwnProperty.call(array[0], 'id')) {
    return array.map(item => ({
      key: item.id,
      text: item.name,
      value: item.id
    }))
  }

  return array.map(item => ({
    key: _.uniqueId('item_'),
    text: item,
    value: item
  }))
}
