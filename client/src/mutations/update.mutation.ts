const UPDATE_MUT = `mutation UpdateTodo($id: Int!, $complete: Boolean!, $text: String!) {
  updateTodo(id: $id, complete: $complete, text: $text) 
}`;

export default UPDATE_MUT;
