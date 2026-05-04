import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative z-10 py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-gp-square text-gruvmute uppercase tracking-[0.2em] mb-4">
          Stay in the Loop
        </p>
        <h2 className="font-gp-line text-3xl sm:text-4xl text-gruvred mb-3">
          Get new posts, projects & resume updates
        </h2>
        <p className="text-gruvmute mb-10 leading-relaxed">
          Occasional emails. No spam.
        </p>

        {status === "success" ? (
          <p className="text-sm text-gruvgreen font-medium">
            You&apos;re on the list. Talk soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 bg-[#0C0D1C]/60 border border-gruvpink/30 rounded-full text-sm text-gruvred placeholder:text-gruvmute/70 outline-none focus:border-gruvpink transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 border border-gruvpink text-gruvpink font-gp-square text-sm rounded-full hover:bg-gruvpink hover:text-[#0C0D1C] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-sm text-gruvbold mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
