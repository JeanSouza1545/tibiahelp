const API_BASE = import.meta.env.API_BASE

export const healthCheck = async () => {
    try{
        const responser = await fetch(`${API_BASE}/health-check`)
        if(responser.status === 200)console.log(responser)
    } catch {
        alert('Serviço indisponível')
    }
}
 
export default healthCheck