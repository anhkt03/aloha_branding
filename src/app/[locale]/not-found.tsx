import Link from "next/link";
import { Container } from "@/components/common/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.1em] text-brand">404</p>
      <h1 className="mt-4 text-4xl font-extrabold text-ink sm:text-5xl">
        Không tìm thấy trang
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Trang bạn tìm không tồn tại hoặc đã được di chuyển. / The page you are looking for
        could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        ← Trang chủ / Home
      </Link>
    </Container>
  );
}
