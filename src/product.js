import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function product() {
  return (
    <div className="col">
      <div className="tabel">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th id='header'>Kode Product</th>
              <th id='header'>Nama Produk</th>
              <th id='header'>Harga</th>
              <th id='header'>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
      </Table>
      </div>
    </div>
  );
}

export default product;
