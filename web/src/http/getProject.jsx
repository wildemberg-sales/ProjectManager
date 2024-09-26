export async function getProject(id){
    const response = await fetch(`http://localhost:4000/project/${id}`)
    const data = await response.json()
    console.log(data)
    if(!response.ok){
      throw new Error(data.message);
    }
    return data
}