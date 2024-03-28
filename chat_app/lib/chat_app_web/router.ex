defmodule ChatAppWeb.Router do
  use ChatAppWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", ChatAppWeb do
    pipe_through(:api)
  end
end
