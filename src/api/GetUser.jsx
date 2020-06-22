
import axios from 'axios';

export function getUser(formData) {
  const body = JSON.stringify(formData);
  return axios.post('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login',
    body,
    {
      headers: {
        'Content-Type':
          'application/json; charset=utf-8'
      },
    })
}

export function isTokenExist(){
  const token = localStorage.getItem('access_token');
  if (token) {
    return true;
  }
  return false;
}