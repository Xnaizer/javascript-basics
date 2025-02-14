const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];
  
function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */ 
  employees.push({name, email, joinYear});
  
    
}

addEmployee('Indra', 'indra@dicoding.com', 2021);
addEmployee('Rahmat', 'rahmat@dicoding.com', 2021);
addEmployee('xnaizer', 'xnaizer@dicoding.com', 2024)

console.log(employees);