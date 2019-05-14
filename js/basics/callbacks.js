doHomework = (subject, next) => {
  next();
  console.log(`Starting my ${subject} homework.`);
};

alertFinished = () => {
  console.log('Finished my homework');
};

doHomework('math', alertFinished);
