class CreateMediflections < ActiveRecord::Migration[5.1]
  def change
    create_table :mediflections do |t|
      t.references :users, foreign_key: true
      t.text :journal
      t.integer :time
      t.string :date

      t.timestamps
    end
  end
end
