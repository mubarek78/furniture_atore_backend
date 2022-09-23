class SuppliersController < ApplicationController
    def index
        suppliers = Supplier.all
        render json: suppliers, include: "products"
    end
    
      private
    
      def render_not_found_response
        render json: { error: "Supplier not found" }, status: :not_found
      end
end
