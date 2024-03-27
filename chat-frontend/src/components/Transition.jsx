import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table';

export default function Example() {
  const [open, setOpen] = useState(false);

  const codeString = `newChannel
    .join()
    .receive('ok', (resp) => {
      console.log('Joined successfully', resp);
      console.log(resp);
      setMessages(resp.messages);
    })`;

  return (
    <Table bordered>
      <thead>
        <tr>
          <th style={{ width: '1%' }}>Old#</th>
          <th style={{ width: '1%' }}>New#</th>
          <th style={{ width: '1%' }}>Chat</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls='example-collapse-text'
              aria-expanded={open}
            >
              +
            </Button>
          </td>
          <td>Hello world</td>
        </tr>

        <td colSpan={4} style={{ textAlign: 'left' }}>
          <Collapse in={open}>
            {/* Apply white-space style here */}
            <div id='example-collapse-text' style={{ whiteSpace: 'pre' }}>
              {codeString}
            </div>
          </Collapse>
        </td>

        <tr>
          <td>2</td>
          <td>2</td>
          <td>test</td>
          <td>foo, bar</td>
        </tr>
      </tbody>
    </Table>
  );
}
