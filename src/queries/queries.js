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

export { getFoodsQuery, getExercisesQuery, addFoodMutation };
