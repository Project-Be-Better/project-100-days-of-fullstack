export interface Issue {
  id: string;
  title: string;
  status: string;
  estimate: number;
}

export const generateKey = (): string => {
  const characters = "ABCDEF0123456789";
  let result = "";

  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const getIssueData = async (): Promise<Issue[]> => {
  const apiKey = generateKey();
  const res = await fetch(
    "https://api.boot.dev/v1/courses_rest_api/learn-http/issues",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};

export const logIssues = (issues: Issue[]): void => {
  for (const issue of issues) {
    console.log(issue.title);
  }
};
