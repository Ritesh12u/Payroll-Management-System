const form = document.getElementById('payroll-form');
const resultSection = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get Input Values
  const name = document.getElementById('employeeName').value.trim();
  const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
  const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
  const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;

  // Validate inputs
  if (!name || hoursWorked < 0 || hourlyRate < 0 || taxRate < 0 || taxRate > 100) {
    alert('Please enter valid inputs.');
    return;
  }

  // Calculate payroll
  const grossSalary = hoursWorked * hourlyRate;
  const taxAmount = (grossSalary * taxRate) / 100;
  const netSalary = grossSalary - taxAmount;

  // Display results
  document.getElementById('resultName').textContent = name;
  document.getElementById('resultGross').textContent = grossSalary.toFixed(2);
  document.getElementById('resultTax').textContent = taxAmount.toFixed(2);
  document.getElementById('resultNet').textContent = netSalary.toFixed(2);

  form.classList.add('hidden');
  resultSection.classList.remove('hidden');
});

// Reset form
resetBtn.addEventListener('click', () => {
  form.reset();
  form.classList.remove('hidden');
  resultSection.classList.add('hidden');
});
