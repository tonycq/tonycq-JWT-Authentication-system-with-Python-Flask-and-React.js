const API_URL = 'http://127.0.0.1:5000'; 

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    throw error; 
  }
};

export const register = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Error al registrar usuario');
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
 
};
