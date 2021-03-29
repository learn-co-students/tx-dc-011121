class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :avatar, default: 'https://www.fillmurray.com/200/200'
      t.string :bio, default: 'I love flavortown, USA'
      t.timestamps
    end
  end
end
