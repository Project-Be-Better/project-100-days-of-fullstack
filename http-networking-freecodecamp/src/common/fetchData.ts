export interface Post {
  id: number;
  title: string;
}

export const fetchData = async (url: string): Promise<Post> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.log("Error in data", error);
    throw error;
  }
};
