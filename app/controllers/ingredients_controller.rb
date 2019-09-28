class IngredientsController < ApplicationController
    def index
    end
    def show
        @ingredient = Ingredient.find(params[:id])
    end
    def add
    end
end
