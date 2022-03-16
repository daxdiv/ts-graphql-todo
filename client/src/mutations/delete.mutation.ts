const DELETE_MUT = `mutation DeleteTodo($id: Int!) {
  deleteTodo(id: $id)
}`;

export default DELETE_MUT;
