import SignupForm from "../features/signup/SignupForm";

export default function Join() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Join Alpha Math</h1>
      <p className="text-muted-foreground mb-6">
        Tell us about your student and we’ll match you to the right program.
      </p>
      <SignupForm />
    </section>
  );
}