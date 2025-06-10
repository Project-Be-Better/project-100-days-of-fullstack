import { getIssueData } from "./common/issues";

const main = async () => {
  const issues = await getIssueData();
  console.log("Fetched Issues : ", issues);
};

main();
