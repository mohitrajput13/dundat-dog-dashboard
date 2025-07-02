
import React from 'react';
import { CreditCard } from 'lucide-react';

const Transactions = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-600">View and manage all financial transactions</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-100 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard size={32} className="text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Transaction History</h3>
          <p className="text-gray-600">Transaction data will appear here once users start making purchases and earning rewards.</p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
