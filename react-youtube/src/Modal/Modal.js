// @ts-check
import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>Open modal</button>
        { this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal title</h1>
              <div>Modal body</div>
              <button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}