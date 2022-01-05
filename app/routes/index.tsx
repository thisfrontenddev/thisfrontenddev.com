import type { MetaFunction } from "remix";
import { Layout } from "~/components/Layout";
import { Home } from "~/pages/Home/Home";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
