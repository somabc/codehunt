import React from 'react';

class Popup extends React.Component {
  render() {
    return(
      <section className="popup">
        <section className="popup-wrap">
          <img src="/img/close.png"/>
        </section>
        <section className="popup-content">
          <section>POPUP CONTENT</section>
        </section>
    );
  }

    render() {
      <section>
        {this.renderPopupContent()}
      </section>
    );
  }
}

export default Popup;
