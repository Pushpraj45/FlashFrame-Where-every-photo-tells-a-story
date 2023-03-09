// To store the access token at various places and time we are creating this file 
export const KEY_ACCESS_TOKEN = 'access_token';

// Function to check whether the user is logged in or not

export function getItem(key) {
    return localStorage.getItem(key);

}

// Function to set the value of a key in localStorage accessToken 

export function setItem(key, value) {
    localStorage.setItem(key, value);
}

// Logout function

export function removeItem(key) {
    localStorage.removeItem(key);
}