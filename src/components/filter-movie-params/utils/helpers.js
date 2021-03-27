import _ from 'lodash'

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
