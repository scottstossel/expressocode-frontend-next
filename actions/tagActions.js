import fetch from "isomorphic-fetch";
import { API } from "../config";

export const createTag = (tag, token) => {
  return fetch(`${API}/tag`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(tag)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export const getTags = () => {
  return fetch(`${API}/tags`, {
    method: 'GET'
  })
  .then(response => {
    return response.json();
  })
  .catch(error => console.log(error));
}

export const getSingleTag = (slug) => {
  return fetch(`${API}/tag/${slug}`, {
    method: 'GET'
  })
  .then(response => {
    return response.json();
  })
  .catch(error => console.log(error));
}

export const removeTag = (slug, token) => {
  return fetch(`${API}/tag/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}