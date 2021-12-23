import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employee extends BaseModel {
  public static table = 'tst_employee'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string 

}
