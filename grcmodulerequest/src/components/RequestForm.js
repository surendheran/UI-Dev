import React, {Component} from 'react';

class RequestForm extends Component {

  static defaultProps = {
    comment: 'Request you to provide access to this module',
    DL: 'DL-PP-GRC@paypal.com'
  }

  handleSubmit = () => {
    console.log("Test submit");
    this.closePopUp();
  }

  closePopUp = () => {
    this.props.closePopUp();
  }

  render() {
    return(
      <div className="RequestFormWrapper">
        <div className="RequestForm">
          <div className="CloseButton" onClick={this.closePopUp}>X</div>
          <div className="PopupHeader"><strong>Request For Access</strong></div>
          <form onSubmit={this.handleSubmit}>
            <label>To</label><br />
            <input type="text" value={this.props.DL} ref="to" />
            <br /><br />
            <label>Comment</label><br />
            <textarea rows="10" cols="40" value={this.props.comment} ref="comment" />
            <br /><br />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default RequestForm;
