// Requests

const BASE_URL = `http://localhost:3000/api/v1`;

// Create a module of Opportunities related fetch request methods
const Opportunities = {
  // fetch all opportunities from server
  all() {
    return fetch(`${BASE_URL}/opportunities`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // fetch a single opportunity
  one(id) {
    return fetch(`${BASE_URL}/opportunities/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // creating an opportunity
  create(params) {
    // `params` is an object that represents an opportunity
    // { body: 'qBody', title: 'qTitle' }
    return fetch(`${BASE_URL}/opportunities`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // updating an opportunity
  update(id, params) {
    return fetch(`${BASE_URL}/opportunities/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/opportunity/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
  create(params) {
    // `params` is an object that represents a user
    // { email: 'some@email.com', password: 'some-password' }
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    // params is going to look like
    // { email: <some-email>, password: <some-password>, first_name:....}
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json());
  }
};

export { Opportunities, Session, User, };