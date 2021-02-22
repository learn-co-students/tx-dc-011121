User.destroy_all
Post.destroy_all
Like.destroy_all

u1 = User.create(username: "Ash", bio: "Pikachu is my best friend.")
u2 = User.create(username: "Brock", bio: "I'm a chef!")
u3 = User.create(username: "Misty", bio: "Water pokemons are the OG")

p1 = Post.create(title: 'Must visit places in palett town', content: "Dennys have killer burgers.", user_id: u1.id)
p2 = Post.create(title: 'Top 10 dishes to cook on the road', content: "Soups, Sandwiches etc.", user_id: u2.id)
p3 = Post.create(title: 'New to this', content: "Can y'all see this?", user_id: u3.id)
p4 = Post.create(title: 'Again!!', content: "Can y'all see this? Likes plsss", user_id: u3.id)

l1 = Like.create(user_id: u1.id, post_id: p2.id)
l2 = Like.create(user_id: u3.id, post_id: p2.id)

l3 = Like.create(user_id: u1.id, post_id: p3.id)
l4 = Like.create(user_id: u2.id, post_id: p3.id)

l5 = Like.create(user_id: u1.id, post_id: p4.id)
l6 = Like.create(user_id: u2.id, post_id: p4.id)
