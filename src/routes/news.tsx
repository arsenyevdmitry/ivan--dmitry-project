import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/news")({
  component: News,
})

function News() {
  return <div className="flex flex-col bg-slate-400 h-28">News page</div>
}
