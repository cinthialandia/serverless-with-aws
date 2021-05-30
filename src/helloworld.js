module.exports.handler = (evt, ctx, done) => {
  console.log(evt);
  if (evt.message !== "hello") {
    done(new Error("erroooorrrrrr"));
  } else {
    done(null, "oki!!!");
  }
};
