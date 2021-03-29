class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :img
      t.string :production
      t.string :platform

      t.timestamps
    end
  end
end
