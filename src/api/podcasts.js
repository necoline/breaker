import agent from "../agent";

export default {
  fetch() {
    return agent.get("/stuff");
  }
};
