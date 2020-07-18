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
    return fetch(`${BASE_URL}/opportunities`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.text());
  },
  // edit an opportunity
  update(id, params) {
    console.log(id)
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
    return fetch(`${BASE_URL}/opportunities/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(res => res.json());
  }
};


const Session = {
  create(params) {
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

const Message = {
  create(id, params) {
    return fetch(`${BASE_URL}/opportunities/${id}/messages`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

const Publish = {
  create(id, params) {
    return fetch(`${BASE_URL}/opportunities/${id}/publishings`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
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

export { Opportunities, Message, Session, User, Publish };