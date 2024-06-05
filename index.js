const { Student, Problem, Group, ProblemCompletion } = require('./db/models');
const { Op } = require('sequelize');

(async () => {
  // студенты, которые решили задание про бабушку
  //   const grannyProblem = await Problem.findOne({
  //     where: {
  //       title: {
  //         [Op.iLike]: '%granny%',
  //       },
  //     },
  //     include: {
  //       model: ProblemCompletion,
  //       include: {
  //         model: Student,
  //       },
  //     },
  //   });
  //   console.log(JSON.stringify(grannyProblem, null, 2));
  //   console.log({
  //     totalDuration: grannyProblem.ProblemCompletions.reduce(
  //       (acc, completion) => acc + completion.duration,
  //       0,
  //     ),
  //   });
  //   console.log({
  //     names: grannyProblem.ProblemCompletions.map((comp) => comp.Student.name),
  //   });

  //   const grannyProblem = await Problem.findOne({
  //     where: {
  //       title: {
  //         [Op.iLike]: '%wars%',
  //       },
  //     },
  //     include: Student,
  //   });
  //   console.log(JSON.stringify(grannyProblem, null, 2));
  //   console.log(grannyProblem.Students.map((st) => st.name));
  //   console.log(
  //     grannyProblem.Students.reduce(
  //       (acc, st) => acc + st.ProblemCompletion.duration,
  //       0,
  //     ),
  //   );

  const bob = await Student.findOne({
    where: {
      name: 'Bob',
    },
    include: Problem,
  });
  console.log(bob.get());
})();
