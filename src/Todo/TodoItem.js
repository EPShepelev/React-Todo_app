import React from 'react'
import PropTypes from 'prop-types'


const styles = {
  li:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
    border: '3px solid black',
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  input:{
    marginRight: '10px'
  }
}

 function TodoItem ({todo, index, onChange}){
   const classes = []
   if (todo.completed){
     classes.push('done')
   }
  return (
  <li style={styles.li}>
    <span className={classes.join(' ')}>
      <input 
      style={styles.input} 
      type='checkbox' 
      checked={todo.completed}
      onChange={()=> onChange(todo.id)}
      />
      <strong>{index + 1}</strong>
      &nbsp;
      {todo.title}
    </span>
    <button className='rm'>&times;</button>
  </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem