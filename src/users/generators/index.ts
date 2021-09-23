import { lorem, datatype, name, address, image } from 'faker'
import { UserDto } from 'src/users/DTO/user.dto'

const getRandom = () => lorem.words().length

export const getUser = (): UserDto => ({
  id: datatype.uuid(),
  username: name.findName(),
  firstname: name.firstName(),
  lastname: name.lastName(),
  city: address.city(),
  job: name.jobType(),
  avatar: image.avatar(),
})

export const generateResource = <T = any>(fetcher: () => T) => {
  const count = getRandom()
  return Array(count)
    .fill('')
    .map(() => fetcher())
}

export const getUsers = () => generateResource(getUser)
