// Posts a form to Netlify Forms. The form must also be declared in
// public/__forms.html so Netlify registers it at deploy time.
export async function submitNetlifyForm(form: HTMLFormElement): Promise<void> {
  const data = new FormData(form);
  const body = new URLSearchParams();
  data.forEach((value, key) => {
    if (typeof value === "string") body.append(key, value);
  });

  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
}
