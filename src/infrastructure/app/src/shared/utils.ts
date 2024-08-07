export const isOneDayAgo = (date?: string): boolean => {
  if (!date) {
    return true
  }

  const today = new Date()
  const pastDate = new Date(date)

  if (86400000 < today.getTime() - pastDate.getTime()) {
    return true
  }

  return false
}
