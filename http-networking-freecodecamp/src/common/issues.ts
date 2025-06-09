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

export const getIssueData = () => {};

export const logIssues = () => {};
