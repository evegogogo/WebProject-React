import { gql } from 'apollo-boost';

const getFoodsQuery = gql`
  {
    foods {
      id
      name
      calories
      status
      date
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
    }
  }
`

const addFoodMutation = gql`
  mutation addFood($name: String, $calories: Float, $status: String, $date: String) {
      addFood(name: $name, calories: $calories, status: $status, date: $date) {
          name
          calories
          status
          date
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
  mutation addExercise($name: String, $calories: Float, $status: String, $date: String) {
      addExercise(name: $name, calories: $calories, status: $status, date: $date) {
          name
          calories
          status
          date
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

export { getFoodsQuery,
        getExercisesQuery,
        addFoodMutation,
        addExerciseMutation,
        deleteFoodMutation,
        deleteExerciseMutation
     };
