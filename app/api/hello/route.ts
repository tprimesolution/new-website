export const dynamic = "force-static"; // Add this configuration

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}