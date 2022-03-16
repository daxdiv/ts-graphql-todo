const CREATE_MUT = `
mutation CreateTodo($text: String!) {
  createTodo(text: $text) { 
    text
    id
    complete
    updatedAt
    createdAt
  }
}`;

export default CREATE_MUT;
