const api = "http://localhost:3001"

export const getAll = () =>
  fetch(`/wallet`)
    .then(response => response.json())

export const addWallet = (address, balance) =>
  fetch(`/wallet`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        address: address,
        balance: balance
      })
  }).then(res => res.json());