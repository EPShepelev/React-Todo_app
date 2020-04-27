import React from 'react'
import PropTypes from 'prop-types'


const styles = {
  li:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
    border: '3px solid darkgreen',
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  input:{
    marginRight: '10px'
  }
}

 function TodoItem ({todo, index}){
  return (
  <li style={styles.li}>
    <span>
      <input style={styles.input} type='checkbox'/>
      <strong>{index + 1}</strong>
      {todo.title}
    </span>
    <button>&times;</button>
  </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem