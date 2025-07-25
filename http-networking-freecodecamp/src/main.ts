import { getIssueData } from "./common/issues.js";

const main = async () => {
  const issues = await getIssueData();
  console.log("Fetched Issues : ", issues);
};

main();
