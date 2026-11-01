import NextLink from "next/link";
import { useRouter } from "next/router";

export function Link({ to, href, ...props }) {
  return <NextLink href={href || to || "#"} {...props} />;
}

export const HashLink = Link;

export function useNavigate() {
  const router = useRouter();
  return (destination) => {
    if (typeof destination === "number") return router.back();
    return router.push(destination);
  };
}
