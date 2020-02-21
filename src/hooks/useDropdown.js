import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

const useDropdown = (
  label,
  defaultState,
  options,
  multiple,
  search,
  selection
) => {
  const [state, setState] = useState(defaultState)
  // const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`
  const stateOptions = options.map(item => ({
    key: item,
    text: item,
    value: item
  }))

  const CustomDropdown = () => (
    <Dropdown
      placeholder={label}
      fluid
      multiple={multiple}
      search={search}
      selection={selection}
      options={stateOptions}
    />
  )
  return [state, CustomDropdown, setState]
}

export default useDropdown
