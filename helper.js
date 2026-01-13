// const helper = function (data) {
//   return `${data} is logged in.`;
// };

// // Exporting the function to be used in other files
// module.exports = helper;

const user = function (data) {
  return `${data} is logged in.`;
};

const id = function (id) {
  return `${id}`;
};

const email = function (email) {
  return `${email}`;
};

// module.exports.user = user;
// module.exports.id = id;
// module.exports.email = email;
module.exports = {user, id, email};
