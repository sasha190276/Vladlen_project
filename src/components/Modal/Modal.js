import React from 'react';
import './Modal.scss';

export default class Modal extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { isOpen: false };
  //   }
  state = { isOpen: false };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>
        {isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p>I am awesome modal</p>
              <button type="button" onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
