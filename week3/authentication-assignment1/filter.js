const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];

  let username = "Priya kumari"


let result = ALL_USERS.filter(function(value) {
    if (value.username === username){
      return false;
    }else {
      return true;
    }
  })

console.log(result)