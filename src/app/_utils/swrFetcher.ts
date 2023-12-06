export default async function swrFetcher(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data?.meta?.msg || data?.message || 'Unknown error');
  }

  return res.json();
}
