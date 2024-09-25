const getTodos = async (req, res) => {
  res.send("get todos");
};

const addTodo = async (req, res) => {
  res.send("adding todo");
};

module.exports = { getTodos, addTodo };
