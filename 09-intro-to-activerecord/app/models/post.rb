class Post < ActiveRecord::Base

  belongs_to :user
  has_many :likes

  has_many :users, through: :likes
  # def user
  #   User.find_by(id: self.user_id)
  # end

end
