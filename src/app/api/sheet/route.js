export async function GET() {
  const res = await fetch(process.env.SHEET_API_URL, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return Response.json(data);
}
