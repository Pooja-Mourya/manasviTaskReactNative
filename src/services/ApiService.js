import axios from 'axios'
// Example base URL
const baseURL = 'https://api.example.com';


async function fetchData(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function createData(userData) {
    try {
        const response = await axios.post(`${baseURL}/users`, userData);
        console.log('Data created:', response.data);
    } catch (error) {
        console.error('Error creating data:', error);
    }
}

async function updateData(userId, updatedUserData) {
    try {
        const response = await axios.put(`${baseURL}/users/${userId}`, updatedUserData);
        console.log('Data updated:', response.data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
}

async function deleteData(userId) {
    try {
        const response = await axios.delete(`${baseURL}/users/${userId}`);
        console.log('Data deleted:', response.data);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}


