import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

const CustomDropdown = ({
  label,
  name,
  placeholder,
  options,
  multiple,
  search,
  selection,
  defaultOption,
  onSelectChange,
  size
}) => {
  const [dropdownState, setDropdownState] = useState(defaultOption)

  const handleChange = (e, data) => {
    setDropdownState(data.value)
    onSelectChange(data.name, data.value)
  }
  return (
    <div className={`dropdown-container ${size ? `${size}` : ''} `}>
      <span>{label}</span>
      <Dropdown
        name={name}
        value={dropdownState}
        disabled={!options}
        placeholder={placeholder}
        fluid
        multiple={multiple}
        search={search}
        selection={selection}
        options={options}
        onChange={handleChange}
      />
    </div>
  )
}

export default CustomDropdown
