import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import PropTypes from 'prop-types';

export default function TableRow({
  oldLine,
  newLine,
  lineString,
  messageString,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr>
        <td style={{ textAlign: 'center' }}>{oldLine}</td>
        <td style={{ textAlign: 'center' }}>{newLine}</td>
        <td>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls='example-collapse-text'
            aria-expanded={open}
          >
            +
          </Button>
        </td>
        <td>
          <div style={{ whiteSpace: 'pre' }}>{lineString}</div>
        </td>
      </tr>

      <td colSpan={4} style={{ textAlign: 'left' }}>
        <Collapse in={open}>
          {/* Apply white-space style here */}
          <div
            id='example-collapse-text'
            style={{ whiteSpace: 'pre', marginLeft: '20px' }}
          >
            {messageString}
          </div>
        </Collapse>
      </td>
    </>
  );
}

TableRow.propTypes = {
  oldLine: PropTypes.string.isRequired,
  newLine: PropTypes.string.isRequired,
  lineString: PropTypes.string.isRequired,
  messageString: PropTypes.string.isRequired,
};
