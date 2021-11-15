import gql from "graphql-tag";

// Login token with ID and User
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
}
`;

// Add User Token with username id email
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
}
`;

// Save Book 
export const SAVE_BOOK = gql`
  mutation saveBook($input: StoreBookInput) {
    saveBook(input: $input) {
      username
      _id
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
}
`;

// Remove Book
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
}
`;