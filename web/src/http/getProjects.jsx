export async function getProjects(){
    const response = await fetch('http://localhost:4000/projects')
    const data = await response.json()
    console.log(data)
    if(!data){
      return null
    }
    return data
}