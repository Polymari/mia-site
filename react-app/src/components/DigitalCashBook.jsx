import React, { useState } from 'react';
import './DigitalCashBook.css'; // We'll create this CSS file next

const DigitalCashBook = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('sales'); // 'sales' or 'expenses'

  const handleRecordTransaction = () => {
    if (!description || !amount) {
      alert('Deskripsi dan jumlah tidak boleh kosong.');
      return;
    }
    const newTransaction = {
      id: transactions.length + 1,
      description,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString('id-ID'),
    };
    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount('');
  };

  const totalSales = transactions
    .filter((t) => t.type === 'sales')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expenses')
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalSales - totalExpenses;

  return (
    <div className="digital-cash-book-container">
      <h2>Buku Kas Digital</h2>
      <p>Catat penjualan dan pengeluaran Anda untuk memisahkan keuangan pribadi dan bisnis.</p>

      <div className="cash-book-summary">
        <div className="summary-item">
          <h4>Total Penjualan</h4>
          <p className="sales-amount">Rp {totalSales.toLocaleString('id-ID')}</p>
        </div>
        <div className="summary-item">
          <h4>Total Pengeluaran</h4>
          <p className="expenses-amount">Rp {totalExpenses.toLocaleString('id-ID')}</p>
        </div>
        <div className="summary-item">
          <h4>Laba Bersih</h4>
          <p className={netProfit >= 0 ? "sales-amount" : "expenses-amount"}>
            Rp {netProfit.toLocaleString('id-ID')}
          </p>
        </div>
      </div>

      <div className="cash-book-form">
        <div className="form-group">
          <label htmlFor="description">Deskripsi:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Contoh: Penjualan produk A"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Jumlah (Rp):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Contoh: 150000"
          />
        </div>
        <div className="form-group">
          <label>Tipe Transaksi:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="sales"
                checked={type === 'sales'}
                onChange={() => setType('sales')}
              />
              Penjualan
            </label>
            <label>
              <input
                type="radio"
                value="expenses"
                checked={type === 'expenses'}
                onChange={() => setType('expenses')}
              />
              Pengeluaran
            </label>
          </div>
        </div>
        <button onClick={handleRecordTransaction}>Catat Transaksi</button>
      </div>

      <h3>Riwayat Transaksi</h3>
      {transactions.length === 0 ? (
        <p>Belum ada transaksi yang dicatat.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((t) => (
            <li key={t.id} className={`transaction-item ${t.type}`}>
              <span className="transaction-date">{t.date}</span>
              <span className="transaction-description">{t.description}</span>
              <span className="transaction-amount">
                {t.type === 'sales' ? '+' : '-'} Rp {t.amount.toLocaleString('id-ID')}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DigitalCashBook;