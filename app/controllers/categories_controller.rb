class CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories, include: "products"
    end
    
      private
    
      def render_not_found_response
        render json: { error: "Categorie not found" }, status: :not_found
      end
end
