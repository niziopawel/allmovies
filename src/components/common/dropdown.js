import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './dropdown.scss'

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
  const [state, setState] = useState(defaultOption)

  const handleChange = (e, data) => {
    setState(data.value)
    onSelectChange(data.name, data.value)
  }
  return (
    <div className={`dropdown-container ${size ? `${size}` : ''} `}>
      <span>{label}</span>
      <Dropdown
        name={name}
        value={state}
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
