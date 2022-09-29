import React from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

 const App = () => {
  	return (
      	<div className='App'>
			<div className='container'>
				<h1>ToDo List</h1>
				<InputField/>
				<TodoList/>
			</div>
    	</div>
  	);
}

export default App