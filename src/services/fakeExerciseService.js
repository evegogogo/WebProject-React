const exercises = [
    {
      _id: "5b21ca3eeb7f6fbccd471888",
      name: "basketball",
      calories: 800,
      status: "finished",
      due: "14:00",
      liked: true
    },
    {
      _id: "5b21ca3eeb7f6fbccd471889",
      name: "soccer",
      calories: 1200,
      status: "unfinished",
      due: "17:00",
      liked:true
    },
    {
      _id: "5b21ca3eeb7f6fbccd471890",
      name: "tennis",
      calories: 700,
      status: "unfinished",
      due: "8:00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471891",
      name: "jogging",
      calories: 400,
      status: "unfinished",
      due: "21:00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471892",
      name: "table-tennis",
      calories: 470,
      status: "unfinished",
      due: "14:00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471893",
      name: "fishing",
      calories: 300,
      status: "unfinished",
      due: "10:50"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471894",
      name: "swimming",
      calories: 590,
      status: "unfinished",
      due: "10:23"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471895",
      name: "boxing",
      calories: 1000,
      status: "unfinished",
      due: "9:00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471896",
      name: "bowling",
      calories: 350,
      status: "unfinished",
      due: "13:00"
    }
  ];
  
  export function getExercises() {
    return exercises;
  }
  
  export function getExercise(id) {
    return exercises.find(e => e._id === id);
  }
  
  export function saveExercise(exercise) {
    let exerciseInDb = exercises.find(e => e._id === exercise._id) || {};
    exerciseInDb.name = exercise.name;
    exerciseInDb.calories = exercise.calories;
    exerciseInDb.status = exercise.status;
    exerciseInDb.due = exercise.due;
    exerciseInDb.liked = exercise.liked;
  
    if (!exerciseInDb._id) {
      exerciseInDb._id = Date.now();
      exercises.push(exerciseInDb);
    }
  
    return exerciseInDb;
  }
  
  export function deleteExercise(id) {
    let exerciseInDb = exercises.find(e => e._id === id);
    exercises.splice(exercises.indexOf(exerciseInDb), 1);
    return exerciseInDb;
  }
  