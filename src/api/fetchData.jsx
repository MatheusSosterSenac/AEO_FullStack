 export async function fetchData(url) {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
  
      if (!response.ok) {
        throw new Error('Erro ao carregar os dados.');
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      return null;
    }
  }
  