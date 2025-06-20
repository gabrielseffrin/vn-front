// src/components/DateRangePicker.tsx
export const DateRangePicker = () => {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">Período</label>
      <div className="flex gap-2">
        <input type="date" className="border rounded px-3 py-2 w-full" />
        <input type="date" className="border rounded px-3 py-2 w-full" />
      </div>
    </div>
  )
}
