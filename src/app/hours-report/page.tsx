// src/app/relatorio-horas/page.tsx
'use client'; // Marca este componente como um Client Component

import React, { useState } from 'react';
import { DateRangePicker } from '@/app/components/DateRangePicker'; // Ajustado para caminho relativo
import { ClienteSelect } from '@/app/components/ClienteSelect';     // Ajustado para caminho relativo
import { GerarRelatorioButton } from '@/app/components/GerarRelatorioButton'; // Ajustado para caminho relativo

export default function RelatorioHoras() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedClient, setSelectedClient] = useState('');

  const handleGenerateReport = () => {
    console.log('Gerar Relatório com os seguintes dados:');
    console.log('Data de Início:', startDate);
    console.log('Data de Fim:', endDate);
    console.log('Cliente Selecionado:', selectedClient || 'Nenhum cliente selecionado');
    alert('Relatório gerado! Verifique o console para os dados.');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Relatório de Horas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Passa o estado e as funções para o DateRangePicker */}
        <DateRangePicker
          
        />
        {/* Passa o estado e a função para o ClienteSelect */}
        <ClienteSelect
          
        />
      </div>
      <div className="mt-6 flex justify-end">
        {/* Passa a função de geração do relatório para o botão */}
        <GerarRelatorioButton  />
      </div>
    </div>
  );
}
