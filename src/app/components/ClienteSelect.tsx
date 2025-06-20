// src/components/ClienteSelect.tsx
export const ClienteSelect = () => {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">Cliente</label>
      <select className="border rounded px-3 py-2">
        <option value="">Selecione um cliente</option>
        <option value="cliente1">Cliente 1</option>
        <option value="cliente2">Cliente 2</option>
        {/* Dados podem vir de API depois */}
      </select>
    </div>
  )
}
