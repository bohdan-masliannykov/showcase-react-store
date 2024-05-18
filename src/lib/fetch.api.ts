export async function fetchData<T>(
  url: string,
  signal?: AbortSignal
): Promise<T> {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); //simulate slow network

  const response = await fetch(url, { method: 'get', signal });

  if (!response.ok) {
    throw new Error(`Failed to fetch from URL: ${url}`);
  }

  return await response.json();
}
