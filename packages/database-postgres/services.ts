import { prisma } from "."

export async function createUser(name: string, email: string) {
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  })
  console.log("User created:", newUser)
  return newUser
}

export async function getAllUsers() {
  const users = await prisma.user.findMany()
  console.log("All users:", users)
  return users
}

export async function updateUser(id: string, data: Partial<{ name: string; email: string }>) {
  const updatedUser = await prisma.user.update({
    where: { id },
    data,
  })
  console.log("User updated:", updatedUser)
  return updatedUser
}

export async function deleteUser(id: string) {
  const deletedUser = await prisma.user.delete({
    where: { id },
  })
  console.log("User deleted:", deletedUser)
  return deletedUser
}
