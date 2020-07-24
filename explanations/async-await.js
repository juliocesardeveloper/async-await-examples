//PROMISES
async function requestHandler(request, response) {
  try {
    const user = await user.findById(request.userId);
    const tasks = await Tasks.findById(user.TasksId);
    tasks.completed = true;
    await tasks.save();
    response.send('Task Completed');
  } catch (error) {
    response.send(error);
  }
}