# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_26_214304) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "messages", force: :cascade do |t|
    t.text "message"
    t.bigint "opportunities_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["opportunities_id"], name: "index_messages_on_opportunities_id"
  end

  create_table "opportunities", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "date"
    t.datetime "time"
    t.text "where"
    t.text "contact"
    t.string "tags"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.string "aasm_state"
    t.index ["user_id"], name: "index_opportunities_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "messages", "opportunities", column: "opportunities_id"
  add_foreign_key "opportunities", "users"
end
