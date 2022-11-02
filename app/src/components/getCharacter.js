export const getCharacter= async () => {
    const response = await fetch('http://localhost:3000/characters')
    const data = await response.json()
    data.map((character) => {
        return data
    })
        }
 