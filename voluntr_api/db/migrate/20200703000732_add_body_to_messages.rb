class AddBodyToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :body, :text
    remove_column :messages, :message
  end
end
