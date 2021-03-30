Game.destroy_all
User.destroy_all

u1 = User.create(email: 'myemail@email.com', password: 'cookies')

Game.create(title: 'Overwatch', img: 'https://i.imgur.com/F0UJHu1.jpg', production: 'Blizzard', platform: 'Nintendo Switch', user_id: u1.id)
Game.create(title: 'SSBU', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg', production: 'Nintendo', platform: 'Nintendo Switch', user_id: u1.id)
Game.create(title: 'Mario Kart Delux', img: 'https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._SL1500_.jpg', production: 'Nintendo', platform: 'Nintendo Switch', user_id: u1.id)
Game.create(title: 'BOTW', img: 'https://d2skuhm0vrry40.cloudfront.net/2017/articles/1/8/7/8/8/7/0/148430785862.jpg/EG11/thumbnail/598x968/format/jpg/quality/85', production: 'Nintendo', platform: 'Nintendo Switch', user_id: u1.id)
Game.create(title: 'Game Night', img: 'https://images-na.ssl-images-amazon.com/images/I/81YbdKhPkRL._SL1500_.jpg', production: 'Ubisoft', platform: 'Nintendo Switch', user_id: u1.id)
