
//CON ES5
function requestHandler(request, response) {
  User.findById(request.userId, function(error, user) {
    if (error) {
      response.send(error);
    } else {
      Tasks.findById(user.taskId, function(error, tasks){
        if (error) {
          return response.send(error);
        } else {
          tasks.completed = true;
          tasks.save(function (error) {
            if (error) {
              return response.send(error);
            } else {
              response.send('Task Completed');
            }
          })
        }
      })
    }
  })
}