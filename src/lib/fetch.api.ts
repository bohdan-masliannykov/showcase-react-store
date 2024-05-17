export async function fetchData<T>(url: string): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //simulate slow network

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch from URL: ${url}`);
  }

  return await response.json();
}
