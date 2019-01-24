import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodosActions from './store/actions/todos';

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      { todos.map( todo => <li key={ todo.id }>{ todo.text }</li> ) }
    </ul>

    <button onClick={ () => addTodo('New todo') }> Add Todo </button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
