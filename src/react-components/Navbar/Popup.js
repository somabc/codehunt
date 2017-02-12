import React from 'react';

class Popup extends React.Component {
  render() {
    return(
      <section className="popup">
        <section className="popup-wrap">
          <img src="/img/close.png"/ onClick={this.props.hidePopup}/>
        </section>
        <section className={"popup-content " + this.props.style}>
          <section>{this.props.children}</section>
        </section>
    );
  }

    render() {
      <section>
      {
        this.props.status? this renderPopupContent() : null
      }
      </section>
    );
  }
}

export default Popup;
