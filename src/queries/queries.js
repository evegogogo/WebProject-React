import { gql } from 'apollo-boost';

const getFoodsQuery = gql`
  {
    foods {
      id
      name
      calories
      user {
        id
      }
      status
      date
      liked
    }
  }
`

const getExercisesQuery = gql`
  {
    exercises {
      id
      name
      calories
      status
      date
      liked
    }
  }
`

const addFoodMutation = gql`
  mutation addFood($name: String, $calories: Float, $userId: ID, $status: String, $date: String, $liked: Boolean) {
      addFood(name: $name, calories: $calories, userId: $userId, status: $status, date: $date, liked: $liked) {
          name
          calories
          user {
            id
          }
          status
          date
          liked
      }
  }
`
const deleteFoodMutation = gql`
  mutation deleteFood($name: String, $calories: Float) {
      deleteFood(name: $name, calories: $calories) {
          id
      }
  }
`

const addExerciseMutation = gql`
  mutation addExercise($name: String, $calories: Float, $status: String, $date: String, $liked: Boolean) {
      addExercise(name: $name, calories: $calories, status: $status, date: $date, liked: $liked) {
          name
          calories
          status
          date
          liked
      }
  }
`

const deleteExerciseMutation = gql`
  mutation deleteExercise($name: String, $calories: Float) {
      deleteExercise(name: $name, calories: $calories) {
          id
      }
  }
`

const editFoodMutation = gql`
  mutation editFood($name: String, $liked: Boolean) {
      editFood(name: $name, liked: $liked) {
          liked
      }
  }
`

const editExerciseMutation = gql`
  mutation editExercise($name: String, $liked: Boolean) {
      editExercise(name: $name, liked: $liked) {
          liked
      }
  }
`

export { getFoodsQuery,
        getExercisesQuery,
        addFoodMutation,
        addExerciseMutation,
        deleteFoodMutation,
        deleteExerciseMutation,
        editFoodMutation,
        editExerciseMutation
     };
