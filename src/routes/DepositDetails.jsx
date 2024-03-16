import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Wallet = () => {
  const [balance, setBalance] = useState('php10000000000');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositAccountNumber, setDepositAccountNumber] = useState('');
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalAccountNumber, setWithdrawalAccountNumber] = useState('');
  const [confirmWithdrawal, setConfirmWithdrawal] = useState(false);
  const [depositError, setDepositError] = useState('');
  const [withdrawalError, setWithdrawalError] = useState('');
  const Navigate = useNavigate();

  const handleDeposit = () => {
    setShowDepositModal(true); // Show the deposit modal when Deposit button is clicked
  };

  const handleWithdrawal = () => {
    setShowWithdrawalModal(true); // Show the withdrawal modal when Withdraw button is clicked
  };

  const handleCloseModal = () => {
    setShowDepositModal(false); // Close the deposit modal
    setShowWithdrawalModal(false); // Close the withdrawal modal
    setDepositAmount('');
    setDepositAccountNumber('');
    setWithdrawalAmount('');
    setWithdrawalAccountNumber('');
    setConfirmWithdrawal(false);
    setDepositError('');
    setWithdrawalError('');
  };

  const handleDepositSubmit = (event) => {
    event.preventDefault();
    if (!depositAmount || !depositAccountNumber) {
      setDepositError('Please fill in all fields');
      return;
    }
    // Add your logic for depositing money here
    alert(`Depositing ${depositAmount} to account ${depositAccountNumber}`);
    handleCloseModal(); // Close the modal after submission
    Navigate('/'); // Redirect back to the main page after submission
  };

  const handleWithdrawalSubmit = (event) => {
    event.preventDefault();
    if (!confirmWithdrawal) {
      setConfirmWithdrawal(true);
      return;
    }
    if (!withdrawalAmount || !withdrawalAccountNumber) {
      setWithdrawalError('Please fill in all fields');
      return;
    }
    // Add your logic for withdrawing money here
    alert(`Withdrawing ${withdrawalAmount} from account ${withdrawalAccountNumber}`);
    handleCloseModal(); // Close the modal after submission
    Navigate('/'); // Redirect back to the main page after submission
  };

  return (
    <div>
      <h2>Wallet Balance</h2>
      <p>{balance}</p>

      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdrawal}>Withdraw</button>

      <h3>Recent Transactions</h3>
      {/* You can map through an array of transactions and display them here */}

      {/* Deposit Modal */}
      {showDepositModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Deposit</h2>
            <form onSubmit={handleDepositSubmit}>
              <div className="mb-4">
                <label htmlFor="depositAccountNumber" className="block text-sm font-semibold mb-2">Account Number:</label>
                <input type="text" id="depositAccountNumber" value={depositAccountNumber} onChange={(e) => setDepositAccountNumber(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="depositAmount" className="block text-sm font-semibold mb-2">Amount:</label>
                <input type="text" id="depositAmount" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              </div>
              {depositError && <p className="text-red-500">{depositError}</p>}
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md text-base font-semibold mr-4 transition duration-300 ease-in-out hover:bg-green-600">Submit</button>
              <button onClick={handleCloseModal} className="bg-red-500 text-white px-4 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out hover:bg-red-600">Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Withdrawal Modal */}
      {showWithdrawalModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Withdrawal</h2>
            {!confirmWithdrawal ? (
              <form onSubmit={handleWithdrawalSubmit}>
                <div className="mb-4">
                  <label htmlFor="withdrawalAmount" className="block text-sm font-semibold mb-2">Enter Amount:</label>
                  <input type="text" id="withdrawalAmount" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="withdrawalAccountNumber" className="block text-sm font-semibold mb-2">Account Number:</label>
                  <input type="text" id="withdrawalAccountNumber" value={withdrawalAccountNumber} onChange={(e) => setWithdrawalAccountNumber(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                </div>
                {withdrawalError && <p className="text-red-500">{withdrawalError}</p>}
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md text-base font-semibold mr-4 transition duration-300 ease-in-out hover:bg-green-600">Submit</button>
                <button onClick={handleCloseModal} className="bg-red-500 text-white px-4 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out hover:bg-red-600">Cancel</button>
              </form>
            ) : (
              <div>
                <p>Are you sure you want to withdraw {withdrawalAmount} from account {withdrawalAccountNumber}?</p>
                <button onClick={handleWithdrawalSubmit} className="bg-red-500 text-white px-4 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out hover:bg-red-600">Confirm</button>
                <button onClick={handleCloseModal} className="bg-gray-500 text-white px-4 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out hover:bg-gray-600">Cancel</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
