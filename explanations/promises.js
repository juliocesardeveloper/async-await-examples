//PROMISES
function requestHandler(request, response) {
  User.findById(request.userId)
    .then(function(user) {
      return Tasks.findById(user.tasksId)
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function () {
      response.send('Tasks Completed');
    })
    .catch(function (errors) {
      response.send(errors);
    })
}