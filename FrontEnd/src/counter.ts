const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${count}`
  }
  element.addEventListener('click', async () => {
    setCounter(counter + 1);
    try {
      const res = await fetch(`${API_URL}/health-check`);
      const data = await res.json();
      if (res.status === 200 && data.status === 'OK') {
        alert('Disponibilidade OK');
      }
    } catch {
      // Serviço indisponível - não exibe alerta de sucesso
    }
  });
  setCounter(0);
}
