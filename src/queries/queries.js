import { gql } from 'apollo-boost';

const getFoodsQuery = gql`
  {
    foods {
      id
      name
      calories
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
      due
    }
  }
`

const addFoodMutation = gql`
  mutation addFood($name: String, $calories: Float, $status: String) {
      addFood(name: $name, calories: $calories, status: $status) {
          name
          calories
          status
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
  mutation addExercise($name: String, $calories: Float, $status: String, $due: String) {
      addExercise(name: $name, calories: $calories, status: $status, due: $due) {
          name
          calories
          status
          due
      }
  }
`

export { getFoodsQuery, getExercisesQuery, addFoodMutation, addExerciseMutation, deleteFoodMutation };
