import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Table } from 'react-bootstrap';

const MyComponent = ({ data }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
      <Container>
        <Table bordered >
          <thead>
            <tr>
              <th>Account</th>
              <th>Operation</th>
              <th>Symbol</th>
              <th>Status</th>
              {isMobile ? null : (
                <>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Filled Qty</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Expiration</th>
                  <th>No. Ref</th>
                  <th>Ext. Ref</th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.account}</td>
                <td>{item.operation}</td>
                <td>{item.symbol}</td>
                <td>{item.status}</td>
                {isMobile ? null : (
                  <>
                    <td>{item.description}</td>
                    <td>{item.qty}</td>
                    <td>{item.filledQty}</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{item.date}</td>
                    <td>{item.expiration}</td>
                    <td>{item.noRef}</td>
                    <td>{item.extRef}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MyComponent;
