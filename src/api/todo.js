module.exports.handler = (event, ctx, done) => {
  console.log(done);
  const { id } = event.pathParameters;

  if (id !== "1") {
    done(null, {
      statusCode: 404,
      body: JSON.stringify({
        message: `Todo with id ${id} not found `,
      }),
    });
    return;
  }

  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: 1,
        name: "clean up",
        status: "open",
      },
    }),
  });
};
