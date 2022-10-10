class ColorsController < ApplicationController
    def index
        colors = Color.all
        render json: colors
        # , include: ["supplier", "category"]
    end
end
