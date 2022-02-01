import React from 'react';
import PropTypes from 'prop-types';

const Message = ({msg}) => {
  return (
  <div className="alert alert-info alert-dismissible fade show" role="alert">
  {msg}
  <button type="button" style={{position: 'absolute',right: '20px',top:'10px'}} className="btn" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>);
};

Message.propTypes = {
    msg: PropTypes.string.isRequired
};

export default Message;
