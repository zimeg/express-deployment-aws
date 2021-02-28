exports.handler = (event, context) => {
  context.succeed(`hello ${event.name ? event.name : 'world'}`);
};
