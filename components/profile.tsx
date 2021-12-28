import useSWR from "swr";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data, error } = useSWR(
    "https://61c91de420ac1c0017ed8b47.mockapi.io/api/v1/user/1",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
