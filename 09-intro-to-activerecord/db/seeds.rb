User.destroy_all
Post.destroy_all

khalin = User.create(username: 'Khalin', email: 'email@khalin.com')
david = User.create(username: 'David', email: 'email@david.com')
marc = User.create(username: 'Marc', email: 'email@marc.com')

p1 = Post.create(title: 'First Post', content: 'This is the first post..', user_id: david.id)
p2 = Post.create(title: 'Second Post', content: 'This is the first post..', user_id: david.id)
p3 = Post.create(title: 'Third Post', content: 'This is the first post..', user_id: marc.id)
