class User < ActiveRecord::Base

  has_many :posts
  has_many :likes

  has_many :liked_posts, through: :likes, source: :post

  def like_post(post)
    Like.create(user_id: self.id, post_id: post.id)
  end

  # def posts
  #   Post.all.select { |p| p.user_id == self.id }
  # end

end
