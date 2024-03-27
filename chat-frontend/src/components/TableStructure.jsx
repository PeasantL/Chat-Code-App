import React from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import ChatRoom from './ChatRoom';

export default function TableStructure() {
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
        <TableRow
          oldLine='1'
          newLine='1'
          lineString='Hello World'
          messageString=<ChatRoom />
        />
        <TableRow
          oldLine='2'
          newLine='2'
          lineString='  Foo | Bard'
          messageString=<ChatRoom />
        />
        <TableRow
          oldLine='3'
          newLine='3'
          lineString='    There are lots of small clocks on the wall.'
          messageString={codeString}
        />
      </tbody>
    </Table>
  );
}
