import React from 'react';
import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types';

export default function TableToast({ messageString }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Centers the child component horizontally
        alignItems: 'center', // Centers the child component vertically
      }}
    >
      <Toast>
        <Toast.Header closeButton={false}>
          <img src='leafProfile20x20.jpeg' className='rounded me-2' alt='' />
          <strong className='me-auto'>PeasantL</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{messageString}</Toast.Body>
      </Toast>
    </div>
  );
}

TableToast.propTypes = {
  messageString: PropTypes.string.isRequired,
};
