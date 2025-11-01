import React, { useState } from 'react';
import './OrderDashboard.css'; // We'll create this CSS file next

const OrderDashboard = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Budi Santoso', item: 'Produk A', status: 'New', quantity: 2, total: 150000 },
    { id: 2, customer: 'Siti Aminah', item: 'Produk B', status: 'Ready to Ship', quantity: 1, total: 75000 },
    { id: 3, customer: 'Joko Susilo', item: 'Produk C', status: 'Completed', quantity: 3, total: 225000 },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'New': return 'status-new';
      case 'Ready to Ship': return 'status-ready';
      case 'Completed': return 'status-completed';
      default: return '';
    }
  };

  return (
    <div className="order-dashboard-container">
      <h2>Dasbor Pesanan & Inventaris</h2>
      <p>Lacak pesanan dan inventaris Anda dengan mudah. Perbarui status pesanan untuk efisiensi operasional.</p>

      {orders.length === 0 ? (
        <p>Belum ada pesanan.</p>
      ) : (
        <div className="order-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h4>Pesanan #{order.id} - {order.customer}</h4>
                <span className={`order-status ${getStatusClass(order.status)}`}>{order.status}</span>
              </div>
              <p><strong>Item:</strong> {order.item} (x{order.quantity})</p>
              <p><strong>Total:</strong> Rp {order.total.toLocaleString('id-ID')}</p>
              <div className="order-actions">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="New">Baru</option>
                  <option value="Ready to Ship">Siap Dikirim</option>
                  <option value="Completed">Selesai</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderDashboard;