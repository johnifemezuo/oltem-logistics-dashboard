import { DashboardPage, LoginForm, UnAuthenticatedLayout } from "../components";

export default function LoginPage() {
  return (
    <UnAuthenticatedLayout>
      <LoginForm />
    </UnAuthenticatedLayout>
  );
}
