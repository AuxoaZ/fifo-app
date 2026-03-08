export async function GET() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbyDbGGtUNpOFW9HnW3ED-4nLdOOxSmJw0LG-HDjgygEzQGvNpZAdA1x-Jiah6YAFCnqkg/exec",
  );

  const data = await res.json();

  return Response.json(data);
}
