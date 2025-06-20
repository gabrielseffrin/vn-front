'use client'; 

import React, { useEffect, useState } from 'react';
import { getCustomers, generateReportPdf } from '@/app/services/api'; // Supondo que você ajustou em services/api.ts

interface Customer {
  id: number;
  name: string;
}

export default function RelatorioHoras() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedClient, setSelectedClient] = useState<number | ''>(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [clients, setClients] = useState<Customer[]>([]);
  
  const handleGenerateReport = async () => {
    if (!startDate || !endDate || selectedClient === '') {
      alert('Por favor, selecione a data de início, data de fim e o cliente.');
      return;
    }

    setIsLoading(true);

    try {
      const reportParams = {
        customer_id: +selectedClient, 
        start_date: startDate,
        end_date: endDate,
      };

      console.log('Parâmetros do relatório:', reportParams);

      const pdfBlob = await generateReportPdf(reportParams); 

      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
      URL.revokeObjectURL(pdfUrl); 

    } catch (error: unknown) { 

      if (error instanceof Error) {
        console.error('Erro ao gerar relatório:', error.message);
        alert(`Ocorreu um erro ao gerar o relatório: ${error.message}`);
      } else {
        console.error('Erro desconhecido ao gerar relatório:', error);
        alert('Ocorreu um erro desconhecido ao gerar o relatório.');
      }
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    const fetchClientsData = async () => {
      try {
        const data = await getCustomers(); 
        setClients(data); 
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Erro no componente ao buscar clientes:', error.message);
        } else {
          console.error('Erro no componente ao buscar clientes:', error);
        }
        alert('Não foi possível carregar a lista de clientes.');
      }
    };
    fetchClientsData();
  }, []); 


  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Relatório de Horas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label htmlFor="startDate" className="font-medium mb-1">Data Início</label>
          <input
            type="date"
            id="startDate"
            className="border rounded px-3 py-2 w-full"
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endDate" className="font-medium mb-1">Data Fim</label>
          <input
            type="date"
            id="endDate"
            className="border rounded px-3 py-2 w-full"
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            disabled={isLoading}
          />
        </div>
          
        <div className="flex flex-col">
          <label htmlFor="clienteSelect" className="font-medium mb-1">Cliente</label>
          <select
            id="clienteSelect"
            className="border rounded px-3 py-2"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value === '' ? '' : Number(e.target.value))} 
            disabled={isLoading || clients.length === 0}
          >
            <option value="">Selecione um cliente</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleGenerateReport}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !startDate || !endDate || selectedClient === ''}
        >
          {isLoading ? 'Gerando Relatório...' : 'Gerar Relatório'}
        </button>
      </div>
      {isLoading && <p className="text-center text-gray-600 mt-4">Gerando relatório...</p>}
    </div>
  );
}