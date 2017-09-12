class CreateMediflections < ActiveRecord::Migration[5.1]
  def change
    create_table :mediflections do |t|
      t.references :user, foreign_key: true
      t.text :journal
      t.integer :time

      t.timestamps
    end
  end
end
