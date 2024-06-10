import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';

function home() {
  return (
    <div id='home'>
      <div>
      <Card id='card1' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Pesanan</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Pesanan bulan ini :</Card.Subtitle>
          <Card.Text>
            <i className='bi bi-graph-up'></i>
            <button>20 terlaksana</button>
            <button>3 akan terlaksana </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card id='card2' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Pendapatan</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Pendapatan bulan ini :</Card.Subtitle>
          <Card.Text>
            <i className='bi bi-bank'></i>
            <button>Rp. 0,00</button>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
    <div>
    <Card id='card3' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Pegawai</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Total Pegawai</Card.Subtitle>
          <Card.Text>
            <i className='bi bi-file-person-fill'></i>
            <button>2 Fotografer</button>
            <button>1 Videografer</button>
            <button>1 crew</button>
            <button>3 admin</button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card id='card4' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Total Product</Card.Subtitle>
          <Card.Text>
            <i className='bi bi-card-image'></i>
            <button>4 Produk</button>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
    </div>
  );
}

export default home;
