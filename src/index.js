import "dotenv/config";

// import rp from "request-promise-native";

const handler = async function(event, context) {
  console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2));
  console.log("EVENT\n" + JSON.stringify(event, null, 2));

  // Env variables will become strings even if we set them as booleans
  process.env.debug = event.debug === false ? "false" : "true";
  const response = {
    statusCode: 200,
    body: "Thanks for letting me know!"
  };

  return response;
};

export { handler };
