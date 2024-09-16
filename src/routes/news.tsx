import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/news")({
  component: News,
})

function News() {
  const counter = 10
  return (
    <div className="flex flex-col h-28">
      <div className="flex-1 p-4 text-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
