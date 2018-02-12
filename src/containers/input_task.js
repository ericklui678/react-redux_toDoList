import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/index';

class InputTask extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onInputSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onInputSubmit} className='input-group'>
          <input
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}/>
          <div className='input-group-append'>
            <button
              className='btn btn-secondary'
              type='submit'
              >Add task
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputTask);
