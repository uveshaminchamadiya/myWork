const nestedObject = {
  user: {
    id: 123,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: {
        street: "123 Main St",
        city: "Metropolis",
        state: "NY",
        postalCode: "10001",
      },
    },
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: {
          enabled: true,
          sound: "default",
        },
      },
    },
    history: {
      lastLogin: {
        date: "2024-01-01",
        ip: "192.168.1.1",
      },
      lastPurchase: {
        itemId: 456,
        itemName: "Laptop",
        amount: 1500,
      },
    },
  },
};

const deepCopy = (obj) => {
  const copy = {};
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
};

let newObj = deepCopy(nestedObject)
console.log("newObj: ", JSON.stringify(newObj));
