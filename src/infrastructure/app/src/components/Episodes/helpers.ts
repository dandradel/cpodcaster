export interface TableCellI {
  id: string
  label: string
}

export const millisToMinutesAndSeconds = (millis: Date) => {
  return `${millis.getMinutes()}:${(millis.getMinutes() < 10 ? '0' : '') + millis.getMinutes()}`
}

export const tableHeadCells: TableCellI[] = [
  { id: 'title', label: 'Title' },
  { id: 'date', label: 'Date' },
  { id: 'duration', label: 'Duration' },
]
