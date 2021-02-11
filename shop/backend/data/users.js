import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Adam',
    email: 'adam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Gabriel',
    email: 'gabriel@mail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Max',
    email: 'zmitrook@yandex.ru',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
