const DB_URL = 'http://localhost:3001/events'

const getEvents = async () => {
  const dbData = await fetch(DB_URL)
  return await dbData.json()
}

const postEvent = async (event) => {
  const dbData = await fetch(`${DB_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
  })
  return await dbData.json()
}

export { getEvents, postEvent }
