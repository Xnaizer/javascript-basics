// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// ✅ Inisialisasi variabel orders sebagai array kosong
let orders = [];

// ✅ Fungsi untuk menambahkan order baru
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0); // Hitung total harga

  const newOrder = { 
    id: generateUniqueId(), 
    customerName, 
    items, 
    totalPrice,  // Tambahkan totalPrice
    status: 'Menunggu' 
  };

  orders = [...orders, newOrder]; // Menyimpan perubahan ke orders
  return newOrder;
}

// ✅ Fungsi untuk memperbarui status order
function updateOrderStatus(orderId, status) {
  orders = orders.map(order => 
    order.id === orderId ? { ...order, status } : order
  );
}

// ✅ Fungsi untuk menghitung total pendapatan dari order dengan status "Selesai"
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === "Selesai")  // Ambil hanya yang "Selesai"
    .reduce((total, order) => total + order.totalPrice, 0);
}

// ✅ Fungsi untuk menghapus order berdasarkan ID
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
