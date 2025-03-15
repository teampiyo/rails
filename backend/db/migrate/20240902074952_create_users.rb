class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email # then run 'rails db:migrate' to create table called users
      
      t.timestamps
    end
  end
end
