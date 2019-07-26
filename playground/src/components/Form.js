import React, { useState } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { addTask } from '../store/actions/actions';


const Form = (props) => {
  // const state = {
  //   tasks: [
  //     { task: 'task1' },
  //     { task: 'task2' },
  //     { task: 'task3' }
  //   ],
  //   value: ''
  // }

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([
    { task: 'task1' },
    { task: 'task2' },
    { task: 'task3' }
  ])


  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = () => {
    // console.log(value);

    props.onAddTask(value)
    // console.log(props.onAddTask(value));


  }

  const onDelete = (i) => {
    setTasks(

      tasks.filter((item, j) => i !== j)
    )
  }



  return (
    <div>
      {props.tasks.map((item, index) => <Item key={index} task={item.task} onDelete={() => onDelete(index)} />)}
      <p>{value}</p>
      <input value={value} type="text" onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )

}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    value: state.value
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (value) => dispatch(addTask(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
